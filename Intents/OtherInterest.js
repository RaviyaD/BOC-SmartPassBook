import React, { Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from "firebase";

export default class OtherInterest extends Component{
    constructor(props) {
        super(props);
        this.state={
            listK:[],
            list:[],
            scit:'',
            loan:'',
            fdepo:'',
            cacc:'',
            bocteen:''
        }
    }
    componentDidMount(): void {

            this.setState({
                list:[],
                listK: [],
            });
        firebase.database().ref('Interest').on('value', (snapshot) => {
            snapshot.forEach((item) => {
                if(item.key==='BOC TEEN'){
                    this.setState({
                        bocteen:item.val()
                    })
                }if(item.key==='CURRENT ACCOUNT'){
                    this.setState({
                        cacc:item.val()
                    })
                }if(item.key==='FIXED DEPOSIT'){
                    this.setState({
                        fdepo:item.val()
                    })
                }if(item.key==='LOAN'){
                    this.setState({
                        loan:item.val()
                    })
                }else{
                    this.setState({
                        scit:item.val()
                    })
                }
            })
        })
    }
    render(){
        return(
            <View>
                <View>
                    <View style={styles.rate}>
                        <Icon name="star-half-empty" color="#828264" size={23} />
                        <Text style={{fontSize: 15,marginLeft:'6%'}}>
                            FIXED DEPOSIT {'                       '} {this.state.fdepo}
                        </Text>
                    </View>

                    <View style={styles.rate}>
                        <Icon name="star-half-empty" color="#828264" size={23} />
                        <Text style={{fontSize: 15,marginLeft:'6%'}}>
                            CURRENT ACCOUNT {'             '} {this.state.cacc}</Text>
                    </View>

                    <View style={styles.rate}>
                        <Icon name="star-half-empty" color="#828264" size={23} />
                        <Text style={{fontSize: 15,marginLeft:'6%'}}>
                            LOAN {'                                       '} {this.state.loan}
                        </Text>
                    </View>
                    <View style={styles.rate}>
                        <Icon name="star-half-empty" color="#828264" size={23} />
                        <Text style={{fontSize: 15,marginLeft:'6%'}}>
                            BOC TEEN {'                                  '} {this.state.bocteen}
                        </Text>
                    </View>

                    <View style={styles.rate}>
                        <Icon name="star-half-empty" color="#828264" size={23} />
                        <Text style={{fontSize: 15,marginLeft:'6%'}}>
                            SENIOR CITIZENS {'                  '} {this.state.scit}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    rate:{
        backgroundColor:'#e6e6e6',
        height:'15%',
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
        fontSize: 25,
        marginTop: '5%',
        marginLeft:'10%',
        marginBottom:'2%',
        fontWeight: 'bold',
        color: '#828264',
    },
    divider: {
        borderWidth: 3,
        width: '90%',
        borderColor: '#ffcc00',
        marginLeft:'5%'
    },
    accNum: {
        fontSize: 20,
    },
    accDetails: {
        marginLeft: '10%',
        marginTop: '4%',
    },
    accBalance: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    accType: {
        fontSize: 15,
        marginBottom: '3%'
    },
    editButton: {
        alignItems: 'center',
        padding: 5,
        marginLeft: '20%',
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
