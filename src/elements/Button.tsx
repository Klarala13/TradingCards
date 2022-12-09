import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Button = ({ onPress, title, accessibilityLabel, style }) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={style}
        accessibilityLabel={accessibilityLabel}
      >
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    minHeight: 50,
    textAlignVertical: "center",
  },

  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
});
export default Button;
