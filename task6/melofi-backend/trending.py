
import requests

AUDIUS_BASE = "https://api.audius.co"

def get_trending_songs():
    res = requests.get(f"{AUDIUS_BASE}/v1/tracks/trending")
    data = res.json().get("data", [])

    songs = []
    for track in data[:10]:
        songs.append({
            "id": track["id"],
            "title": track["title"],
            "artist": track["user"]["name"],
            "cover": track["artwork"]["480x480"] if track.get("artwork") else None,
            "audio": f"{AUDIUS_BASE}/v1/tracks/{track['id']}/stream"
        })

    return songs

import requests

def search_songs(query):
    res = requests.get("https://api.audius.co")
    discovery = res.json()["data"][0]

    search_res = requests.get(
        f"{discovery}/v1/tracks/search",
        params={"query": query, "limit": 10}
    )

    data = search_res.json().get("data", [])

    songs = []
    for track in data:
        songs.append({
            "id": track["id"],
            "title": track["title"],
            "artist": track["user"]["name"],
            "cover": track["artwork"]["480x480"] if track.get("artwork") else None,
            "audio": f"{discovery}/v1/tracks/{track['id']}/stream?app_name=melofi"
        })

    return songs
