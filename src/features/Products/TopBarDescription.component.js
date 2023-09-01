import {View, Text} from "react-native-ui-lib";
import {colors} from "../../infrastructure/theme/colors";

export const TopBarDescription = ({DATA}) => {
    return (
        <View>
            <View row spread>
                <Text text70 style={{color: colors.brand.secondary}}>
                    Visit the{DATA["Brand Name"]} Store
                </Text>
                <View row>
                    <Text text70M>4.5</Text>
                    <View paddingR-4>
                        <Text text70>*****</Text>
                    </View>
                    <Text text70 color={colors.brand.secondary}>
                        12,345
                    </Text>
                </View>
            </View>
            <View>
                <Text style={{flexWrap: "wrap"}} text70M>
                    {DATA["Product Name"]}
                </Text>
            </View>
        </View>
    );
};
