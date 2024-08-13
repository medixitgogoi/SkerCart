import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { background, darkGreen } from '../utils/colors';

const Profile = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background, paddingBottom: 10 }}>
            <StatusBar
                animated={true}
                backgroundColor={darkGreen}
                barStyle="dark-content"
            />
            <Text style={{ color: '#000' }}>Profile screen</Text>
            {/* <TouchableOpacity style={{ backgroundColor: darkGreen, alignSelf: 'center', padding: 5, borderRadius: 10 }} onPress={() => dispatch(logoutUser())}>
                <Text style={{ color: '#fff' }}>Log Out</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({});