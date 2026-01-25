package com.melofi.app.ui.library


import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp


@Composable
fun LibraryItem(
    title: String,
    iconRes: Int,
    onClick: () -> Unit
) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .padding(vertical = 12.dp)
    ) {

        Image(
            painter = painterResource(id = iconRes),
            contentDescription = title,
            modifier = Modifier
                .size(100.dp)
                .background(
                    color = Color.DarkGray,
                    shape = RoundedCornerShape(12.dp)
                )
                .padding(10.dp)
        )

        Spacer(modifier = Modifier.width(16.dp))

        Text(
            text = title,
            color = Color.White,
            fontSize = 16.sp
        )
    }
}
