import {useState} from "react";
import {View, Text, Picker, Colors} from "react-native-ui-lib";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Pressable,
    FlatList,
} from "react-native";
import MainCarousel from "./main.carousel";
import {ProductsData} from "../../services/products/product.mock";
import {LinearGradient} from "expo-linear-gradient";
import {colors} from "../../../src/infrastructure/theme/colors";
import {TopBarDescription} from "./TopBarDescription.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import {CButton} from "../../components/custom.button";
import {Spacer} from "../../components/spacer/spacer.component";
import ProductTable from "./product.table.component";
import AboutProductBulletPoints from "./about.product.section";

export const SingleProductScreen = ({Product}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const numbers = Array.from({length: 10}, (_, index) => index + 1);

    const renderListItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View width={"100%"} paddingH-20 centerV height={50}>
                    <Text text70>{item}</Text>
                </View>
                <View height={0.5} bg-grey20 />
            </TouchableOpacity>
        );
    };

    return (
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={["#85D7E2", "#9CDAC3"]}
            style={styles.linearGradient}
        >
            <SafeAreaView style={{paddingHorizontal: 6}}>
                <ScrollView
                    style={{backgroundColor: "white", paddingHorizontal: 16}}
                    nestedScrollEnabled
                >
                    <TopBarDescription DATA={ProductsData[0]} />
                    <MainCarousel DATA={ProductsData[39]} />
                    <View row top>
                        <Text text70>$</Text>
                        <Text text30M>
                            {
                                ProductsData[0]["Selling Price"]
                                    .split(".")[0]
                                    .split("$")[1]
                            }
                        </Text>
                        <Text text70>
                            {ProductsData[0]["Selling Price"].split(".")[1]}
                        </Text>
                    </View>
                    <View row paddingB-4 centerV>
                        <Ionicons
                            name="location-outline"
                            size={20}
                            color={"#000"}
                        />
                        <Text text70 style={{color: colors.brand.secondary}}>
                            Deliver to Ghana
                        </Text>
                    </View>
                    <Text text70 style={{color: "green"}}>
                        In Stock
                    </Text>
                    <View>
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View
                                            height={50}
                                            width={"100%"}
                                            bg-grey60
                                            centerV
                                            paddingH-8
                                            spread
                                            row
                                            style={{
                                                borderTopLeftRadius: 10,
                                                borderTopRightRadius: 10,
                                            }}
                                        >
                                            <Text text60M>Qty:</Text>
                                            <Ionicons
                                                name="close-outline"
                                                size={24}
                                                color={"#000"}
                                                onPress={() =>
                                                    setModalVisible(
                                                        !modalVisible
                                                    )
                                                }
                                            />
                                        </View>
                                        <View height={500} width={"100%"}>
                                            <FlatList
                                                data={numbers}
                                                renderItem={renderListItem}
                                                keyExtractor={(item) =>
                                                    item.toString()
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View>
                            <Pressable
                                style={[styles.button]}
                                onPress={() => setModalVisible(true)}
                            >
                                <View row>
                                    <Text black20>Qty: {"3"}</Text>
                                    <Ionicons
                                        name="chevron-down-outline"
                                        size={14}
                                        color={"#000"}
                                    />
                                </View>
                            </Pressable>
                        </View>
                        <View paddingV-16>
                            <CButton kind={"primary"} t={"Add To Cart"} />
                            <CButton t={"Buy Now"} />
                        </View>

                        <Spacer size={1} />
                        <View paddingB-16>
                            <Text text60>Product Information</Text>
                        </View>
                        <ProductTable />
                        <View paddingT-16>
                            <Text text60>Features & Details</Text>
                        </View>
                        <AboutProductBulletPoints />
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: 200,
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 2,
    },
    button: {
        width: 65,
        height: 32,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8F3E7",
        elevation: 6,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
