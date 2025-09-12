import { Stack } from 'expo-router';
import React from 'react';

// This is the main navigator for the entire app.
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="index" />
      <Stack.Screen name="ingredients/[id]" />
      <Stack.Screen name="payment" />
    </Stack>
  );
}