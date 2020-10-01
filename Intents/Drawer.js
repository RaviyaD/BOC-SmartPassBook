import React, {useState} from 'react';
import NavBar from './NavBar';

import {
    DrawerLayoutAndroid,
    StyleSheet,
    View,
} from 'react-native';
import Interest from "./Interest";

const Drawer = () => {
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
            <NavBar />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}>
            <Interest/>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
        padding: 8,
    },
});

export default Drawer;
