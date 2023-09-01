import {View, Text, Image} from "react-native-ui-lib";

export const ItemList = ({list}) => {
    return (
        <View width={"100%"} height={124} row paddingH-8 paddingV-12>
            <View
                center
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                }}
            >
                <Image
                    source={{uri: list.Image}}
                    style={{width: 80, height: 80, resizeMode: "contain"}}
                />
            </View>

            <View top flex paddingH-8>
                <Text text70>{list["Product Name"]}</Text>
                <View row>
                    <Text>$</Text>
                    <Text text50M>
                        {list["Selling Price"].split(".")[0].split("$")[1]}
                    </Text>
                    <Text>{list["Selling Price"].split(".")[1]}</Text>
                </View>
            </View>
        </View>
    );
};
