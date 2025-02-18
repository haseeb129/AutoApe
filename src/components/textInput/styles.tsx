import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from '../../theme/themeContext';
import {screenwiseHeight} from '../../utils/styleHelpers';

export const getStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    labelContainer: {
      marginBottom: screenwiseHeight(4),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    labelText: {
      color: colors.textInputLabelTextColor,
    },
    inputField: {
      height: hp(5.5),
      borderRadius: 8,
      borderColor: colors.textInputBorderColor,
      paddingHorizontal: hp(1.5),
      borderWidth: 1,
      color: colors.textInputLabelTextColor,
      backgroundColor: colors.white,
      marginBottom: screenwiseHeight(16),
    },
    errorText: {
      marginTop: hp(-1.5),
      color: colors.errorTextColor,
      marginBottom: screenwiseHeight(8),
    },
    errorContainer: {
      position: 'absolute',
      right: 10,
      top: hp(4.3),
    },
    multilineInput: {
      height: screenwiseHeight(120),
    },
  });
};
