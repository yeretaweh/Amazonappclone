import {SafeAreaView, StyleSheet, ScrollView} from "react-native";
import {Text, View} from "react-native-ui-lib";
import {DeliveryLocation} from "../components/deliverylocation.component";
import {LinearGradient} from "expo-linear-gradient";
import {Spacer} from "../../../components/spacer/spacer.component";

import MainCarousel from "../components/main.carousel";
import {AltCarousel} from "../components/alt.carousel";
import {ListSection} from "../../../components/spacer/lists/list.section";
import {ProductsData} from "../../../services/products/product.mock";
import {ImgCardSection} from "../../../components/spacer/lists/imgcard.list.section";

export const HomeScreen = () => {
    return (
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={["#85D7E2", "#9CDAC3"]}
            style={styles.linearGradient}
        >
            <SafeAreaView style={{height: "100%", backgroundColor: "white"}}>
                <DeliveryLocation />
                <ScrollView nestedScrollEnabled>
                    <View bg-white top>
                        <MainCarousel DATA={ProductsData} />
                        <AltCarousel />
                        <Spacer size={2} />
                        <ListSection DATA={ProductsData} />
                        <Spacer size={2} />
                        <ImgCardSection DATA={ProductsData} />
                        <Spacer size={2} />
                        <ListSection DATA={ProductsData} />
                        <Spacer size={2} />
                        <ImgCardSection DATA={ProductsData} />
                        <Spacer size={2} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5,
    },
});
