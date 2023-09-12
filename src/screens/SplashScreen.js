import { StyleSheet, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
