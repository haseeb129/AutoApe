import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/themeContext';
import {ScreensName} from '../../theme/strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import DummyScreen from '../../screens/mainScreen';
import DummyScreen1 from '../../screens/mainScreen copy';
import {DialIcon} from '../../assets/svg/Svgs';

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
          tabBarActiveTintColor: colors.buttonPrimaryColor,
          tabBarInactiveTintColor: colors.tabBarInactiveColor,
          tabBarLabelStyle: {
            ...fonts.captionSemiBold,
            marginTop: -5,
          },
        }}
        initialRouteName={ScreensName.DummyScreen}>
        <Tab.Screen
          name={ScreensName.DummyScreen}
          component={DummyScreen1}
          options={{
            title: 'Tab 1',
            tabBarIcon: ({color}) => (
              <DialIcon height={22} width={22} strokeColor={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.DummyScreen1}
          component={DummyScreen1}
          options={{
            title: 'Tab 2',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.DummyScreen2}
          component={DummyScreen1}
          options={{
            title: 'Tab 2',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
         <Tab.Screen
          name={ScreensName.DummyScreen3}
          component={DummyScreen1}
          options={{
            title: 'Tab 2',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
         <Tab.Screen
          name={ScreensName.DummyScreen4}
          component={DummyScreen1}
          options={{
            title: 'Tab 2',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
        {/* <Tab.Screen
          name={ScreensName.DummyScreen}
          component={DummyScreen}
          options={{
            title: 'Tab 3',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={22} width={22} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.DummyScreen}
          component={DummyScreen}
          options={{
            title: 'Tab 4',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={24} width={24} />
            ),
          }}
        />
        <Tab.Screen
          name={ScreensName.DummyScreen}
          component={DummyScreen}
          options={{
            title: 'Tab 5',
            tabBarIcon: ({color}) => (
              <DialIcon strokeColor={color} height={23} width={23} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
};
