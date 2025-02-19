import { Box, Image } from "@gluestack-ui/themed"
import { useTheme } from "../../theme/themeContext";
import { getStyles } from './styles';
import AppText from "../../components/text";
import { screenwiseHeight, screenwiseWidth } from "../../utils/styleHelpers";
import { FeaturedIcon, NearbyIcon } from "../../assets/svg/Svgs";


export const ListItem = () => {
    const { fonts, colors } = useTheme();
    const styles = getStyles();
    return (
      <Box
        alignItems="center"
        style={{
          marginHorizontal: 24,
          elevation: 5,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          backgroundColor: colors.appBackground,
          shadowColor: colors.grayText,
          marginBottom:12
          
        }}>

        <Box
          width={screenwiseWidth(389)}
          height={screenwiseHeight(258)}
          margin={12}>

          <Image
            alignSelf="center"
            source={require('../../assets/images/car.png')}
            width={screenwiseWidth(311)}
            height={screenwiseHeight(200)}
            resizeMode="contain" />
          <Box
            position="absolute"
            top={24} left={330} right={0}>
            <FeaturedIcon />
          </Box>

          <Box marginHorizontal={48} justifyContent="space-between" flexDirection="row" alignItems="center">
            <AppText style={styles.itemName}>2020 Lexus RS</AppText>
            <AppText style={styles.amount}>$69,000</AppText>
          </Box>

          <Box marginHorizontal={42} marginTop={12} justifyContent="space-between" flexDirection="row" alignItems="center">
            <Box style={styles.content}>
              <NearbyIcon />
              <AppText style={styles.detail}>Auckland Region</AppText>
            </Box>

            <Box style={styles.content}>
              <NearbyIcon />
              <AppText style={styles.detail}>35,000 KM</AppText>
            </Box>
            <Box style={styles.content}>
              <NearbyIcon />
              <AppText style={styles.detail}>Petrol</AppText>
            </Box>
          </Box>

        </Box>

      </Box>

    )
  }