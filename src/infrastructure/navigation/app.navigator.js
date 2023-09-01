import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../features/Home/screens";
import {ProfileScreen} from "../../features/Profile/screens";
import {CartScreen} from "../../features/Cart/Screens";
import {OptionsScreen} from "../../features/Options/screens";
import {theme} from "../../infrastructure/theme";
import {SingleProductScreen} from "../../features/Products/single.product.screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: theme.colors.brand.secondary,
                tabBarInactiveTintColor: theme.colors.brand.dark,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ),
                    headerShown: false,

                    // tabBarItemStyle: {
                    //     borderBottomWidth: 3,
                    //     borderBottomColor: theme.colors.brand.secondary,
                    //     borderRadius: 50,
                    // },
                }}
            />
            <Tab.Screen
                name="Carousel"
                component={SingleProductScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="person-outline"
                            size={24}
                            color={color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="cart-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Options"
                component={OptionsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="list-outline" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
