import React, {useState, useRef, useEffect} from "react";
import {View, Text, Carousel, Image, Colors} from "react-native-ui-lib";
import {StyleSheet, ScrollView} from "react-native";
import {Constants, Spacings} from "react-native-ui-lib";

const getWidth = () => {
    return Constants.windowWidth - Spacings.s5 * 2;
};

const MainCarousel = ({DATA}) => {
    const Images = DATA["Image"].split("|");

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
            <View>
                <Carousel
                    containerStyle={{
                        height: Constants.windowWidth,
                    }}
                    loop
                    pageControlProps={{
                        size: 10,
                        containerStyle: styles.loopCarousel,
                    }}
                    // pageControlPosition={Carousel.pageControlPositions.OVER}
                    showCounter
                >
                    {Images.map((item, i) => {
                        return (
                            <View flex centerV key={i}>
                                <Image
                                    // overlayType={Image.overlayTypes.BOTTOM},
                                    style={{flex: 1, resizeMode: "contain"}}
                                    source={{
                                        uri: item,
                                    }}
                                />
                            </View>
                        );
                    })}
                </Carousel>
            </View>
        </ScrollView>
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
