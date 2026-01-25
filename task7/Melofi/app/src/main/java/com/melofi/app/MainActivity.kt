package com.melofi.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import com.melofi.app.navigation.AppNavigation
import com.melofi.app.ui.home.HomeScreen
import com.melofi.app.ui.library.LibraryItem
import com.melofi.app.ui.library.LibraryScreen
import com.melofi.app.ui.library.PlaylistScreen
import com.melofi.app.ui.login.LoginScreen
import com.melofi.app.ui.search.SearchScreen

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            AppNavigation()
        }
    }
}
