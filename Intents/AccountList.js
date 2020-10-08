import React, {useEffect, useState} from 'react';
import Dash from 'react-native-dash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';
import NavBar from "./NavBar";
import Spinner from "react-native-loading-spinner-overlay";
import {Content} from "native-base";

const AccountList = ({navigation}) => {
    const [drawerPosition, setDrawerPosition] = useState('left');
    const [spinner, setspinner] = useState(true);
    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setspinner(false)
        },3000)
    })

    const navigationView = (
        <View style={styles.navigationContainer}>
            <NavBar navigation={navigation} />
        </View>
    );
    return(
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
                color="yellow"
                animation='fade'

            />
            <View style={styles.container}>
                <Text style={{color:'white', fontSize:35, marginTop:'25%', marginLeft:'5%',fontWeight: 'bold'}}>Account List</Text>
            </View>
            <View>
                <Text style={styles.accName}>Ms. Dulmini</Text>
                <Dash dashGap={3} style={{width:'90%', height:1, flexDirection:'row', marginLeft:'5%'}}/>
                <TouchableOpacity  onPress={() => navigation.navigate('TransactionHistory',{  navigation: navigation})}>
                <View style={styles.accDetails}>
                    <Text style={styles.accNum}>8010605</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.accBalance}>LKR 25,000</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings',{ AccountNo: 8010605, navigation: navigation})}>
                            <View onPress={() => navigation.navigate('AccountSettings',{ AccountNo: 8010605, navigation: navigation})}
                                  style={{fontSize: 20, marginTop:'4%', marginLeft:'45%'}}>
                                <Icon name="circle-edit-outline" size={40} color="#828264" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.accType}>SAVINGS ACCOUNT</Text>
                </View>
                </TouchableOpacity>
                <Dash dashGap={3} style={{width:'90%', height:1, flexDirection:'row', marginLeft:'5%'}}/>

                <TouchableOpacity  onPress={() => navigation.navigate('TransactionHistory',{  navigation: navigation})}>
                <View style={styles.accDetails}>
                    <Text style={styles.accNum}>1020305</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.accBalance}>LKR 75,000</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings',{ AccountNo: 8010605, navigation: navigation})}>
                            <View onPress={() => navigation.navigate('AccountSettings',{ AccountNo: 8010605, navigation: navigation})}
                                  style={{fontSize: 20, marginTop:'4%', marginLeft:'45%'}}>
                                <Icon name="circle-edit-outline" size={40} color="#828264" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.accType}>JOINT ACCOUNT</Text>
                </View>
                </TouchableOpacity>
                <Dash dashGap={3}  style={{width:'90%', height:3, flexDirection:'row', marginLeft:'5%'}}/>
            </View>
        </DrawerLayoutAndroid>)
};

const styles = StyleSheet.create({
    container: {
        height:'25%',
        width: '100%',
        backgroundColor: '#faee52',
    },
    innerContainer:{
        height:'80%',
        width:'70%',
        marginTop:'30%'
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
    accName: {
        fontSize: 25,
        margin: '5%',
        fontWeight: 'bold',
        color: '#ff9933',
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
    },spinnerTextStyle: {
    color: '#FFF'
}
});

export default AccountList;
