import {TextStyle, StyleProp} from 'react-native';

export interface ICardViewProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  onPress?(): void;
}
