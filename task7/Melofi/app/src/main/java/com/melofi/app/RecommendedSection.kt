package com.melofi.app.ui.home

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.background
import androidx.compose.ui.unit.sp
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp



@Composable
fun RecommendedSection() {
    Column(
        modifier = Modifier.padding(16.dp)
    ) {

        Text(
            text = "Recommended",
            color = Color.White,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold


        )

        Spacer(modifier = Modifier.height(12.dp))

        Row {
            SongCard(title = "Imagine Dragons")
            Spacer(modifier = Modifier.width(12.dp))
            SongCard(title = "Hi Nanna")
            Spacer(modifier = Modifier.width(12.dp))
            SongCard(title = "OG")
        }
    }
}






