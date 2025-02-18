import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import {getStyes} from './styles';
import {ScreensName, Strings} from '../../theme/strings';
import {reset} from '../../utils/navigationUtils';
import {useStore} from '../../zustand';
import {useTheme} from '../../theme/themeContext';
import {SplashScreenIcon} from '../../assets/svg/Svgs';

const SplashScreen = () => {
  const styles = getStyes();
  const {fonts, colors} = useTheme();
  const {isAuth, accessToken} = useStore(state => state);

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset(
        isAuth && accessToken !== ''
          ? ScreensName.DrawerNavigatorScreen
          : ScreensName.AuthStackScreen,
        {},
      );
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isAuth]);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.splashScreenColor}
      />
      <View style={styles.container}>
        <View style={styles.splashIcon}>
          <SplashScreenIcon />
          <Text style={[fonts.h2Bold, styles.appNameStyle]}>
            {Strings.profitDial}
          </Text>
        </View>
        <View style={styles.settingUpStyle}>
          <ActivityIndicator color={colors.white} size={30} />
          <Text style={[fonts.buttonBold, styles.appNameStyle]}>
            {Strings.SettingUp}
          </Text>
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
