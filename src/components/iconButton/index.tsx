import { Box, Button, Text } from "@gluestack-ui/themed";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { getStyles } from './styles';

interface Props {
  icon: React.ReactNode; // SVG icon component
  text: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({ icon, text, onPress }) => {
    const styles = getStyles();
  return (
    <Button style={styles.button} onPress={onPress}>
      <Box style={styles.content}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </Box>
    </Button>
  );
};

export default IconButton;
