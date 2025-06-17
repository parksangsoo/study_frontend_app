import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="(tabs)" />
        {/* 사이드 메뉴 항목 추가 가능 */}
        <Drawer.Screen name="settings" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
