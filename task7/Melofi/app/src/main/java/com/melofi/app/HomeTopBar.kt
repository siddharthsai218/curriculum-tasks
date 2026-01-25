package com.melofi.app.ui.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.melofi.app.R

@Composable
fun HomeTopBar() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = "MeloFi",
            color = Color.White,
            style = MaterialTheme.typography.headlineMedium
        )

        Image(
            painter = painterResource(id = R.drawable.profile),
            contentDescription = "MeloFi Logo",
            modifier = Modifier.size(30.dp)
        )
    }
}
