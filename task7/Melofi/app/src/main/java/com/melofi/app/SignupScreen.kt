package com.melofi.app.ui.signup

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.melofi.app.R
import com.melofi.app.Routes

@Composable
fun SignupScreen(navController: NavController) {

    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var confirmPassword by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.Black)
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        Spacer(modifier = Modifier.height(50.dp))

        Image(
            painter = painterResource(id = R.drawable.melofilogo),
            contentDescription = "MeloFi Logo",
            modifier = Modifier.size(150.dp)
        )

        Spacer(modifier = Modifier.height(30.dp))

        Text(
            text = "Create Account",
            color = Color.White,
            style = MaterialTheme.typography.headlineMedium
        )

        Spacer(modifier = Modifier.height(30.dp))

        OutlinedTextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Username") },
            modifier = Modifier.fillMaxWidth(),
            colors = darkTextFieldColors()
        )

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") },
            modifier = Modifier.fillMaxWidth(),
            colors = darkTextFieldColors()
        )

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            visualTransformation = PasswordVisualTransformation(),
            modifier = Modifier.fillMaxWidth(),
            colors = darkTextFieldColors()
        )

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = confirmPassword,
            onValueChange = { confirmPassword = it },
            label = { Text("Confirm Password") },
            visualTransformation = PasswordVisualTransformation(),
            modifier = Modifier.fillMaxWidth(),
            colors = darkTextFieldColors()
        )

        Spacer(modifier = Modifier.height(24.dp))

        Button(
            onClick = {
                navController.navigate(Routes.HOME)
            },
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFFF5A742),
                contentColor = Color.Black
            )
        ) {
            Text("Sign up")
        }

        Spacer(modifier = Modifier.height(24.dp))

        Row {
            Text("Already have an account? ", color = Color.Gray)
            TextButton(onClick = {
                navController.navigate(Routes.LOGIN)
            }) {
                Text("Login", color = Color.White)
            }
        }
    }
}

@Composable
fun darkTextFieldColors() = OutlinedTextFieldDefaults.colors(
    focusedBorderColor = Color.White,
    unfocusedBorderColor = Color.DarkGray,
    focusedLabelColor = Color.White,
    unfocusedLabelColor = Color.Gray,
    focusedTextColor = Color.White,
    unfocusedTextColor = Color.White,
    cursorColor = Color.White
)
