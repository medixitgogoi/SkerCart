import { View, Text, TouchableOpacity, StatusBar, TextInput, ScrollView, Dimensions, FlatList, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { background, backIconColor, darkGreen, lightGreen, offWhite } from '../utils/colors';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon4 from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon5 from 'react-native-vector-icons/dist/Ionicons';
import { useCallback, useMemo, useState } from 'react';
import { orders } from '../utils/orders';
import { reporter } from '../../metro.config';
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth } = Dimensions.get('window');

const OrderHistory = () => {

    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const [loading, setLoading] = useState(false);

    const renderOrder = ({ item }) => {
        <View key={item.id}>
            <Text style={{ color: '#000' }}>{item.name}</Text>
        </View>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background, paddingBottom: 10 }}>
            <StatusBar
                animated={true}
                backgroundColor={background}
                barStyle="dark-content"
            />

            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingVertical: 8 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'flex-start' }}>
                    <Icon4 name="arrowleft" size={23} color={'#000'} />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: responsiveFontSize(2.4), fontWeight: '500' }}>Your Orders</Text>
            </View>

            {/* Searchbar */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, marginTop: 5, marginBottom: 12 }}>
                <View style={{ width: '100%', borderColor: isSearchFocused ? backIconColor : '#F9FAFD', borderWidth: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 11, paddingHorizontal: 8, elevation: 2 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40, width: 23, }}>
                        <Icon5 name="search" size={20} color={backIconColor} style={{ margin: 0, padding: 0 }} />
                    </View>
                    <TextInput
                        style={{ paddingVertical: 0, height: 40, color: '#000', fontWeight: '500', letterSpacing: 0.3, width: '87%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}
                        placeholder="Search by dish, cake or grocery"
                        placeholderTextColor="#a0abb7"
                        // onChangeText={handleSearch}
                        onChangeText={setSearch}
                        value={search}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </View>
            </View>

            {/* Temporary */}
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 13 }}>
                    {/* Card */}
                    <View style={{ marginVertical: 5, backgroundColor: '#fff', flexDirection: 'column', elevation: 2, overflow: 'hidden', borderRadius: 12, padding: 10 }}>
                        {/* Details */}
                        <View style={{ flexDirection: 'column', gap: 8, backgroundColor: lightGreen, padding: 10, borderRadius: 12, }}>
                            {/* Orange */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/orange.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Orange</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 2</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/rice.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Chicken fried rice</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/cake.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Chocolate cake</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>
                        </View>

                        {/* Date, status, price */}
                        <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingTop: 14, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>Order placed on</Text>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>28 Sept, 2024 at 9:14pm</Text>
                                </View>
                                <View style={{ backgroundColor: darkGreen, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5), fontWeight: '500' }}>Delivered</Text>
                                </View>
                            </View>

                            {/* Price */}
                            <View style={{}}>
                                <Text style={{ color: '#000', fontSize: responsiveFontSize(2.1), fontWeight: '600' }}>₹1350.00</Text>
                            </View>
                        </View>

                        {/* Divider */}
                        <View style={{ height: 1, width: '100%', backgroundColor: '#f0f0f0', marginVertical: 12 }}></View>

                        {/* Reorder button */}
                        <LinearGradient
                            colors={[darkGreen, '#3a9f43']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 12, paddingHorizontal: 24, elevation: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <TouchableOpacity style={{ gap: 5, height: 42, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Icon name="replay" size={23} color={'#fff'} />
                                <Text style={{ color: '#fff', fontWeight: '600', fontSize: responsiveFontSize(2.2) }}>Reorder</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    {/* Card */}
                    <View style={{ marginVertical: 5, backgroundColor: '#fff', flexDirection: 'column', elevation: 2, overflow: 'hidden', borderRadius: 12, padding: 10 }}>
                        {/* Details */}
                        <View style={{ flexDirection: 'column', gap: 8, backgroundColor: lightGreen, padding: 10, borderRadius: 12, }}>
                            {/* Orange */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/orange.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Mango</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 2</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/rice.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Egg fried rice</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/cake.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Chocolate Truffle cake</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>
                        </View>

                        {/* Date, status, price */}
                        <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingTop: 14, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>Order placed on</Text>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>8 Sept, 2024 at 12:14pm</Text>
                                </View>
                                <View style={{ backgroundColor: darkGreen, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5), fontWeight: '500' }}>Delivered</Text>
                                </View>
                            </View>

                            {/* Price */}
                            <View style={{}}>
                                <Text style={{ color: '#000', fontSize: responsiveFontSize(2.1), fontWeight: '600' }}>₹1150.00</Text>
                            </View>
                        </View>

                        {/* Divider */}
                        <View style={{ height: 1, width: '100%', backgroundColor: '#f0f0f0', marginVertical: 12 }}></View>

                        {/* Reorder button */}
                        <LinearGradient
                            colors={[darkGreen, '#3a9f43']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 12, paddingHorizontal: 24, elevation: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <TouchableOpacity style={{ gap: 5, height: 42, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Icon name="replay" size={23} color={'#fff'} />
                                <Text style={{ color: '#fff', fontWeight: '600', fontSize: responsiveFontSize(2.2) }}>Reorder</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    {/* Card */}
                    <View style={{ marginVertical: 5, backgroundColor: '#fff', flexDirection: 'column', elevation: 2, overflow: 'hidden', borderRadius: 12, padding: 10 }}>
                        {/* Details */}
                        <View style={{ flexDirection: 'column', gap: 8, backgroundColor: lightGreen, padding: 10, borderRadius: 12, }}>
                            {/* Orange */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/orange.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Banana</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 3</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/rice.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Pork noodles</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>

                            {/* Chicken fried rice */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                {/* Image */}
                                <View style={{ width: 30, height: 30, backgroundColor: background, borderRadius: 8, elevation: 1 }}>
                                    <Image source={require('../assets/cake.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                </View>

                                {/* Details */}
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: '#000', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Vanilla cake</Text>
                                    <Text style={{ color: offWhite, fontWeight: '500', fontSize: responsiveFontSize(2.1) }}>x 1</Text>
                                </View>
                            </View>
                        </View>

                        {/* Date, status, price */}
                        <View style={{ backgroundColor: '#fff', flexDirection: 'row', paddingTop: 14, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>Order placed on</Text>
                                    <Text style={{ color: '#000', fontSize: responsiveFontSize(1.6), fontWeight: '500' }}>28 Aug, 2024 at 5:10pm</Text>
                                </View>
                                <View style={{ backgroundColor: darkGreen, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 5 }}>
                                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.5), fontWeight: '500' }}>Delivered</Text>
                                </View>
                            </View>

                            {/* Price */}
                            <View style={{}}>
                                <Text style={{ color: '#000', fontSize: responsiveFontSize(2.1), fontWeight: '600' }}>₹130.00</Text>
                            </View>
                        </View>

                        {/* Divider */}
                        <View style={{ height: 1, width: '100%', backgroundColor: '#f0f0f0', marginVertical: 12 }}></View>

                        {/* Reorder button */}
                        <LinearGradient
                            colors={[darkGreen, '#3a9f43']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 12, paddingHorizontal: 24, elevation: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <TouchableOpacity style={{ gap: 5, height: 42, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Icon name="replay" size={23} color={'#fff'} />
                                <Text style={{ color: '#fff', fontWeight: '600', fontSize: responsiveFontSize(2.2) }}>Reorder</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>

            {/* Content */}
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: screenWidth }}>
                {loading ? (
                    <View>
                        <Text style={{ color: '#000', textAlign: 'center' }}>Loading ...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={orders}
                        renderItem={renderOrder}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90, paddingTop: 4 }}
                    // columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                )}
            </View> */}

        </SafeAreaView>
    )
}

export default OrderHistory;