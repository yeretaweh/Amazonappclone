import {TouchableOpacity} from "react-native";
import {View, Text} from "react-native-ui-lib";

export const CButton = ({kind, round, t}) => {
    var color;
    var round;
    var t;
    if (t === undefined) {
        t = "Button";
    }

    if (color === undefined) {
        color = "#FED815";
    }
    if (round === undefined) {
        round = 30;
    }

    if (kind === "primary") {
        color = "#FED815";
    } else {
        color = "#FEA115";
    }

    if (round) {
        round = 30;
    } else {
        round = 4;
    }

    return (
        <TouchableOpacity>
            <View
                width={"100%"}
                height={50}
                style={{
                    backgroundColor: color,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                    marginVertical: 4,
                }}
                br30
            >
                <Text text70M>{t}</Text>
            </View>
        </TouchableOpacity>
    );
};
