import {StyleSheet} from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { screenwiseHeight } from '../../utils/styleHelpers';

export const getStyles = () => {
  const { colors, fonts } = useTheme();
  return StyleSheet.create({
    title: {
      fontSize:20,
      fontWeight:'600'
    },
    distance : {
      fontSize:12,
      fontWeight:'500',
      color:colors.grayText,
      alignSelf:'center',
      marginLeft:4
    },
    activeTabView: {
      borderBottomWidth: 4,
      borderColor: colors.black,
      height: screenwiseHeight(40),
      justifyContent: 'center',
      borderBottomRightRadius:4,
      borderBottomLeftRadius:4,
    },
    inactiveTabView: {
      height: screenwiseHeight(40),
      justifyContent: 'center',
    },
  });
};
