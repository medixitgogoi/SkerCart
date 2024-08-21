import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { background, backIconColor, darkGreen, offWhite } from '../utils/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/dist/FontAwesome6';
import Icon4 from 'react-native-vector-icons/dist/Ionicons';
import { useState } from 'react';
import { address } from '../utils/address';

const Checkout = () => {

    const navigation = useNavigation();

    const [address, setAddress] = useState(true);

    const addressHandler = () => {
        setAddress(prev => !prev);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background, paddingBottom: 10 }}>
            <StatusBar
                animated={true}
                backgroundColor={background}
                barStyle="dark-content"
            />

            {/* Header */}
            <View style={{ paddingHorizontal: 10, height: 50, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, elevation: 3 }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={23} color={'#000'} />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontWeight: "600", fontSize: responsiveFontSize(2.5), textAlign: 'center', textTransform: 'uppercase' }}>Checkout</Text>
                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, elevation: 3 }} onPress={() => navigation.navigate('Profile')}>
                    <Icon2 name="account" size={23} color={'#000'} />
                </TouchableOpacity>
            </View>

            <View style={{ paddingTop: 5 }}>
                {/* address */}
                <View style={{ paddingHorizontal: 13 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000', fontSize: responsiveFontSize(2.2), fontWeight: '700' }}>Saved Addresses</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AddNewAddress')} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Text style={{ color: backIconColor, fontSize: responsiveFontSize(2), fontWeight: '500' }}>Add new</Text>
                            <Icon3 name="plus" size={13} color={backIconColor} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 8, backgroundColor: '#fff', paddingHorizontal: 8, paddingVertical: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'flex-start', elevation: 1, }}>
                        <TouchableOpacity onPress={addressHandler} style={{ flex: 0.1, paddingTop: 0, justifyContent: 'center', flexDirection: 'row' }}>
                            {address ? (
                                <View>
                                    <Icon2 name="checkbox-marked" size={20} color={backIconColor} />
                                </View>
                            ) : (
                                <View>
                                    <Icon2 name="checkbox-blank-outline" size={20} color={'#868c95'} />
                                </View>
                            )}

                        </TouchableOpacity>
                        <View style={{ flex: 0.8, paddingHorizontal: 5, flexDirection: 'column', justifyContent: 'space-between', }}>
                            <Text style={{ color: '#000', fontWeight: '700', fontSize: responsiveFontSize(2.2) }}>Home</Text>
                            <Text style={{ color: '#000', textAlign: 'justify', fontSize: responsiveFontSize(1.9) }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi eum nam quis beatae repellendus neque deserunt aspernatur cum eius.</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 0.1, paddingTop: 4, justifyContent: 'center', flexDirection: 'row' }}>
                            <Icon3 name="pencil" size={15} color={'#868c95'} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Checkout;

const styles = StyleSheet.create({});
