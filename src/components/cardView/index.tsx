import { Box } from "@gluestack-ui/themed"
import { getStyles } from './styles';
import { ICardViewProps } from "./types";


export const CardView = ({
  children,
  style,
  onPress, }: ICardViewProps) => {
  const styles = getStyles();
  return (
    <Box
      style={[styles.cardContainer, style]}>
      {children}
    </Box>

  )
}