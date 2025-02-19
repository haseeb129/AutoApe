import React from 'react';

import {ITextProps} from './types';
import {getStyles} from './styles';
import { Text } from '@gluestack-ui/themed';

const AppText = ({
  children,
  style,
  onPress,
  numberOfLines,
  maxCharsPerLine, // New prop
  ...rest
}: ITextProps) => {
  const styles = getStyles();

  // Truncate text into lines based on maxCharsPerLine
  const processedText = maxCharsPerLine
    ? children
        ?.toString()
        .match(new RegExp(`.{1,${maxCharsPerLine}}`, 'g')) // Split text into chunks
        ?.join('\n') // Join chunks with a newline
    : children;


  return (
    <Text
      numberOfLines={numberOfLines}
      {...rest}
      onPress={onPress}
      style={[styles.text, style]}>
      {processedText}
    </Text>
  );
};

export default AppText;
