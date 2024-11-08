import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

interface QRCodeReadAnimationProps {
  onAnimationFinish: () => void;
}

export const QRCodeReadAnimation: React.FC<QRCodeReadAnimationProps> = ({
  onAnimationFinish,
}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/QrCodeReadAnimation.json")}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 300,
    height: 300,
  },
});
