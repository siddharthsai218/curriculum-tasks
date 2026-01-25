package com.melofi.app.ui.library

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.melofi.app.R
import com.melofi.app.ui.home.NavBar
import androidx.navigation.NavController
import com.melofi.app.Routes



import androidx.compose.runtime.Composable

@Composable

fun PlaylistScreen(navController: NavController) {


    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
    ) {


        Column(
            modifier = Modifier
                .weight(1f)
                .padding(16.dp)
        ) {


            Box(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.Center
            ) {
                Image(
                    painter = painterResource(id = R.drawable.headphone),
                    contentDescription = "Playlist Image",
                    modifier = Modifier
                        .size(160.dp)
                        .background(
                            color = Color.DarkGray,
                            shape = RoundedCornerShape(12.dp)
                        )
                        .padding(24.dp)
                )
            }



            Spacer(modifier = Modifier.height(25.dp))

            Text(
                text = "My Songs",
                color = Color.White,
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold
            )

            Spacer(modifier = Modifier.height(45.dp))


            PlaylistItem("Shape of You", "Ed Sheeran")
            PlaylistItem("Believer", "Imagine Dragons")
            PlaylistItem("Chal Chalo Chalo", "Son of Satyamurthy")
        }


        NavBar(
            navController = navController,
            selectedTab = Routes.PLAYLIST
        )

    }
}
