import React, { useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import { Box, Button, Image, Text } from "@gluestack-ui/themed";
import { useTheme } from "../../theme/themeContext";
import { screenwiseHeight, screenwiseWidth } from "../../utils/styleHelpers";
import AppText from "../../components/text";
import { getStyles } from './styles';
import { DialIcon, DistanceIcon, EmailIcon, PhoneIcon, WebIcon } from "../../assets/svg/Svgs";
import IconButton from "../../components/iconButton";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const { fonts, colors } = useTheme();
  const styles = getStyles();
 

  return (
    <>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor={colors.appBackground}/>

      {/* Container */}
      <Box flex={1} backgroundColor={colors.appBackground} justifyContent="center" alignItems="center">

       <AppText>Home</AppText>
        
      </Box>
    </>
  );
};

export default HomeScreen;
