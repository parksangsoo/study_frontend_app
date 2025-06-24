import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";

export default function MypageTabs() {
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black", // 탭바 배경색
        },
        tabBarActiveTintColor: "white", // 선택된 탭 아이콘/텍스트 색
        tabBarInactiveTintColor: "gray", // 비활성 탭 색
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            // 예시: react-native-vector-icons의 Ionicons 사용
            // Ionicons를 설치하고 import 해야 함: import Ionicons from 'react-native-vector-icons/Ionicons';
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shorts"
        options={{
          title: "쇼츠",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          title: "라이브",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="radio-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "검색",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(mypage)"
        options={{
          title: "기록",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
