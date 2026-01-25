package com.melofi.app.ui.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.melofi.app.R
import com.melofi.app.Routes




@Composable
fun NavBar(
    navController: NavController,
    selectedTab: String
) {
    NavigationBar(
        containerColor = Color.Black
    ) {

        NavigationBarItem(
            selected = selectedTab == Routes.HOME,
            onClick = { navController.navigate(Routes.HOME) },
            icon = {
                NavIcon(
                    selected = selectedTab == Routes.HOME,
                    iconRes = R.drawable.home
                )
            },
            colors = NavigationBarItemDefaults.colors(
                indicatorColor = Color.Transparent
            )
        )

        NavigationBarItem(
            selected = selectedTab == Routes.SEARCH,
            onClick = { navController.navigate(Routes.SEARCH) },
            icon = {
                NavIcon(
                    selected = selectedTab == Routes.SEARCH,
                    iconRes = R.drawable.search
                )
            },
            colors = NavigationBarItemDefaults.colors(
                indicatorColor = Color.Transparent
            )
        )

        NavigationBarItem(
            selected = selectedTab == Routes.LIBRARY,
            onClick = { navController.navigate(Routes.LIBRARY) },
            icon = {
                NavIcon(
                    selected = selectedTab == Routes.LIBRARY,
                    iconRes = R.drawable.library
                )
            },
            colors = NavigationBarItemDefaults.colors(
                indicatorColor = Color.Transparent
            )
        )
    }
}

@Composable
private fun NavIcon(
    selected: Boolean,
    iconRes: Int
) {
    Box(
        modifier = Modifier
            .size(44.dp)
            .clip(RoundedCornerShape(14.dp))
            .background(
                if (selected)
                    Color.White.copy(alpha = 0.15f)
                else
                    Color.Transparent
            ),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            painter = painterResource(iconRes),
            contentDescription = null,
            modifier = Modifier.size(24.dp),
            tint = if (selected) Color.White else Color.Gray
        )
    }
}

