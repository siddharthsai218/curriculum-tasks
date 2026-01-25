package com.melofi.app.ui.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun SongCard(title: String) {
    Column(modifier = Modifier.width(200.dp)) {

        Box(
            modifier = Modifier
                .size(200.dp)
                .background(Color.DarkGray)
        )

        Spacer(modifier = Modifier.height(8.dp))

        Text(
            text = title,
            color = Color.White,
            maxLines = 1
        )
    }
}
