import {StyleSheet} from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { screenwiseHeight } from '../../utils/styleHelpers';

export const getStyles = () => {
  const { colors, fonts } = useTheme();
  return StyleSheet.create({
    cardContainer: {
      elevation: 5,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      backgroundColor: colors.appBackground,
      shadowColor: colors.grayText,
      marginBottom:12
      
    }
  });
};
