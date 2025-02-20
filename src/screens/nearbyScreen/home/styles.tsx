import {StyleSheet} from 'react-native';
import { useTheme } from '../../../theme/themeContext';
import { screenwiseHeight } from '../../../utils/styleHelpers';

export const getStyles = () => {
  const { colors, fonts } = useTheme();
  return StyleSheet.create({
    title: {
      fontSize:16,
      fontWeight:'500',
    },
    intro: {
      fontSize:12,
      fontWeight:'300',
      color:colors.black,
      marginVertical:12,
      lineHeight:22
    },
    
  });
};
