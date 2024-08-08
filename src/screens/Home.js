import { SafeAreaView, StatusBar, Text, TextInput, View, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { background, backIconColor, darkGreen, lightGreen, offWhite } from '../utils/colors';
import Icon2 from 'react-native-vector-icons/dist/Octicons';
import Icon3 from 'react-native-vector-icons/dist/MaterialIcons';
import Icon4 from 'react-native-vector-icons/dist/Ionicons';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { groceries } from '../utils/groceries';
import StarRating from '../components/StarRating';
import { restaurants } from '../utils/restaurants';

const { width: screenWidth } = Dimensions.get('window');

const Home = () => {

    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background, paddingBottom: 10 }}>
            <StatusBar
                animated={true}
                backgroundColor={darkGreen}
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ backgroundColor: darkGreen, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10, paddingHorizontal: 12 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: '#25642a', fontWeight: '500', fontSize: responsiveFontSize(2) }}>Welcome</Text>
                    <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: '600', color: '#000' }}>Neymar Jr.</Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: lightGreen, width: 35, height: 35, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 5 }}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Icon name="user-alt" size={15} color={'#000'} />
                </TouchableOpacity>
            </View>

            {/* searchbar and location */}
            <LinearGradient
                colors={[darkGreen, '#F9FAFD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                locations={[0, 0.99]}
                style={{ paddingBottom: 20, }}
            >

                {/* searchbar and location */}
                <View style={{ paddingHorizontal: 12, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, paddingVertical: 5 }}>
                    <View style={{ width: '70%', borderColor: isSearchFocused ? '#3a9d43' : '#F9FAFD', borderWidth: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 11, paddingHorizontal: 8, elevation: 1 }}>
                        <Icon2 name="search" size={16} color={'#687889'} style={{ padding: 5 }} />
                        <TextInput
                            style={{ height: 40, color: '#000', fontWeight: '500', width: '87%' }}
                            placeholder="Search Grocery"
                            placeholderTextColor="#a0abb7"
                            onChangeText={setSearch}
                            value={search}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                    </View>
                    <View style={{ width: '29%', height: 40, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Icon3 name="location-pin" size={30} color={'#cb202d'} />
                        <TouchableOpacity style={{ width: '70%', flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ color: '#000', fontSize: responsiveFontSize(1.9), fontWeight: '600' }}>Nongpoh</Text>
                                <Icon4 name="caret-down-outline" size={15} color={'#000'} />
                            </View>
                            <Text style={{ color: '#768697', fontWeight: '600', fontSize: responsiveFontSize(1.5) }}>Meghalaya</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </LinearGradient>

            <ScrollView>
                {/* for you */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ebedf0', }}>___________ </Text>
                        <Text style={{ color: '#8593a2', fontWeight: '500', fontSize: responsiveFontSize(1.9), textTransform: 'uppercase', letterSpacing: 1.1 }}> What are you looking for ? </Text>
                        <Text style={{ color: '#ebedf0', }}>___________ </Text>
                    </View>
                    <View style={{ padding: 12, width: screenWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: screenWidth / 3.5, height: screenWidth / 3.5, borderRadius: 16, overflow: 'hidden' }} onPress={() => navigation.navigate('Groceries')}>
                            <Image source={require("../assets/grocery.jpeg")} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={{ width: '100%', height: 60, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 8 }}
                                >
                                    <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '600', color: '#fff', textAlign: 'center', letterSpacing: 0.4 }}>Groceries</Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: screenWidth / 3.5, height: screenWidth / 3.5, borderRadius: 16, overflow: 'hidden' }} onPress={() => navigation.navigate('Restaurants')}>
                            <Image source={require("../assets/restaurant.jpeg")} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={{ width: '100%', height: 60, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 8 }}
                                >
                                    <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '600', color: '#fff', textAlign: 'center', letterSpacing: 0.4 }}>Restaurants</Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: screenWidth / 3.5, height: screenWidth / 3.5, borderRadius: 16, overflow: 'hidden' }} onPress={() => navigation.navigate('Cakes')}>
                            <Image source={require("../assets/cake.jpeg")} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <LinearGradient
                                    colors={['#00000000', '#000']}
                                    style={{ width: '100%', height: 60, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 8 }}
                                >
                                    <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '600', color: '#fff', textAlign: 'center', letterSpacing: 0.4 }}>Cakes</Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* explore */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ color: '#ebedf0', }}>________________________ </Text>
                    <Text style={{ color: '#8593a2', fontWeight: '500', fontSize: responsiveFontSize(1.9), textTransform: 'uppercase', letterSpacing: 1.1 }}> Explore </Text>
                    <Text style={{ color: '#ebedf0', }}>________________________ </Text>
                </View>

                {/* Groceries */}
                <View style={{ marginTop: 8 }}>
                    <View style={{ marginHorizontal: 12, marginBottom: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ textTransform: 'uppercase', color: '#000', fontSize: responsiveFontSize(2.4), fontWeight: '700' }}>Groceries</Text>
                        <TouchableOpacity style={{ borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 8, paddingVertical: 3, paddingRight: 2 }} onPress={() => navigation.navigate('Groceries')}>
                            <Text style={{ color: backIconColor, fontSize: responsiveFontSize(1.8), fontWeight: '500' }}>View All</Text>
                            <View style={{ padding: 0, margin: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon3 name="chevron-right" size={17} color={darkGreen} style={{ margin: 0, padding: 0 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal>
                        <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            {groceries.map(item => (
                                <View key={item?.id} style={{ width: screenWidth / 2.2, marginVertical: 6, backgroundColor: '#fff', borderTopLeftRadius: 14, borderTopRightRadius: 14, borderBottomLeftRadius: 14, borderBottomRightRadius: 20, overflow: 'hidden', elevation: 2 }}>

                                    <TouchableOpacity style={{ zIndex: 10, backgroundColor: '#c6e6c3', borderRadius: 50, position: 'absolute', top: 8, right: 8, width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon3 name="favorite-border" size={18} color={'#019934'} />
                                    </TouchableOpacity>

                                    <View style={{ backgroundColor: lightGreen, borderRadius: 12, margin: 3 }}>
                                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../assets/orange.png')} style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
                                        </View>
                                    </View>

                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                            <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '600', color: '#000' }}>{item.name}</Text>
                                            <StarRating rating={item.starRating} />
                                        </View>
                                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                            <Text style={{ color: offWhite, fontWeight: '600', fontSize: responsiveFontSize(1.8) }}>{item.subCategory}</Text>
                                        </View>
                                        <Text style={{ fontSize: 16, color: '#019934', fontWeight: '700' }}>₹{item.price}</Text>
                                    </View>

                                    <TouchableOpacity style={{ backgroundColor: '#019934', borderTopLeftRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                        <Icon3 name="add" size={20} color="#fff" />
                                    </TouchableOpacity>

                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                {/* Restaurants */}
                <View style={{ marginTop: 12 }}>
                    <View style={{ marginHorizontal: 12, marginBottom: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ textTransform: 'uppercase', color: '#000', fontSize: responsiveFontSize(2.4), fontWeight: '700' }}>Restaurants</Text>
                        <TouchableOpacity style={{ borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 8, paddingVertical: 3, paddingRight: 2 }} onPress={() => navigation.navigate('Restaurants')}>
                            <Text style={{ color: backIconColor, fontSize: responsiveFontSize(1.8), fontWeight: '500' }}>View All</Text>
                            <View style={{ padding: 0, margin: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon3 name="chevron-right" size={17} color={darkGreen} style={{ margin: 0, padding: 0 }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal>
                        <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            {restaurants.map(item => (
                                <View key={item?.id} style={{ width: screenWidth / 2.2, backgroundColor: '#fff', borderTopLeftRadius: 14, borderTopRightRadius: 14, borderBottomLeftRadius: 14, borderBottomRightRadius: 20, overflow: 'hidden', elevation: 2 }}>

                                    <TouchableOpacity style={{ zIndex: 10, backgroundColor: '#c6e6c3', borderRadius: 50, position: 'absolute', top: 8, right: 8, width: 30, height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icon3 name="favorite-border" size={18} color={'#019934'} />
                                    </TouchableOpacity>

                                    <View style={{ backgroundColor: lightGreen, borderRadius: 12, margin: 3 }}>
                                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../assets/rice.png')} style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
                                        </View>
                                    </View>

                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'column', gap: 1 }}>
                                            <Text style={{ fontSize: responsiveFontSize(2), fontWeight: '600', color: '#000' }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                                            <StarRating rating={item.starRating} />
                                        </View>
                                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                            <Text style={{ color: offWhite, fontWeight: '600', fontSize: responsiveFontSize(1.8) }}>{item.subCategory}</Text>
                                        </View>
                                        <Text style={{ fontSize: 16, color: '#019934', fontWeight: '700' }}>₹{item.price}</Text>
                                    </View>

                                    <TouchableOpacity style={{ backgroundColor: '#019934', borderTopLeftRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                        <Icon3 name="add" size={20} color="#fff" />
                                    </TouchableOpacity>

                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

export default Home;