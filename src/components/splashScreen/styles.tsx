import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/themeContext';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const getStyes = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: colors.splashScreenColor,
    },
    splashIcon: {
      marginTop: hp(38),
      alignItems: 'center',
      justifyContent: 'center',
    },
    appNameStyle: {
      color: colors.white,
      marginTop: hp(1),
    },
    settingUpStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp(32),
    },
  });
};
