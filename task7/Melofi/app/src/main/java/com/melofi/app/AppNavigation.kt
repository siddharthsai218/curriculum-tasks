package com.melofi.app.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.*
import com.melofi.app.Routes
import com.melofi.app.ui.home.HomeScreen
import com.melofi.app.ui.search.SearchScreen
import com.melofi.app.ui.library.LibraryScreen
import com.melofi.app.ui.library.PlaylistScreen
import com.melofi.app.ui.login.LoginScreen
import com.melofi.app.ui.player.PlayerScreen
import com.melofi.app.ui.signup.SignupScreen



@Composable
fun AppNavigation() {

    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = Routes.LOGIN
    ) {

        composable(Routes.LOGIN) {
            LoginScreen(navController)
        }

        composable(Routes.SIGNUP) {
            SignupScreen(navController)
        }


        composable(Routes.HOME) {
            HomeScreen(navController)
        }

        composable(Routes.SEARCH) {
            SearchScreen(navController)
        }

        composable(Routes.LIBRARY) {
            LibraryScreen(navController)
        }

        composable(Routes.PLAYLIST) {
            PlaylistScreen(navController)


        }

        composable(Routes.PLAYER) {
            PlayerScreen(navController)
        }

    }
}
