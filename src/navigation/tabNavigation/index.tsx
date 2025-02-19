import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/themeContext';
import {ScreensName} from '../../theme/strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import { HomeIcon, MessageIcon, NearbyIcon, ProfileIcon} from '../../assets/svg/Svgs';
import { Image } from '@gluestack-ui/themed';
import { screenwiseHeight, screenwiseWidth } from '../../utils/styleHelpers';
import NearByScreen from '../../screens/nearbyScreen';
import HomeScreen from '../../screens/homeScreen';
import Sellingcreen from '../../screens/sellingScreen';
import MessagesScreen from '../../screens/messagesScreen';
import ProfileScreen from '../../screens/profileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabScreen: FC = () => {
  const {colors, fonts} = useTheme();

  return (
    <SafeAreaView
      style={[{flex: 1, backgroundColor: colors.white}]}
      edges={['bottom']}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingHorizontal: 16,
            paddingBottom: 8,
            height: 60,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: colors.textInputBorderColor,
          },
          tabBarActiveTintColor: colors.tabBarActiveColor,
          tabBarInactiveTintColor: colors.tabBarInactiveColor,
          tabBarLabelStyle: {
            ...fonts.captionSemiBold,
            marginTop: -5,
          },
        }}
        initialRouteName={ScreensName.NearByScreen}>
        <Tab.Screen
          name={ScreensName.NearByScreen}
          component={NearByScreen}
          options={{
            title: 'Nearby',
            tabBarIcon: ({color}) => (
              <NearbyIcon height={22} width={22} strokeColor={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.HomeScreen}
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => (
              <HomeIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.Sellingcreen}
          component={Sellingcreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image source={require('../../assets/images/selling.png')} 
              width={screenwiseWidth(57)}
              height={screenwiseHeight(57)}
              resizeMode='contain'
              marginBottom={28}/>
            ),
            title: 'Selling',
          }}
        />
         <Tab.Screen
          name={ScreensName.MessagesScreen}
          component={MessagesScreen}
          options={{
            title: 'Messages',
            tabBarIcon: ({color}) => (
              <MessageIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
         <Tab.Screen
          name={ScreensName.ProfileScreen}
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({color}) => (
              <ProfileIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
