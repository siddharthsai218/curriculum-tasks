







from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from trending import get_trending_songs
from trending import search_songs
app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///melofi.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)



@app.route("/signup", methods=["POST", "OPTIONS"])
def signup():
    if request.method == "OPTIONS":
        return jsonify({"ok": True}), 200

    data = request.json

    hashed_pw = generate_password_hash(data["password"])

    user = User(
        username=data["username"],
        email=data["email"],
        password=hashed_pw
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created"}), 201








@app.route("/login", methods=["POST", "OPTIONS"])
def login():
    if request.method == "OPTIONS":
        return jsonify({"ok": True}), 200

    data = request.json

    user = User.query.filter_by(email=data["email"]).first()

    if not user or not check_password_hash(user.password, data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({
        "user_id": user.id,
        "username": user.username
    }), 200


@app.route("/songs")
def songs():
    return jsonify(get_trending_songs())


class Playlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)


class PlaylistSong(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    playlist_id = db.Column(
        db.Integer,
        db.ForeignKey("playlist.id"),
        nullable=False
    )

    
    song_id = db.Column(db.String(100), nullable=False)

@app.route("/playlists", methods=["POST"])
def create_playlist():
    data = request.json

    playlist = Playlist(
        name=data["name"],
        user_id=data["user_id"]
    )

    db.session.add(playlist)
    db.session.commit()

    return jsonify({
        "playlist_id": playlist.id,
        "name": playlist.name
    }), 201



@app.route("/users/<int:user_id>/playlists", methods=["GET"])
def get_user_playlists(user_id):
    playlists = Playlist.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": p.id,
            "name": p.name
        }
        for p in playlists
    ])


@app.route("/playlists/<int:playlist_id>/add", methods=["POST"])
def add_song_to_playlist(playlist_id):
    data = request.json

    song = PlaylistSong(
        playlist_id=playlist_id,
        song_id=data["song_id"]
    )

    db.session.add(song)
    db.session.commit()

    return jsonify({"message": "Song added"}), 201


import requests

@app.route("/playlists/<int:playlist_id>/songs", methods=["GET"])
def get_playlist_songs(playlist_id):
    playlist_songs = PlaylistSong.query.filter_by(playlist_id=playlist_id).all()

    song_ids = [ps.song_id for ps in playlist_songs]

    if not song_ids:
        return jsonify([])

   
    discovery = requests.get("https://api.audius.co").json()["data"][0]

    full_songs = []

    for song_id in song_ids:
        res = requests.get(f"{discovery}/v1/tracks/{song_id}")
        data = res.json().get("data")

        if data:
            full_songs.append({
                "id": data["id"],
                "title": data["title"],
                "artist": data["user"]["name"],
                "cover": data["artwork"]["480x480"] if data.get("artwork") else None,
                "audio": f"{discovery}/v1/tracks/{data['id']}/stream?app_name=melofi"
            })

    return jsonify(full_songs)


@app.route("/playlists/<int:playlist_id>/remove", methods=["POST"])
def remove_song_from_playlist(playlist_id):
    data = request.json

    song = PlaylistSong.query.filter_by(
        playlist_id=playlist_id,
        song_id=data["song_id"]
    ).first()

    if not song:
        return jsonify({"error": "Song not found"}), 404

    db.session.delete(song)
    db.session.commit()

    return jsonify({"message": "Song removed"})



@app.route("/songs/search")
def search():
    query = request.args.get("q")

    if not query:
        return jsonify([])

    return jsonify(search_songs(query))


def get_liked_playlist(user_id):
    playlist = Playlist.query.filter_by(
        user_id=user_id,
        name="Liked Songs"
    ).first()

    if not playlist:
        playlist = Playlist(
            name="Liked Songs",
            user_id=user_id
        )
        db.session.add(playlist)
        db.session.commit()

    return playlist


@app.route("/liked-songs/add", methods=["POST"])
def like_song():
    data = request.json
    user_id = data["user_id"]
    song_id = data["song_id"]

    liked_playlist = get_liked_playlist(user_id)

    
    existing = PlaylistSong.query.filter_by(
        playlist_id=liked_playlist.id,
        song_id=song_id
    ).first()

    if existing:
        return jsonify({"message": "Already liked"}), 200

    song = PlaylistSong(
        playlist_id=liked_playlist.id,
        song_id=song_id
    )

    db.session.add(song)
    db.session.commit()

    return jsonify({"message": "Song liked"}), 201


@app.route("/liked-songs/remove", methods=["POST"])
def unlike_song():
    data = request.json
    user_id = data["user_id"]
    song_id = data["song_id"]

    liked_playlist = get_liked_playlist(user_id)

    song = PlaylistSong.query.filter_by(
        playlist_id=liked_playlist.id,
        song_id=song_id
    ).first()

    if not song:
        return jsonify({"error": "Song not found"}), 404

    db.session.delete(song)
    db.session.commit()

    return jsonify({"message": "Song unliked"})






if __name__ == "__main__":
    app.run(debug=True)











