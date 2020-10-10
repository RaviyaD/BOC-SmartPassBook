import React, {useEffect, useState} from 'react';
import {View, StyleSheet, DrawerLayoutAndroid, Text} from 'react-native';
import NavBar from "./NavBar";
import TabViewExample from "./tab";


const Interest = ({navigation}) => {

    const [drawerPosition, setDrawerPosition] = useState('left');
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    const navigationView = (
        <View style={styles.navigationContainer}>
            <NavBar navigation={navigation} />
        </View>
    );


    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}>
            <View style={styles.container}>
                <Text style={{color:'white', fontSize:35, marginTop:'10%', marginLeft:'22%'}}>Interest Rates</Text>
            </View>

                <TabViewExample/>

        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'15%',
        width: '100%',
        backgroundColor: '#faee52',
    },
});

export default Interest;
