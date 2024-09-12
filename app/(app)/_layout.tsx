import React from "react";
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

const Root = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
};
export default Root;
