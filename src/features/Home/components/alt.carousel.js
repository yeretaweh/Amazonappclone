import {Card, Text, View} from "react-native-ui-lib";
import {ScrollView} from "react-native";

const products = [
    {
        id: "1",
        image: "https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Buy some shoes",
    },
    {
        id: "2",
        image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Buy more shoes",
    },
    {
        id: "3",
        image: "https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Buy even more shoes",
    },
    {
        id: "4",
        image: "https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Buy some shoes",
    },
    // Add more products as needed
];

export const AltCarousel = () => {
    return (
        <>
            <ScrollView
                style={{
                    position: "absolute",
                    marginTop: 250,
                    paddingLeft: 8,
                    marginBottom: 50,
                    zIndex: 1,
                }}
                horizontal
            >
                {products.map((product) => (
                    <Card
                        key={product.id}
                        r
                        width={140}
                        borderRadius={4}
                        elevation={3}
                        containerStyle={{
                            elevation: 5, // Apply the shadow here
                            shadowColor: "white",
                            shadowOpacity: 1,
                            shadowRadius: 5,
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            marginRight: 8,
                        }}
                    >
                        <Card.Section
                            content={[
                                {
                                    text: product.title,
                                    text70: true,
                                    grey10: true,
                                },
                            ]}
                            contentStyle={{padding: 2, height: 40}}
                        />
                        <Card.Image
                            source={{uri: product.image}}
                            height={140}
                        />
                    </Card>
                ))}
            </ScrollView>
            <View height={140} />
        </>
    );
};
