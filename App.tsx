/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {isMountedRef, navigationRef} from './src/utils/navigationUtils';
import {useNetInfo} from '@react-native-community/netinfo';
import {useStore} from './src/zustand';
import {ThemeProvider, useTheme} from './src/theme/themeContext';
import AppLoader from './src/components/appLoader';
import {ToastProvider} from 'react-native-toast-notifications';
import { ToastErrorIcon,ToastInfoIcon,ToastSuccessIcon,ToastWarningIcon } from './src/assets/svg/Svgs';
import ToastNotification from './src/components/toastNotification';
import {RootStackScreen} from './src/navigation/rootNavigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  const {colors, fonts} = useTheme();
  const {setToastMessage} = useStore(state => state);

  const InternetState = useNetInfo();

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (
      InternetState?.isConnected === false &&
      InternetState?.isInternetReachable === false
    ) {
      setToastMessage({
        message: 'No Internet Connection',
        type: 'danger',
      });
    }
  }, [InternetState]);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
      <ThemeProvider>
          <ToastProvider
            successIcon={<ToastSuccessIcon />}
            successColor={colors.emailSentHeadingColor}
            dangerIcon={<ToastErrorIcon />}
            dangerColor={colors.emailSentHeadingColor}
            warningIcon={<ToastWarningIcon />}
            warningColor={colors.emailSentHeadingColor}
            textStyle={[fonts.button, {paddingHorizontal: 12}]}
            style={{width: '100%', borderRadius: 8, padding: 12}}
            placement={'top'}>
            <RootStackScreen />
            <AppLoader />
            <ToastNotification />
          </ToastProvider>
        </ThemeProvider>
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
