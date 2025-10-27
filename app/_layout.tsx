import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="register" options={{ title: "Register", headerShown: false }} />
      <Stack.Screen name="reportChart" options={{ title: "Report Chart", headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
      <Stack.Screen name="admin" options={{ title: "Admin", headerShown: false }} />
      <Stack.Screen name="mapPage" options={{ title: "Map", headerShown: false }} />
      <Stack.Screen name="mapPageAdmin" options={{ title: "Map", headerShown: false }} />
    </Stack>
  );
} 