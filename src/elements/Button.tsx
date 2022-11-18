import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title, accessibilityLabel }) => {
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      accessibilityLabel={accessibilityLabel}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#000",
    color: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
  },
});

export default Button;
