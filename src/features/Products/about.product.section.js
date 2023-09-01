import React from "react";
import {View, Text, StyleSheet} from "react-native";

const AboutProductBulletPoints = () => {
    const productData = {
        "About Product":
            "Make sure this fits by entering your model number. | Modular plastic building blocks allow you to build the objects of your desire | Perfect for all types of constructions and creations | Everblock oversized blocks are ideal for creative building projects and stem education | Durable plastic blocks are weather and chemical resistant | Combo pack contains: 16 Full blocks, 4 half blocks, 6 finishing caps, add blocks as needed",
    };

    // Split the "About Product" value into an array of bullet points
    const bulletPoints = productData["About Product"].split(" | ");

    return (
        <View style={styles.container}>
            {bulletPoints.map((point, index) => (
                <View key={index} style={styles.bulletContainer}>
                    <Text style={styles.bulletPointText}>•</Text>
                    <Text style={styles.pointText}>{point}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        // backgroundColor: "#f0f0f0",
    },
    bulletContainer: {
        flexDirection: "row",
        alignItems: "top",
        marginBottom: 4,
    },
    bulletPointText: {
        fontSize: 32,
        marginRight: 8,
        lineHeight: 24,
    },
    pointText: {
        flex: 1,
        fontSize: 14,
    },
});

export default AboutProductBulletPoints;
