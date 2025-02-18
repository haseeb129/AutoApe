import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../../theme/themeContext';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {screenwiseHeight} from '../../utils/styleHelpers';

export const getStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 60,
    },
    headingStyle: {
      color: colors.textInputLabelTextColor,
      lineHeight: 30,
      marginBottom: screenwiseHeight(4),
    },
    subHeadingStyle: {
      color: colors.subHeadingColor,
    },
    formContainer: {
      marginTop: screenwiseHeight(40),
    },
    passwordInputView: {
      marginTop: hp(0),
    },
    forgotPasswordButtonStyle: {
      alignSelf: 'flex-end',
      marginTop: -screenwiseHeight(10),
    },
    forgotPasswordTextStyle: {
      color: colors.errorTextColor,
      lineHeight: 15,
    },
    buttonStyle: {
      marginTop: screenwiseHeight(32),
    },
    termsAndConditionsNormalText: {
      color: colors.black,
      lineHeight: 16,
      marginTop: screenwiseHeight(14),
      textAlign: 'center',
    },
    termsAndConditionsHighlightedText: {
      color: colors.errorTextColor,
    },
    passwordInputStyle: {
      paddingRight: hp(4.5),
    },
    backgroundStyle: {
      height: Dimensions.get('screen').height,
      width: '100%',
      backgroundColor: colors.white,
    },
  });
};
