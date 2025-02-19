import React, { useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import { Box, Button, Image, Text } from "@gluestack-ui/themed";
import { useTheme } from "../../theme/themeContext";
import AppText from "../../components/text";
import { getStyles } from './styles';
const { width } = Dimensions.get("window");

const MessagesScreen = () => {
  const { fonts, colors } = useTheme();
  const styles = getStyles();
 

  return (
    <>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor={colors.appBackground} />

      {/* Container */}
      <Box flex={1} backgroundColor={colors.appBackground} justifyContent="center" alignItems="center">

       <AppText>Messages</AppText>
        
      </Box>
    </>
  );
};

export default MessagesScreen;
