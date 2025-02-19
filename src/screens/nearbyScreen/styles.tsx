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
    itemName: {
      fontSize:15,
      fontWeight:'500',
      color:colors.black
    },
    distance : {
      fontSize:12,
      fontWeight:'500',
      color:colors.grayText,
      alignSelf:'center',
      marginLeft:4
    },
    amount : {
      fontSize:16,
      fontWeight:'600',
      color:colors.tabBarActiveColor,
    },
    detail : {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '400',
        color: colors.grayText,
    },
    content : {
      flexDirection: "row",
      alignItems: "center",
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
