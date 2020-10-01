import React,{useState} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    DrawerLayoutAndroid
} from 'react-native';
import NavBar from "./NavBar";

const AccountList = () => {
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
        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={() => navigationView}>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/common.jpg')}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>MY ACCOUNT LIST</Text>
                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.accName}>Ms. Dulmini</Text>
                        <View style={styles.divider} />
                        <View style={styles.accDetails}>
                            <Text style={styles.accNum}>8010605</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.accBalance}>LKR 3,000</Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={{fontSize: 20}}> EDIT </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.accType}>SAVINGS ACCOUNT</Text>
                            <View style={styles.editButtonView} />
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.accDetails}>
                            <Text style={styles.accNum}>1020305</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.accBalance}>LKR 7,500</Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={{fontSize: 20}}> EDIT </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.accType}>JOINT ACCOUNT</Text>
                        </View>
                        <View style={styles.divider} />
                    </View>
                </ImageBackground>
            </View>
            </DrawerLayoutAndroid>
            )
};
export default AccountList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer:{
        height:'80%',
        width:'70%',
        marginTop:'30%'
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
        padding: 8,
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innercontainer: {
        width: '95%',
        height: '97%',
        backgroundColor: 'white',
        margin: 10,
    },
    navbutton: {
        flex: 1,
        position: 'absolute',
        top: 0,
        margin: 30,
    },
    button: {
        backgroundColor: '#841584',
    },
    title: {
        color: '#000000',
        top: 5,
        marginLeft: '1%',
        marginTop: '10%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    middle: {
        width: '80%',
        height: '70%',
        margin: '10%',
        borderWidth: 5,
        borderColor: '#ffcc00',
    },
    accName: {
        fontSize: 25,
        margin: '5%',
        fontWeight: 'bold',
        color: '#ffcc00',
    },
    divider: {
        borderWidth: 3,
        width: '90%',
        marginLeft: '5%',
        borderColor: '#ff9933',
    },
    accNum: {
        fontSize: 20,
    },
    accDetails: {
        marginLeft: '5%',
        marginTop: '2%',
    },
    accBalance: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    accType: {
        fontSize: 15,
        marginBottom: '5%',
    },
    editButton: {
        alignItems: 'center',
        backgroundColor: '#ffffcc',
        padding: 10,
        marginLeft: '5%',
        width: '25%',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#ff9933',
    },
    editButtonView: {
        marginTop: '5%',
        marginLeft: '70%',
        justifyContent: 'flex-end',
    },
});
