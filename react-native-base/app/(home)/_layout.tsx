import { Tabs } from "expo-router";

export default function Index() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="more" />
      <Tabs.Screen name="(mypage)" />
    </Tabs>
  );
}
