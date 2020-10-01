import React,{useState} from 'react';
import {View, StyleSheet, Button, DrawerLayoutAndroid, Text, ImageBackground} from 'react-native';
import NavBar from "./NavBar";

const Interest = () => {
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
                <View style={styles.innercontainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>INTEREST RATES</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.accDetails}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.accNum}>Last month-AUG</Text>
                            <View style={styles.editButton}>
                                <Text style={{fontSize: 17, color: '#ff9933'}}> 8010605 </Text>
                            </View>
                        </View>
                        <Text style={styles.accBalance}>LKR 23.50</Text>
                        <Text style={styles.accType}>ANNUAL RATE</Text>
                        <Text style={styles.accType}>0.3%</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.accDetails}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.accNum}>Last month-AUG</Text>
                            <View style={styles.editButton}>
                                <Text style={{fontSize: 17, color: '#ff9933'}}> 1020305 </Text>
                            </View>
                        </View>
                        <Text style={styles.accBalance}>LKR 79.50</Text>
                        <Text style={styles.accType}>ANNUAL RATE</Text>
                        <Text style={styles.accType}>0.7%</Text>
                    </View>
                    <View style={styles.otherAccrates}>
                        <Text style={{color: '#ff9933', fontSize: 20}}>
                            OTHER ACCOUNT RATES
                        </Text>
                    </View>
                    <View style={styles.otherRates}>
                        <Text style={{fontSize: 15, marginTop: '5%'}}>
                            FIXED DEPOSIT {'             '} 5%
                        </Text>
                        <Text style={{fontSize: 15}}>CURRENT ACCOUNT {'   '} 0%</Text>
                        <Text style={{fontSize: 15}}>
                            LOAN {'                             '} 15%
                        </Text>
                    </View>
                </View>
                </ImageBackground>
            </View>
            </DrawerLayoutAndroid>
        )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faee52',
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
        marginLeft: '15%',
        marginTop: '20%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    middle: {
        width: '80%',
        height: '70%',
        margin: '10%',
        borderWidth: 2,
    },
    accName: {
        fontSize: 25,
        margin: '5%',
        fontWeight: 'bold',
        color: '#ff9933',
    },
    divider: {
        borderWidth: 3,
        width: '80%',
        marginLeft: '10%',
        borderColor: '#ff9933',
        marginTop: '10%',
    },
    accNum: {
        fontSize: 20,
    },
    accDetails: {
        marginLeft: '10%',
        marginTop: '2%',
    },
    accBalance: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    accType: {
        fontSize: 15,
    },
    editButton: {
        alignItems: 'center',
        padding: 5,
        marginLeft: '20%',
    },
    otherAccrates: {
        marginTop: '15%',
        marginLeft: '20%',
    },
    otherRates: {
        marginLeft: '25%',
        marginBottom: '20%',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Interest;
