import React from 'react';
import {Text, Pressable, ActivityIndicator, TouchableOpacity} from 'react-native';
import {getStyles} from './styles';
import {useTheme} from '../../theme/themeContext';
import {IButtonProps} from './types';

const Button = ({
  title,
  disabled,
  onPress,
  customStyle,
  customTextStyle,
  isLoading,
}: IButtonProps) => {
  const {fonts, colors} = useTheme();
  const styles = getStyles();
  const containerStyle = disabled
    ? styles.disabledButtonContainer
    : styles.buttonContainer;
  return (
    <TouchableOpacity
      style={[containerStyle, customStyle]}
      disabled={disabled || isLoading}
      onPress={onPress}>
      {!isLoading && (
        <Text style={[fonts.buttonSemiBold, styles.title, customTextStyle]}>
          {title}
        </Text>
      )}
      {isLoading && <ActivityIndicator color={colors.white} />}
    </TouchableOpacity>
  );
};

export default Button;
