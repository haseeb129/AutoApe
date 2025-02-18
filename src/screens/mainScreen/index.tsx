import { Box, Text, View } from "@gluestack-ui/themed"
import { Colors } from "../../theme/colors"



const DummyScreen = () => {


    return (
        <Box
        flex={1} 
        justifyContent="center" 
        alignItems="center" 
      >
        <Text color={Colors.black} fontSize={24} fontWeight="$bold">
          Centered Text
        </Text>
      </Box>
    )
}

export default DummyScreen