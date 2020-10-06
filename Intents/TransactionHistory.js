import React, {Component} from 'react';
import {StyleSheet, View, Text,SafeAreaView, ScrollView, Modal,Alert} from "react-native";
import {Card, CardItem,Button, Body, Container, Content} from "native-base";
import Dialog, { DialogContent,DialogButton,DialogFooter,SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {Row, Col} from 'react-native-easy-grid'


const array = [
    {id:0,date:'04/04/2020',amount:'+15500.00',balance:'LKR 25000.00', color:'blue',title:'Boundry 1'},
    {id:1,date:'31/03/2020',amount:'+500.00',balance:'LKR 9500.00', color:'blue',title:'Interest'},
    {id:2,date:'28/03/2020',amount:'-1000.00',balance:'LKR 9000.00', color:'red',title:'Credit Card Payment'},
    {id:3,date:'22/03/2020',amount:'-2000.00',balance:'LKR 10000.00', color:'red',title:'Monthly Charge'},
    {id:4,date:'15/03/2020',amount:'+4000.00',balance:'LKR 12000.00', color:'blue',title:'Bill Payment'},
    {id:5,date:'12/03/2020',amount:'-2000.00',balance:'LKR 8000.00', color:'red',title:'Dialog Bill Payment'},
    {id:6,date:'06/03/2020',amount:'+5000.00',balance:'LKR 10000.00', color:'blue',title:'Boundry 2'},
    {id:7,date:'04/03/2020',amount:'+4500.00',balance:'LKR 5000.00', color:'blue',title:'Deposite'},
]

class TransactionHistory extends Component {

    constructor() {
        super();
        this.state = {
            visible:false
        }
    }

    onSubmit = () => {
        console.log('hyyyy')
    }

    render() {

        return (

            <Container>
                <Content>

                    <Row style={{marginTop: 20,top:0}}>
                        <Col style={{backgroundColor: '#fafaac', height: 120}}>
                            <Button light bordered style={{left:0,width:150, color:'white',top:10,borderColor: '#111111',borderRadius: 15}}
                                    onPress={() => {
                                        this.setState({ visible: true });
                                    }}>
                                <Text style={{left:10,fontSize:16,fontWeight: 'bold'}} >Account Details</Text>

                            </Button>
                            <Text style={{marginTop: 10, fontSize: 15,fontStyle: 'italic'}}>Last Update On</Text>

                            <Text style={{margin: 8, fontSize: 20}}>
                                <Text> Today </Text>
                                04.00PM</Text>
                        </Col>
                        <Col style={{backgroundColor: '#fafaac', height: 120, alignItems: 'center',top:0}}>
                            <Text style={{margin:10, fontSize: 20}}>Available Balance</Text>

                            <Text style={{margin: 8, fontSize: 20}}>
                                <Text>LKR </Text>
                                <Text style={{margin: 8, fontSize: 35, fontWeight: 'bold'}}>25000</Text>
                                <Text>.00</Text> </Text>
                        </Col>
                    </Row>

                    <Dialog
                        dialogTitle={<DialogTitle title="Account Details" />}
                        visible={this.state.visible}
                        dialogAnimation={new SlideAnimation({
                            slideFrom: 'top',
                        })}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}
                        footer={
                            <DialogFooter>
                                <DialogButton
                                    text="Bank Statement"
                                    onPress={() => {}}
                                />
                                <DialogButton
                                    text="Share"
                                    onPress={() => {}}
                                />
                                <DialogButton
                                    text="CANCEL"
                                    onPress={() => {this.setState({visible:false})}}
                                />
                            </DialogFooter>
                        }
                    >
                        <DialogContent style={{width:350,height:250, alignItems:'center', margin:10}}>
                           <Text style={{top:10,fontSize:18,left:10, margin:10}}>Account No :
                               <Text style={{fontSize:25,fontWeight:'bold'}}>1235454234</Text></Text>

                            <Text style={{top:10,fontSize:18,left:10, margin:10}}>Account Name :
                                <Text style={{fontSize:25,fontWeight:'bold'}}>H.D.L Lakshan</Text></Text>

                            <Text style={{top:10,fontSize:18,left:10, margin:10}}>Account Branch :
                                <Text style={{fontSize:25,fontWeight:'bold'}}>Kalawana</Text></Text>

                            <Text style={{top:10,fontSize:18,left:10, margin:10}}>Account Type :
                                <Text style={{fontSize:25,fontWeight:'bold'}}>Saving</Text></Text>
                        </DialogContent>
                    </Dialog>

                    <Card style={{top: 0}}>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>

                                <Text style={{fontSize: 18}}>
                                    Saving Account - XXXXXXXX0987
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>


                    {
                        array.map((value,key) => {
                            return <Card key={key} style={{height: 100}}>
                                <CardItem>
                                    <Body>
                                        <Text style={{fontSize: 20, left: 30, top: 5, fontFamily: 'tahoma',fontStyle: 'italic'}}>{value.title}</Text>
                                        <Text style={{
                                            fontSize: 30,
                                            right: 5,
                                            top: 5,
                                            position: 'absolute',
                                            fontWeight: 'bold',
                                            fontFamily: 'tahoma',
                                            color: value.color
                                        }}>{value.amount}</Text>
                                        <Text style={{fontSize: 20, left: 30, top: 40, position: 'absolute',}}>{value.date}</Text>
                                        <Text style={{fontSize: 20, right: 5, top: 45, position: 'absolute',fontStyle: 'italic'}}>{value.balance}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        })
                    }
                </Content>
            </Container>
            // </View>

        );
    }
}

export default TransactionHistory;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    picker: {
        height: 50,
        width: 150,
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'blue',
        borderRadius: 100
    },
    accDetails: {
        position: 'absolute',
        right: 15,
        top: 15,
        width: 50,
        height: 20
    }
})

