import React from 'react';
import {View, StyleSheet, Text,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Component} from 'react';
import Dash from 'react-native-dash';

export default class NavBar extends Component{
    render(){
        const navigation = this.props.navigation;
        return (
            <View>
                <View style={{height: '65%', width: '100%', backgroundColor: '#FDC723', shadowOffset: {width: 10, height: 10},
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    elevation: 10,}}>
                    <Text style={styles.title}>SMART</Text>
                    <Text style={styles.passbook}>PASSBOOK</Text>
                    <View style={{marginLeft:'3%', marginTop: '11%', flexDirection: 'row'}}>
                        <Icon name="person-circle" color="white" size={23} />
                        <Text style={{fontSize:15, marginLeft:'3%', marginTop: '1%', color:'#828264'}}>Duldissanayake@gmail.com</Text>
                    </View>
                </View>
                <ImageBackground
                    source={require('../assets/main3.jpg')}
                    style={{
                        flexDirection: 'column',
                        position: 'absolute',
                        marginTop: '60%',
                        marginLeft: '2%',
                        width:'100%',

                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{marginTop: '7%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="list-circle" color="#828264" size={23} />
                        </View>
                        <Text onPress={() => navigation.navigate('AccountList', { navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '7%'}}>
                            Account List
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View  style={{marginTop: '7%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="ios-settings-sharp" color="#828264" size={23} />
                        </View>
                        <Text onPress={() => navigation.navigate('Settings',{ navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '7%'}}>
                            Account Settings
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View  style={{marginTop: '7%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="ios-card-sharp" color="#828264" size={22} />
                        </View>
                        <Text onPress={() => navigation.navigate('Interest', { navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '7%'}}>
                            Interest
                        </Text>
                    </View>

                    <Dash dashGap={3} dashColor="#deded4" style={{width:'94%', height:1, flexDirection:'row', marginLeft:'5%', marginTop: '10%'}}/>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View  style={{marginTop: '12%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="md-call" color="#828264" size={23} />
                        </View>
                        <Text onPress={() => navigation.navigate('ContactUs', { navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '12%'}}>
                            Contact us
                        </Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View  style={{marginTop: '7%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="chatbubbles" color="#828264" size={23} />
                        </View>
                        <Text onPress={() => navigation.navigate('FaqMain', { navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '7%'}}>
                            FAQ
                        </Text>
                    </View>

                    <Dash dashGap={3} dashColor="#deded4" style={{ width:'94%', height:1, flexDirection:'row', marginLeft:'5%', marginTop: '10%'}}/>


                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View  style={{marginTop: '12%', marginLeft:'7%', marginRight:'7%'}}>
                            <Icon name="document-text" color="#828264" size={23} />
                        </View>
                        <Text onPress={() => navigation.navigate('TermsConditions', { navigation: navigation})} style={{fontSize: 20, marginLeft: '5%', marginTop: '12%'}}>
                            Terms and Cond.
                        </Text>
                    </View>

                    <Dash dashGap={3} dashColor="#deded4" style={{ width:'94%', height:1, flexDirection:'row', marginLeft:'5%', marginTop: '10%'}}/>
                </ImageBackground>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 45,
        top: 5,
        marginLeft: '7%',
        marginTop: '5%',
        fontWeight: 'bold'
    },
    passbook: {
        color: '#000000',
        fontSize: 33,
        marginLeft: '7%',
        fontWeight: 'bold'
    },
    imageView: {
        width: '15%',
        height: '120%',
        marginLeft: '7%',
    },
});
