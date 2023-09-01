import {View} from "react-native-ui-lib";

export const Spacer = ({size, color}) => {
    if (size === undefined) {
        size = 4;
    }
    if (color === undefined) {
        color = "rgb(210,210,210)";
    }

    return (
        <View
            style={{
                height: size,
                width: "100%",
                backgroundColor: color,
                marginBottom: 16,
            }}
        />
    );
};
