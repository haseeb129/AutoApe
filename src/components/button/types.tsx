import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  customStyle?: Array<StyleProp<ViewStyle>>;
  customTextStyle?: Array<StyleProp<TextStyle>>;
  isLoading?: boolean;
}
