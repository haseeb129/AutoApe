import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from '../../theme/themeContext';

export const getStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    buttonContainer: {
      height: hp(5.5),
      borderRadius: 8,
      color: colors.white,
      backgroundColor: colors.buttonPrimaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledButtonContainer: {
      height: hp(5.5),
      borderRadius: 8,
      color: colors.white,
      backgroundColor: colors.buttonPrimaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: colors.white,
      textAlignVertical: 'center',
    },
  });
};
