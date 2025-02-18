import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreensName} from '../../theme/strings';
import {AuthStackScreen} from '../authNavigation';
import SplashScreen from '../../components/splashScreen';
import {useStore} from '../../zustand';
import { AppStackScreen } from '../appNavigation';

const RootStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export const RootStackScreen: FC = () => {
  const {isAuth, accessToken} = useStore(state => state);

  return (
    <RootStack.Navigator initialRouteName={ScreensName.SplashScreen}>
      {!isAuth && accessToken === '' ? (
        <>
          <RootStack.Screen
            name={ScreensName.SplashScreen}
            component={SplashScreen}
            options={navOptionHandler}
          />
          <RootStack.Screen
            name={ScreensName.AuthStackScreen}
            component={AuthStackScreen}
            options={navOptionHandler}
          />
        </>
      ) :
       (
        <RootStack.Screen
          name={ScreensName.DrawerNavigatorScreen}
          component={AppStackScreen}
          options={navOptionHandler}
        />
      )
      }
    </RootStack.Navigator>
  );
};
