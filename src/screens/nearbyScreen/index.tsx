import React, { useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import { Box, Button, FlatList, Image, ScrollView, Text } from "@gluestack-ui/themed";
import { useTheme } from "../../theme/themeContext";
import { screenwiseHeight, screenwiseWidth } from "../../utils/styleHelpers";
import AppText from "../../components/text";
import { getStyles } from './styles';
import { DialIcon, DistanceIcon, EmailIcon, FeaturedIcon, NearbyIcon, PhoneIcon, WebIcon } from "../../assets/svg/Svgs";
import IconButton from "../../components/iconButton";
import { ListItem } from "./listItem";

const { width } = Dimensions.get("window");

const NearByScreen = () => {
  const { fonts, colors } = useTheme();
  const styles = getStyles();
  const [selectedTab, setSelectedTab] = useState('Home');

  const tabs = ['Home', 'Vehicles', 'Location'];
  const actionsArray = [
    {
      text: 'Web',
      icon: <WebIcon />,
      onPress: () => {
        console.log("Web", "Press")
      },
    },
    {
      text: 'Phone',
      icon: <PhoneIcon />,
      onPress: () => console.log("Phone", "Press"),
    },
    {
      text: 'Email',
      icon: <EmailIcon />,
      onPress: () => console.log("Email", "Press"),
    },
  ];
  
  const HomeComponent = () => {
    return (
      <FlatList
      data={new Array(10)}
      renderItem={() => <ListItem />}
      />
    )
  }

  return (
    <>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor={colors.appBackground} />


      <ScrollView
        flex={1}>
        {/* Container */}
        <>
          <Box width="100%" backgroundColor={colors.appBackground} marginBottom={12}>

            {/* Image Wrapper for Rounded Corners */}
            <Box width={width} height={268} borderTopLeftRadius={16} borderTopRightRadius={16} overflow="hidden" paddingBottom={50}>
              <Image
                source={require("../../assets/images/placeholder.jpg")}
                width={width}
                height={screenwiseHeight(240)}
                resizeMode="cover"
              />

            </Box>
            <Image
              source={require("../../assets/images/storeLogo.png")}
              position="absolute"
              top={187} left={30} right={0}
              width={screenwiseWidth(75)}
              height={screenwiseHeight(88)}
              resizeMode="cover"
              borderRadius={70}
            />

            <Box paddingHorizontal={28} justifyContent="space-between" flexDirection="row">
              <AppText style={styles.title}>1 Stop Motor</AppText>
              <Box flexDirection="row" alignItems="center">
                <DistanceIcon />
                <AppText style={styles.distance}>12 km away</AppText>
              </Box>
            </Box>
            <Box paddingHorizontal={28} justifyContent="space-between" flexDirection="row" marginVertical={6}>
              <Box flexDirection="row" alignItems="center">
                <Box width={12} height={12} borderRadius={6} backgroundColor="green" marginEnd={6} />
                <AppText style={[styles.distance, { fontSize: 14, fontWeight: '400' }]}>Open (7am - 6pm)</AppText>
              </Box>
              <AppText style={[styles.distance, { fontSize: 14, fontWeight: '400' }]}>Finance Available </AppText>

            </Box>
            <Box flexDirection="row" justifyContent="center" marginVertical={12}>
              {actionsArray.map((option, index) => (
                <Box key={index} marginHorizontal={8}>
                  <IconButton
                    icon={option.icon}
                    text={option.text}
                    onPress={option.onPress}
                  />
                </Box>
              ))}
            </Box>
            <Box flexDirection="row" justifyContent="space-evenly" >
              {tabs.map((item, index) => {
                return (
                  <Button
                    key={index}
                    style={
                      selectedTab === item
                        ? styles.activeTabView
                        : styles.inactiveTabView
                    }
                    onPress={() => {
                      setSelectedTab(item)
                      console.log("SelectedItem is  : ", item)
                    }}>
                    <AppText style={[
                      fonts.buttonBold,
                      {
                        color:
                          selectedTab === item
                            ? colors.black
                            : colors.tabInActiveTextColor,
                        marginHorizontal: screenwiseWidth(30)
                      },
                    ]}>{item}</AppText>
                  </Button>
                )
              })}
            </Box>

          </Box>


          {selectedTab === "Home" && HomeComponent()}
          {selectedTab === "Vehicles" && HomeComponent()}
          {selectedTab === "Location" && HomeComponent()}
        </>
      </ScrollView>
    </>
  );
};

export default NearByScreen;
