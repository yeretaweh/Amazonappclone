import React, {useState, useRef, useEffect} from "react";
import {View, Text, Carousel, Image, Colors} from "react-native-ui-lib";
import {StyleSheet, ScrollView} from "react-native";
import {Constants, Spacings} from "react-native-ui-lib";

var IMAGES = [
    {
        Image: "https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        Image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        Image: "https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
];

const getWidth = () => {
    return Constants.windowWidth - Spacings.s5 * 2;
};

const MainCarousel = ({DATA}) => {
    const GetImages = ({Product}) => {
        return Product["Image"].split("|");
    };

    const [orientation, setOrientation] = useState(Constants.orientation);

    let dimensionsChangeListener = null;

    useEffect(() => {
        dimensionsChangeListener =
            Constants.addDimensionsEventListener(onOrientationChange);

        return () => {
            Constants.removeDimensionsEventListener(
                dimensionsChangeListener || onOrientationChange
            );
        };
    }, []);

    const onOrientationChange = () => {
        if (orientation !== Constants.orientation) {
            setOrientation(Constants.orientation);
            setWidth(getWidth());
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View paddingH-page>
                <Carousel
                    containerStyle={{
                        height: 300,
                    }}
                    loop
                    pageControlProps={{
                        size: 10,
                        containerStyle: styles.loopCarousel,
                    }}
                    // pageControlPosition={Carousel.pageControlPositions.OVER}
                    // showCounter
                >
                    {IMAGES.map((item, i) => (
                        <View flex centerV key={i}>
                            <Image
                                // overlayType={Image.overlayTypes.BOTTOM},
                                style={{flex: 1}}
                                source={{
                                    uri: item["Image"],
                                }}
                            />
                        </View>
                    ))}
                </Carousel>
            </View>
        </ScrollView>
    );
};

const Page = ({children, style, ...others}) => {
    return (
        <View {...others} style={[styles.page, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    picker: {
        marginHorizontal: 20,
    },
    page: {
        // flex: 1,
        borderWidth: 1,
        borderRadius: 8,
    },
    loopCarousel: {
        position: "absolute",
        bottom: 15,
        left: 10,
    },
});

export default MainCarousel;
