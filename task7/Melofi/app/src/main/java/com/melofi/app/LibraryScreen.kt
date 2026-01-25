package com.melofi.app.ui.library

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.melofi.app.R
import com.melofi.app.Routes
import com.melofi.app.ui.home.NavBar



@Composable
fun LibraryScreen(navController: NavController) {

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
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(Color.DarkGray.copy(alpha = 0.6f))
                    .clickable { navController.popBackStack() },
                contentAlignment = Alignment.Center
            ) {
                Image(
                    painter = painterResource(id = R.drawable.back),
                    contentDescription = "Back",
                    modifier = Modifier.size(22.dp)
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            LibraryItem(
                title = "My Songs",
                iconRes = R.drawable.headphone
            ) {
                navController.navigate(Routes.PLAYLIST)
            }

            LibraryItem(
                title = "Downloads",
                iconRes = R.drawable.download
            ) { }

            LibraryItem(
                title = "Liked Songs",
                iconRes = R.drawable.like
            ) { }



            Spacer(modifier = Modifier.height(16.dp))
        }


        NavBar(
            navController = navController,
            selectedTab = Routes.LIBRARY
        )
    }
}
