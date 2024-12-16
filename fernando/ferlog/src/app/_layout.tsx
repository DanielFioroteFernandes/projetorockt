import { Stack } from "expo-router";
import { colors, fontFamily } from "@/styles/theme";

import { Loading } from "@/components/loading";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

//importação da fonte utilizada

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  // para tirar o cabeçalho do aplicativo screenOptions={{ headerShown: false }}
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[200] },
      }}
    />
  );
}
