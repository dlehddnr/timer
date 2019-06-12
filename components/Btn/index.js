import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Btn = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <Ionicons name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
};

Btn.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default Btn;
