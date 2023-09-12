import { View, SafeAreaView, Text, ScrollView } from "react-native";
import React from "react";
import { Input, Button } from "@rneui/themed";

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>Reset Password</Text>

        <Input
          // label="Email"
          placeholder="Email"
          labelStyle={{ fontWeight: "400", color: "gray" }}
        />
        <Button title="Reset Password" />
      </ScrollView>
    </SafeAreaView>
  );
}
