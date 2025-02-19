import {StyleSheet} from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { screenwiseHeight, screenwiseWidth } from '../../utils/styleHelpers';

export const getStyles = () => {
  const { colors, fonts } = useTheme();
  return StyleSheet.create({
    button: {
      width: screenwiseWidth(100),
      height: screenwiseHeight(50),
      borderRadius: 12,
      backgroundColor: colors.iconBackground,
      justifyContent: "center",
      opacity:1,
      alignItems: "center",
    },
    content: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      marginLeft: 8,
      fontSize: 16,
      color: "black",
    },
  });
};
