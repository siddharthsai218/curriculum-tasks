package com.melofi.app.ui.home


import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.navigation.NavController
import com.melofi.app.ui.home.NavBar

import com.melofi.app.Routes
import com.melofi.app.ui.player.MiniPlayer


@Composable
fun HomeScreen(navController: NavController) {

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
    ) {


        Column(modifier = Modifier.weight(1f)) {
            HomeTopBar()
            RecommendedSection()
            RecentlyPlayed()
        }


        MiniPlayer(navController)


        NavBar(
            navController = navController,
            selectedTab = Routes.HOME
        )
    }
}

