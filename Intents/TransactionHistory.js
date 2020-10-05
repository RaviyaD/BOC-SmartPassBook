import React, {useState} from 'react'
import {StyleSheet, View, Text,SafeAreaView, ScrollView, Modal,Alert} from "react-native";
import {Card, CardItem,Button, Body, Container, Content} from "native-base";
import {Row, Col} from 'react-native-easy-grid'



const TransactionHistory = () => {
    const [selectedValue, setSelectedValue] = useState("java")
    const [modalVisible, setModalVisible] = useState(true);
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
    return (
        // <View style={styles.container} >
        <Container>
            <Content>


                <Button light rounded style={{left:300,width:100, color:'white',top:10}}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                    <Text>Account Details</Text>
                </Button>


                <Row style={{marginTop: 20}}>
                    <Col style={{backgroundColor: '#f3f3f8', height: 80}}>
                        <Text style={{margin: 5, fontSize: 15}}>Last Update On</Text>

                        <Text style={{margin: 8, fontSize: 20}}>
                            <Text> Today </Text>
                            04.00PM</Text>
                    </Col>
                    <Col style={{backgroundColor: '#f0f6f5', height: 80, alignItems: 'center'}}>
                        <Text style={{margin: 5, fontSize: 15}}>Available Balance</Text>

                        <Text style={{margin: 8, fontSize: 20}}>
                            <Text>LKR </Text>
                            <Text style={{margin: 8, fontSize: 25, fontWeight: 'bold'}}>25000</Text>
                            <Text>.00</Text> </Text>
                    </Col>
                </Row>

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
                                    <Text style={{fontSize: 20, left: 30, top: 5, fontFamily: 'tahoma'}}>{value.title}</Text>
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
                                    <Text style={{fontSize: 20, right: 5, top: 45, position: 'absolute'}}>{value.balance}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    })
                }
            </Content>
        </Container>
        // </View>
    )
}

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
export default TransactionHistory
