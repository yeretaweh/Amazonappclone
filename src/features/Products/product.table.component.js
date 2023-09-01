import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ProductTable = () => {
    const productData = {
        "Product Specification":
            "ProductDimensions:7.5x3.5x3.5inches|ItemWeight:3.84ounces|ShippingWeight:4.6ounces(Viewshippingratesandpolicies)|DomesticShipping:ItemcanbeshippedwithinU.S.|InternationalShipping:ThisitemcanbeshippedtoselectcountriesoutsideoftheU.S.LearnMore|ASIN:B0014NO17A|Itemmodelnumber:56002|Manufacturerrecommendedage:3yearsandup",
    };

    // Split the specification string into an array of key-value pairs
    const specifications = productData["Product Specification"].split("|");

    // Function to extract the key and value from each specification item
    const extractKeyValue = (specification) => {
        const [key, value] = specification.split(":");
        return {key, value};
    };

    return (
        <View style={styles.container}>
            {specifications.map((specification, index) => {
                const {key, value} = extractKeyValue(specification);
                return (
                    <View style={styles.row} key={index}>
                        <Text style={styles.keyText}>{key}</Text>
                        <Text style={styles.valueText}>{value}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: "#f0f0f0",
    },
    row: {
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    keyText: {
        flex: 1,
        // fontWeight: "bold",
        marginRight: 8,
        fontSize: 16,
    },
    valueText: {
        flex: 1,
        fontSize: 16,
    },
});

export default ProductTable;
