import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductDetails from '../screens/ProductDetails';
import Profile from '../screens/Profile';
import Groceries from '../screens/Groceries';
import Restaurants from '../screens/Restaurants';
import Cakes from '../screens/Cakes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Wishlist from '../screens/Wishlist';
import SearchScreen from '../screens/SearchScreen';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Checkout from '../screens/Checkout';
import { darkGreen } from '../utils/colors';
import AddNewAddress from '../screens/AddNewAddress';
import EditAddress from '../screens/EditAddress';
import About from '../screens/About';
import EditProfile from '../screens/EditProfile';
import FAQ from '../screens/FAQ';
import OrderHistory from '../screens/OrderHistory';
import Addresses from '../screens/Addresses';
import OrderPlaced from '../screens/OrderPlaced';
import OrderDetails from '../screens/OrderDetails';
import TermsAndConditions from '../auth/TermsAndConditions';
import PrivacyPolicy from '../auth/PrivacyPolicy';
import Cancellation from '../screens/Cancellation';
import RefundAndReturn from '../screens/RefundAndReturn';
import Contact from '../screens/Contact';
import Disclaimer from '../screens/Disclaimer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ cartItemCount }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping';
                    } else if (route.name === 'Profile') {
                        iconName = 'account';
                    } else if (route.name === 'Wishlist') {
                        iconName = 'heart';
                    }

                    return (
                        <View style={styles.iconContainer}>
                            <Icon name={iconName} size={22} color={color} />
                            {route.name === 'Cart' && cartItemCount > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{cartItemCount}</Text>
                                </View>
                            )}
                        </View>
                    );
                },
                tabBarLabel: ({ focused, color }) => (
                    <View style={styles.tabLabelContainer}>
                        <Text style={[styles.tabLabel, { color }]}>{route.name}</Text>
                    </View>
                ),
                animation: 'slide_from_right',
                tabBarActiveTintColor: '#318538',
                tabBarInactiveTintColor: '#000',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    display: route.name === 'Cart' ? 'none' : 'flex', // Hide the tab bar on the Cart page
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Wishlist" component={Wishlist} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const GuestStackNavigator = ({ cartItemCount }) => {
    return (
        <Stack.Navigator
            initialRouteName="BottomTabs"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right', // Smooth slide transition
            }}
        >
            <Stack.Screen name="BottomTabs">
                {(props) => <BottomTabNavigator {...props} cartItemCount={cartItemCount} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="Addresses" component={Addresses} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
            <Stack.Screen name="EditAddress" component={EditAddress} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Faq" component={FAQ} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} />
            <Stack.Screen name="Groceries" component={Groceries} />
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="Cakes" component={Cakes} />
            <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
            <Stack.Screen name="Cancellation" component={Cancellation} />
            <Stack.Screen name="RefundAndReturn" component={RefundAndReturn} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Disclaimer" component={Disclaimer} />
            {/* Add other screens that are independent of the tab navigator */}
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
    },
    tabLabelContainer: {
        marginTop: -8, // Adjust this value to minimize the gap
        alignItems: 'center',
        marginBottom: 2,
    },
    tabLabel: {
        fontSize: responsiveFontSize(1.4), // Adjust font size as needed
        marginBottom: 3, // Ensure there's no extra margin below the text
        fontWeight: '500',
    },
    badge: {
        position: 'absolute',
        right: -8,
        top: -3,
        backgroundColor: darkGreen,
        borderRadius: 6,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 15,
    },
    badgeText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default GuestStackNavigator;