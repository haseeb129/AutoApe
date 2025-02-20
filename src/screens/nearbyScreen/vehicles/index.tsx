import { FlatList } from "@gluestack-ui/themed"
import { ListItem } from "../listItem"



export const VehiclesComponent = () => {
    return (
      <FlatList
      scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        data={new Array(10)}
        renderItem={() => <ListItem />}
      />
    )
  }