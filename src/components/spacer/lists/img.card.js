import {Dimensions} from "react-native";
import {View, Image} from "react-native-ui-lib";

export const ImgCard = ({DATA}) => {
    const imgWidth = Dimensions.get("window").width * 0.45;
    return (
        <View
            center
            br30
            style={{
                width: imgWidth,
                height: imgWidth,
                backgroundColor: "#F8F8F8",
            }}
        >
            <Image
                source={{uri: DATA["Image"]}}
                style={{
                    width: imgWidth - 16,
                    height: imgWidth - 16,
                    resizeMode: "contain",
                }}
            />
        </View>
    );
};
