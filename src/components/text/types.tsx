import {TextStyle, StyleProp} from 'react-native';

export interface ITextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onPress?(): void;
  [rest: string]: any;
}
