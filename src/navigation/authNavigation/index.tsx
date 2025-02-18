import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/themeContext';
import {ScreensName} from '../../theme/strings';
import SignInScreen from '../../screens/signInScreen';
// import ForgotPasswordScreen from '../../screens/forgotPasswordScreen';
// import EmailSentScreen from '../../screens/emailSentScreen';

const AuthStack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

export const AuthStackScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[{flex: 1, backgroundColor: colors.white}]}
      edges={['top']}>
      <AuthStack.Navigator initialRouteName={ScreensName.SignInScreen}>
        <AuthStack.Screen
          name={ScreensName.SignInScreen}
          component={SignInScreen}
          options={navOptionHandler}
        />
        {/* <AuthStack.Screen
          name={ScreensName.ForgotPasswordScreen}
          component={ForgotPasswordScreen}
          options={navOptionHandler}
        />
        <AuthStack.Screen
          name={ScreensName.EmailSentScreen}
          component={EmailSentScreen}
          options={navOptionHandler}
        /> */}
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
