import {ImgCard} from "./img.card";
import {FlatList, StyleSheet} from "react-native";
import {Text} from "react-native-ui-lib";

export const ImgCardSection = ({DATA}) => {
    const limitedData = DATA.slice(0, 6);

    const renderItem = ({item}) => <ImgCard key={item.id} DATA={item} />;
    return (
        <>
            <Text text60>Trending Tech Devices</Text>
            <FlatList
                data={limitedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
        </>
    );
};

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});
