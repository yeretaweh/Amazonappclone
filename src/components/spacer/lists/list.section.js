import {ItemList} from "./item.list.component";
import {Text, View} from "react-native-ui-lib";

export const ListSection = ({DATA}) => {
    const limitedData = DATA.slice(0, 4);
    return (
        <>
            <View paddingL-8>
                <Text text60>Popular Items This Season</Text>
            </View>

            {limitedData.map((item) => (
                <ItemList key={item.id} list={item} />
            ))}
        </>
    );
};
