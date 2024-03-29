import * as React from 'react';
import {View, StyleSheet, Dimensions, Text, ImageBackground} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OtherInterest from "./OtherInterest";


const FirstRoute = () => (
    <ImageBackground
        source={require('../assets/main3.jpg')}
        style={{
            flexDirection: 'column',
            position: 'absolute',
            marginLeft: '2%',
            width:'100%',
            height:'100%'

        }}>
    <View>
        <View>
            <Text style={styles.accName}>Ms Dulmini</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.accDetails}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.accNum}>Last month-AUG</Text>
                <View style={styles.editButton}>
                    <Text style={{fontSize: 17, color: '#828264'}}> 8010605 </Text>
                </View>
            </View>
            <Text style={styles.accBalance}>LKR 23.50</Text>
            <Text style={styles.accType}>ANNUAL RATE    0.3%</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.accDetails}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.accNum}>Last month-AUG</Text>
                <View style={styles.editButton}>
                    <Text style={{fontSize: 17, color: '#828264'}}> 1020305 </Text>
                </View>
            </View>
            <Text style={styles.accBalance}>LKR 79.50</Text>
            <Text style={styles.accType}>ANNUAL RATE     0.7%</Text>
        </View>
        <View style={styles.divider} />
    </View>
    </ImageBackground>
);

const SecondRoute = () => (
    <OtherInterest />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Your Account' },
        { key: 'second', title: 'Other Accounts' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#FDC723' }}
            style={{ backgroundColor: '#f3f3f2' }}
            labelStyle={{ color: '#828264', fontWeight: 'bold'}}
        />
    );


    return (
        <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />


    );
}

const styles = StyleSheet.create({
    rate:{
        backgroundColor:'#e6e6e6',
        height:'17%',
        width:'98%',
        padding: 17,
        marginTop:'2%',
        borderRadius:2,
        marginLeft:'1%',
        flexDirection:'row'
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
        fontSize: 20,
        marginTop: '5%',
        marginLeft:'10%',
        marginBottom:'2%',
        fontWeight: 'bold',
        color: '#828264',
    },
    divider: {
        borderWidth: 3,
        width: '90%',
        borderColor: '#FDC723',
        marginLeft:'5%'
    },
    accNum: {
        fontSize: 16,
    },
    accDetails: {
        marginLeft: '10%',
        marginTop: '2%',
    },
    accBalance: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    accType: {
        fontSize: 15,
        marginBottom: '1%'
    },
    editButton: {
        alignItems: 'center',
        marginLeft: '22%',
    },
    otherAccrates: {
        marginTop: '5%',
        marginLeft: '20%',
    },
    otherRates: {
        marginLeft: '6%',
        marginRight:'6%'
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
