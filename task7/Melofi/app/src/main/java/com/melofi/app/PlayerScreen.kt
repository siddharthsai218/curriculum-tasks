package com.melofi.app.ui.player

import androidx.compose.foundation.background
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

@Composable
fun PlayerScreen(navController: NavController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        IconButton(
            onClick = { navController.popBackStack() },
            modifier = Modifier.align(Alignment.Start)
        ) {
            Icon(
                painter = painterResource(R.drawable.back),
                modifier = Modifier.size(48.dp),
                contentDescription = null,
                tint = Color.White
            )
        }

        Spacer(modifier = Modifier.height(24.dp))

        Icon(
            painter = painterResource(R.drawable.headphone),
            contentDescription = null,
            modifier = Modifier.size(220.dp),
            tint = Color.White
        )

        Spacer(modifier = Modifier.height(24.dp))

        Text("Shape of You", color = Color.White, style = MaterialTheme.typography.titleLarge)
        Text("Ed Sheeran", color = Color.Gray)

        Spacer(modifier = Modifier.height(32.dp))

        Slider(
            value = 0.3f,
            onValueChange = {},
            colors = SliderDefaults.colors(
                thumbColor = Color.White,
                activeTrackColor = Color.White
            )
        )

        Spacer(modifier = Modifier.height(24.dp))

        Row(
            horizontalArrangement = Arrangement.SpaceEvenly,
            modifier = Modifier.fillMaxWidth()
        ) {
            Icon(painterResource(R.drawable.prev), null, tint = Color.White, modifier = Modifier.size(48.dp))
            Icon(painterResource(R.drawable.play), null, tint = Color.White, modifier = Modifier.size(48.dp))
            Icon(painterResource(R.drawable.next), null, tint = Color.White, modifier = Modifier.size(48.dp))
        }

        Spacer(modifier = Modifier.height(24.dp))

        Button(
            onClick = {},
            shape = RoundedCornerShape(20.dp)
        ) {
            Text("LYRICS")
        }
    }
}
