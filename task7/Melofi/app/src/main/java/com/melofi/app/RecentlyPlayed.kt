package com.melofi.app.ui.home

import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun RecentlyPlayed() {
    Column(modifier = Modifier.padding(16.dp)) {

        Text("Recently Played",
            color = Color.White,
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold
        )

        Spacer(modifier = Modifier.height(12.dp))

        Row {
            SongCard("Sapphire")
            Spacer(modifier = Modifier.width(12.dp))
            SongCard("Hungry Cheetah")
        }
    }
}
