import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export interface IInputFieldProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  error?: string | null;
  password?: boolean;
  customLabelStyle?: Array<StyleProp<ViewStyle>>;
  customInputStyle?: Array<StyleProp<ViewStyle>>;
  placeholderColor?: string;
  value: string;
  onChangeText: (text: string) => void;
}
