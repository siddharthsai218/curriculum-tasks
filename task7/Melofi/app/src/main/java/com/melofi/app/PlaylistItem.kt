package com.melofi.app.ui.library

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp


@Composable
fun PlaylistItem(
    title: String,
    artist: String
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {

        Column(
            modifier = Modifier.weight(1f)
        ) {
            Text(
                text = title,
                color = Color.White,
                fontSize = 16.sp
            )

            Text(
                text = artist,
                color = Color.Gray,
                fontSize = 14.sp
            )
        }

        Text(
            text = "⋮",
            color = Color.Gray,
            fontSize = 20.sp
        )
    }
}
