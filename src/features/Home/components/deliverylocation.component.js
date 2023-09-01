import {View, Text} from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

export const DeliveryLocation = () => {
    return (
        <View centerV row height={40} paddingH-8>
            <Ionicons name="location-outline" size={24} color={"#000"} />
            <Text text70M> Deliver to Ghana </Text>
            <Ionicons name="chevron-down-outline" size={14} color={"#000"} />
        </View>
    );
};
