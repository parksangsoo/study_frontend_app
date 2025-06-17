import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>login page</Text>
      </View>
      <Pressable
        onPress={() => {
          router.push("/(home)");
        }}
      >
        <View>
          <Text>move home</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
