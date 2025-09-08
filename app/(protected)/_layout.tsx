import { Redirect, Stack } from "expo-router";

const isSignedIn = false; // Replace with your actual authentication logic
export default function ProtectedLayout() {
  if (isSignedIn) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
