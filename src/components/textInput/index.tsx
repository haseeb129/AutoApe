import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import {useTheme} from '../../theme/themeContext';
import {getStyles} from './styles';
import {IInputFieldProps} from './types';
import {ShowPasswordIcon} from '../../assets/svg/Svgs';
import {HidePasswordIcon} from '../../assets/svg/Svgs';

const InputField = ({
  label,
  placeholder,
  keyboardType,
  value,
  onChangeText,
  error,
  password,
  customLabelStyle,
  customInputStyle,
  placeholderColor,
  ...props
}: IInputFieldProps) => {
  const styles = getStyles();
  const {fonts, colors} = useTheme();
  const [showPassword, setShowPassword] = useState(password);

  return (
    <>
      {label && (
        <View style={styles.labelContainer}>
          {label && (
            <Text
              style={[fonts.buttonBold, styles.labelText, customLabelStyle]}>
              {label}
            </Text>
          )}
        </View>
      )}
      <>
        <TextInput
          autoCapitalize="sentences"
          style={[
            fonts.buttonMedium,
            styles.inputField,
            props.multiline && styles.multilineInput,
            customInputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor
              ? placeholderColor
              : colors.searchInputPlaceHolderColor
          }
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={showPassword}
          {...props}
        />
        <View style={styles.errorContainer}>
          {password && (
            <Pressable
              onPress={() => {
                setShowPassword(!showPassword);
              }}>
              {!showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </Pressable>
          )}
        </View>
      </>
      {error && (
        <View>
          <Text style={[fonts.caption, styles.errorText]}>{error}</Text>
        </View>
      )}
    </>
  );
};

export default InputField;
