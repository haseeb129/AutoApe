import React from "react";
import { CardView } from "../../../components/cardView"
import AppText from "../../../components/text"
import { getStyles } from './styles';
import { useTheme } from "../../../theme/themeContext";
import { Box, Image } from "@gluestack-ui/themed";
import { screenwiseHeight, screenwiseWidth } from "../../../utils/styleHelpers";


export const HomeComponent = () => {
    const { fonts, colors } = useTheme();
    const styles = getStyles();

    return (
        <>
            <CardView
                style={{
                    marginHorizontal: 12
                }}>
                <Box margin={12}>
                    <AppText style={styles.title}>Introduction</AppText>
                    <AppText style={styles.intro}>1 Stop Motors is your 1 stop shop for buying a car! A 100% NZ locally owned and operated car dealership.
                        All of our stock is specially sourced, allowing us to bring you the best prices around!
                        1 Stop Motors was started with the vision of providing as many quality vehicles to the public, at an affordable price, as possible.
                        We strive to achieve this through:\n
                        Competitive finance rates
                        Mechanical warranties
                        Sourcing quality vehicles from our suppliers
                        We are partnered with multiple finance companies and are confident we can tailor a finance package to suit your needs.
                        .</AppText>

                </Box>
            </CardView>

            <CardView style={{
                marginHorizontal: 12,
                alignItems:'center'
            }}>
                <Image
                    width={screenwiseWidth(363)}
                    height={screenwiseHeight(372)}
                    resizeMode="contain"
                    marginVertical={12}
                    source={require('../../../assets/images/map.png')} />
            </CardView>
        </>
    )
}