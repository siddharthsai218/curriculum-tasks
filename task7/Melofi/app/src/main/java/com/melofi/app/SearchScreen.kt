package com.melofi.app.ui.search

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.Alignment
import com.melofi.app.ui.home.NavBar
import androidx.navigation.NavController
import com.melofi.app.Routes
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.ui.res.painterResource
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import com.melofi.app.R
import androidx.compose.ui.draw.clip









@Composable
fun SearchScreen(navController: NavController) {
    var searchText by remember { mutableStateOf("") }


    var query by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
    ) {


        Column(
            modifier = Modifier
                .weight(1f)
                .padding(16.dp)
        ) {

            Box(
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(Color.DarkGray.copy(alpha = 0.6f))
                    .clickable { navController.popBackStack() },
                contentAlignment = Alignment.Center
            ) {
                Image(
                    painter = painterResource(id = R.drawable.back),
                    contentDescription = "Back",
                    modifier = Modifier.size(22.dp)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(48.dp)
                    .background(
                        color = Color.DarkGray,
                        shape = RoundedCornerShape(15.dp)
                    )
                    .padding(horizontal = 12.dp),
                contentAlignment = Alignment.CenterStart
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Image(
                        painter = painterResource(id = R.drawable.search),
                        contentDescription = "Back",
                        modifier = Modifier.size(22.dp)
                    )







                    Spacer(modifier = Modifier.width(10.dp))

                    TextField(
                        value = searchText,
                        onValueChange = { searchText = it },
                        placeholder = { Text("Search songs") },
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(50.dp),
                        shape = RoundedCornerShape(14.dp),
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color.DarkGray,
                            unfocusedContainerColor = Color.DarkGray,
                            focusedIndicatorColor = Color.Transparent,
                            unfocusedIndicatorColor = Color.Transparent,
                            focusedTextColor = Color.White,
                            unfocusedTextColor = Color.White,
                            focusedPlaceholderColor = Color.Gray,
                            unfocusedPlaceholderColor = Color.Gray
                        )
                    )


                }



                if (query.isEmpty()) {
                    Text(
                        text = "Search songs",
                        color = Color.Gray
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = "Top results",
                color = Color.Gray,
                fontSize = 16.sp
            )

            Spacer(modifier = Modifier.height(12.dp))

            SearchItem("Shape of You", "Ed Sheeran")
            SearchItem("Believer", "Imagine Dragons")
            SearchItem("Chal Chalo Chalo", "Son of Satyamurthy")

            Spacer(modifier = Modifier.height(16.dp))
        }


        NavBar(
            navController = navController,
            selectedTab = Routes.SEARCH
        )

    }
}
