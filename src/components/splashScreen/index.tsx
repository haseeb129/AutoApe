import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { getStyes } from './styles';
import { ScreensName, Strings } from '../../theme/strings';
import { reset } from '../../utils/navigationUtils';
import { useStore } from '../../zustand';
import { useTheme } from '../../theme/themeContext';
import { SplashScreenIcon } from '../../assets/svg/Svgs';
import { Image } from '@gluestack-ui/themed';
import { screenwiseHeight, screenwiseWidth } from '../../utils/styleHelpers';

const SplashScreen = () => {
  const styles = getStyes();
  const { fonts, colors } = useTheme();
  const { isAuth, accessToken } = useStore(state => state);

  useEffect(() => {
    const timeout = setTimeout(() => {
      reset(
        isAuth && accessToken !== ''
          ? ScreensName.AppStackScreen
          : ScreensName.AppStackScreen,
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
        backgroundColor={colors.appBackground}
      />
      <View style={styles.container}>
        <View style={styles.splashIcon}>
          <Image
            alt="Example Image"
            width={screenwiseWidth(150)}
            height={screenwiseHeight(100)}
            source={require('../../assets/images/car.png')}
            resizeMode='contain' />
            <Text style={[fonts.h2Bold, styles.appNameStyle]}>
              {Strings.AutoAPe}
            </Text>
        </View>
        {/* <View style={styles.settingUpStyle}>
          <ActivityIndicator color={colors.white} size={30} />
          <Text style={[fonts.buttonBold, styles.appNameStyle]}>
            {Strings.SettingUp}
          </Text>
        </View> */}
      </View>
    </>
  );
};

export default SplashScreen;
