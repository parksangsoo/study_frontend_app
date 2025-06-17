import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import { Pressable } from "react-native";

export default function MypageTabs() {
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <Pressable
            onPress={() => {
              // 예: 사이드 메뉴 열기

              navigation.openDrawer();
            }}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu-outline" size={24} color="black" />
          </Pressable>
        ),
        // ✅ 모든 탭에 공통으로 헤더 오른쪽 버튼 적용
        headerRight: () => (
          <Pressable onPress={() => {}} style={{ marginRight: 16 }}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </Pressable>
        ),
        tabBarActiveTintColor: "red", // ← 이런 옵션도 공통으로 가능
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="more" />
      <Tabs.Screen name="(mypage)" />
    </Tabs>
  );
}
