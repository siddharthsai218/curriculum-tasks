package com.melofi.app.ui.player

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.melofi.app.R
import com.melofi.app.Routes

@Composable
fun MiniPlayer(navController: NavController) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(64.dp)
            .background(Color.DarkGray, RoundedCornerShape(12.dp))
            .padding(horizontal = 15.dp)
            .clickable {
                navController.navigate(Routes.PLAYER)
            },
        verticalAlignment = Alignment.CenterVertically
    ) {

        Icon(
            painter = painterResource(R.drawable.headphone),
            contentDescription = null,
            tint = Color.White,
            modifier = Modifier.size(32.dp)
        )

        Spacer(modifier = Modifier.width(12.dp))

        Column(
            modifier = Modifier.weight(1f)
        ) {
            Text("Shape of You", color = Color.White)
            Text("Ed Sheeran", color = Color.LightGray, fontSize = MaterialTheme.typography.bodySmall.fontSize)
        }

        IconButton(onClick = { /* play / pause later */ }) {
            Icon(
                painter = painterResource(R.drawable.play),
                contentDescription = null,
                modifier = Modifier.size(20.dp),
                tint = Color.White
            )
        }
    }
}
