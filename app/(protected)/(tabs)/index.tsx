import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={<Image source={require("@/assets/images/header.jpg")} />}
      headerBackgroundColor={{ dark: "#000", light: "#fff" }}
    >
      <Text>Hello World!</Text>
    </ParallaxScrollView>
  );
}
