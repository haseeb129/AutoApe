import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {getStyles} from './styles';
import {useTheme} from '../../theme/themeContext';
import {useStore} from '../../zustand';

const AppLoader = () => {
  const {colors} = useTheme();
  const appLoader = useStore(state => state.appLoader);
  const styles = getStyles();
  return (
    appLoader && (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={colors.black} />
      </View>
    )
  );
};

export default AppLoader;
