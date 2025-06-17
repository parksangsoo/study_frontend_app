import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={
          {
            //헤더 숨김 옵션
          }
        }
      />
      <Stack.Screen
        name="(home)"
        options={{
          //헤더 숨김 옵션
          headerShown: false,
        }}
      />
    </Stack>
  );
}
