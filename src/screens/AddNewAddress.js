import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput, Alert, Linking, ScrollView } from 'react-native';
import { background, backIconColor, darkGreen, lightGreen, offWhite } from '../utils/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome5';
import Icon4 from 'react-native-vector-icons/dist/Feather';
import Icon5 from 'react-native-vector-icons/dist/AntDesign';
import { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoder';

const AddNewAddress = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [addressType, setAddresssType] = useState('Home');

    const [address1, setAddress1] = useState(null);
    const [address1Focused, setAddress1Focused] = useState(false);

    const [address2, setAddress2] = useState(null);
    const [address2Focused, setAddress2Focused] = useState(false);

    const [city, setCity] = useState(null);
    const [cityFocused, setCityFocused] = useState(false);

    const [pinCode, setPinCode] = useState(null);
    const [pinCodeFocused, setPinCodeFocused] = useState(false);

    const [state, setState] = useState(null);
    const [stateFocused, setStateFocused] = useState(false);

    const [landmark, setLandmark] = useState(null);
    const [landmarkFocused, setLandmarkFocused] = useState(false);

    //for location
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    // const [data, setData] = useState('');
    // const [data1, setData1] = useState('');
    const [address, setAddress] = useState('');
    const [locationModal, setLocationModal] = useState(false);
    // const [sendlocation, setsendlocation] = useState(null);

    const mainn = async () => {
        console.log('Fetching location...');
        setLocationModal(true);
        setShow(true);
        await getdata();
    };

    const getdata = async () => {
        setLoading(true);
        setLocation(null);
        setError(null);

        try {
            const newLocation = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 30000,
                rationale: {
                    title: 'Location permission',
                    message: 'The app needs permission to access your location.',
                    buttonPositive: 'Ok',
                },
            });

            setLocation(newLocation);
            // setData1(newLocation.latitude);
            // setData(newLocation.longitude);
            get(newLocation);
            console.log(newLocation, 'location');
        } catch (ex) {
            Alert.alert('Location Error', 'Turn on your Location services', [
                {
                    text: 'Go to Settings',
                    onPress: () => Linking.openSettings(),
                    style: 'cancel',
                },
            ]);
        } finally {
            setLoading(false);
            setShow(false);
        }
    };

    const get = async (newLocation) => {
        if (!newLocation) return;

        const NY = {
            lng: newLocation.longitude,
            lat: newLocation.latitude,
        };

        Geocoder.fallbackToGoogle('YOUR_API_KEY');

        try {
            const res = await Geocoder.geocodePosition(NY);
            console.log('Geocoding Result:', res);

            const result1 = res.reduce((unique, o) => {
                if (!unique.some(obj => obj.formattedAddress === o.formattedAddress && obj.streetName === o.streetName)) {
                    unique.push(o);
                }
                return unique;
            }, []);

            const result = result1.slice(0, 3);
            setAddress(result);
        } catch (err) {
            console.error('Geocoding Error:', err);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background, paddingBottom: 10 }}>
            <StatusBar
                animated={true}
                backgroundColor={'#f1f7fb'}
                barStyle="dark-content"
            />

            {/* Header */}
            <View style={{ paddingHorizontal: 10, height: 50, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, elevation: 3 }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={23} color={'#000'} />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontWeight: "600", fontSize: responsiveFontSize(2.5), textAlign: 'center', textTransform: 'uppercase' }}>add a new address</Text>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, elevation: 3 }} onPress={() => navigation.navigate('Profile')}>
                    <Icon2 name="account" size={23} color={'#000'} />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView>
                <View style={{ padding: 10, paddingBottom: 55}}>
                    {/* Unexpanded */}
                    <TouchableOpacity style={{ backgroundColor: '#fff', paddingHorizontal: 13, paddingVertical: 12, flexDirection: 'column', elevation: 1, borderRadius: 12, gap: 6 }}>
                        <View>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Receiver details for this address</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                                <Icon4 name="phone-call" size={15} color={'#000'} />
                                <Text style={{ textTransform: 'uppercase', fontSize: responsiveFontSize(1.9), color: '#000', fontWeight: '500', marginLeft: 5 }}>Dixit Gogoi,</Text>
                                <Text style={{ textTransform: 'uppercase', fontSize: responsiveFontSize(1.9), color: '#000' }}>6000578700</Text>
                            </View>
                            <View>
                                <Icon name="keyboard-arrow-right" size={20} color={'#000'} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Expanded */}
                    <View style={{ marginTop: 10, backgroundColor: '#fff', paddingHorizontal: 13, paddingVertical: 12, flexDirection: 'column', elevation: 1, borderRadius: 12, gap: 6 }}>
                        {/* Receiver's Name */}
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Receiver’s name</Text>
                            <TextInput
                                style={{ height: 40, borderColor: offWhite, fontWeight: "500", borderWidth: 1.2, borderRadius: 8, paddingHorizontal: 15, fontSize: responsiveFontSize(2), color: '#000', backgroundColor: '#fff' }}
                                placeholder="Enter Name"
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor={'#c8cacf'}
                            />
                        </View>

                        {/* Receiver's Contact */}
                        <View style={{}}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Receiver’s contact</Text>
                            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', borderRadius: 8, borderColor: offWhite, borderWidth: 1.2, paddingHorizontal: 10, justifyContent: 'flex-start' }}>
                                <View style={{ height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Text style={{ color: '#000', fontWeight: '600', fontSize: responsiveFontSize(2), marginRight: 2, }}>+91</Text>
                                </View>
                                <TextInput
                                    style={{ fontWeight: "500", fontSize: responsiveFontSize(2), color: '#000', width: '80%' }}
                                    placeholder="Enter Contact No"
                                    keyboardType='numeric'
                                    maxLength={10}
                                    value={contact}
                                    onChangeText={setContact}
                                    placeholderTextColor={'#c8cacf'}
                                />
                            </View>
                            <Text style={{ fontSize: responsiveFontSize(1.5), color: offWhite, marginTop: 2, textAlign: 'right' }}>*May be used to assist delivery</Text>
                        </View>
                    </View>

                    {/* Address Type */}
                    <View style={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, }}>
                        <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Save address as *</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            {['Home', 'Work'].map((type) => (
                                <TouchableOpacity
                                    key={type}
                                    style={{
                                        width: 80,
                                        height: 30,
                                        borderRadius: 8,
                                        borderWidth: 1,
                                        borderColor: addressType === type ? backIconColor : '#e0e0e0',
                                        backgroundColor: addressType === type ? lightGreen : '#fff',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 4
                                    }}
                                    onPress={() => setAddresssType(type)}
                                >
                                    <Icon3
                                        name={type === 'Home' ? 'home' : 'building'}
                                        size={13}
                                        color={addressType === type ? backIconColor : '#000'}
                                    />
                                    <Text style={{ fontSize: responsiveFontSize(1.7), color: '#000', fontWeight: '600' }}>{type}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* <TouchableOpacity style={{ backgroundColor: darkGreen, padding: 10 }} onPress={mainn}>
                        <Text style={{ color: '#fff' }}>Change</Text>
                    </TouchableOpacity> */}

                    {/* Address Line 1 */}
                    <View style={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, }}>
                        <View style={{ marginBottom: 6 }}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Address Line 1 *</Text>
                            <TextInput
                                style={{ height: 38, fontWeight: "500", borderColor: address1Focused ? backIconColor : offWhite, borderWidth: address1Focused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                placeholder="Flat / House no / Floor / Building"
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor={'#c8cacf'}
                                onFocus={() => setAddress1Focused(true)}
                                onBlur={() => setAddress1Focused(false)}
                            />
                        </View>
                    </View>

                    {/* Address Line 2 */}
                    <View style={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, }}>
                        <View style={{ marginBottom: 6 }}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Address Line 2</Text>
                            <TextInput
                                style={{ height: 38, borderColor: address2Focused ? backIconColor : offWhite, fontWeight: "500", borderWidth: address2Focused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                placeholder="Enter Address 2"
                                value={name}
                                onChangeText={setName}
                                placeholderTextColor={'#c8cacf'}
                                onFocus={() => setAddress2Focused(true)}
                                onBlur={() => setAddress2Focused(false)}
                            />
                        </View>
                    </View>

                    {/* City and Pin code */}
                    <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* City */}
                        <View style={{ flex: 0.52 }}>
                            <View style={{ marginBottom: 6, width: '100%' }}>
                                <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>City *</Text>
                                <TextInput
                                    style={{ height: 38, borderColor: cityFocused ? backIconColor : offWhite, fontWeight: "500", borderWidth: cityFocused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                    placeholder="Enter City"
                                    value={city}
                                    onChangeText={setCity}
                                    placeholderTextColor={'#c8cacf'}
                                    onFocus={() => setCityFocused(true)}
                                    onBlur={() => setCityFocused(false)}
                                />
                            </View>
                        </View>

                        {/* Pin Code */}
                        <View style={{ flex: 0.43 }}>
                            <View style={{ marginBottom: 6, width: '100%' }}>
                                <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>Pin Code *</Text>
                                <TextInput
                                    style={{ height: 38, borderColor: pinCodeFocused ? backIconColor : offWhite, fontWeight: "500", borderWidth: pinCodeFocused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                    placeholder="Enter Pin Code"
                                    value={pinCode}
                                    onChangeText={setPinCode}
                                    keyboardType='numeric'
                                    placeholderTextColor={'#c8cacf'}
                                    onFocus={() => setPinCodeFocused(true)}
                                    onBlur={() => setPinCodeFocused(false)}
                                />
                            </View>
                        </View>
                    </View>

                    {/* State */}
                    <View style={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ marginBottom: 6, width: '100%' }}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 8 }}>State *</Text>
                            <TextInput
                                style={{ height: 38, borderColor: stateFocused ? backIconColor : offWhite, fontWeight: "500", borderWidth: stateFocused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                placeholder="Enter State"
                                value={state}
                                onChangeText={setState}
                                placeholderTextColor={'#c8cacf'}
                                onFocus={() => setStateFocused(true)}
                                onBlur={() => setStateFocused(false)}
                            />
                        </View>
                    </View>

                    {/* Landmark */}
                    <View style={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 12, backgroundColor: '#fff', elevation: 1, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ marginBottom: 6, width: '100%' }}>
                            <Text style={{ color: '#9297a0', fontWeight: '500', fontSize: responsiveFontSize(1.9), marginBottom: 9 }}>Nearby Landmark (optional)</Text>
                            <TextInput
                                style={{ height: 38, borderColor: landmarkFocused ? backIconColor : offWhite, fontWeight: "500", borderWidth: landmarkFocused ? 1.4 : 1.2, borderRadius: 8, paddingHorizontal: 12, fontSize: responsiveFontSize(1.8), color: '#000', backgroundColor: '#fff' }}
                                placeholder="Enter Landmark"
                                value={landmark}
                                onChangeText={setLandmark}
                                placeholderTextColor={'#c8cacf'}
                                onFocus={() => setLandmarkFocused(true)}
                                onBlur={() => setLandmarkFocused(false)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Confirm Address Button */}
            <LinearGradient
                colors={[darkGreen, '#3a9f43']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 12, elevation: 2, position: 'absolute', bottom: 10, marginHorizontal: 10, width: '95%', height: 48, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            >
                <TouchableOpacity style={{ borderRadius: 8, alignItems: 'center', width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
                    <Text style={{ fontSize: responsiveFontSize(2.2), color: '#fff', fontWeight: '600', textTransform: 'uppercase' }}>Confirm address</Text>
                    <Icon5 name="arrowright" size={23} color={'#fff'} />
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default AddNewAddress;

const styles = StyleSheet.create({});