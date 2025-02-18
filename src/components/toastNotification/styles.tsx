import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/themeContext';

export const getStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    mainContainer: {
      width: '100%',
      color: colors.white,
      backgroundColor: colors.emailSentHeadingColor,
      borderRadius: 8,
      padding: 12,
    },
  });
};
