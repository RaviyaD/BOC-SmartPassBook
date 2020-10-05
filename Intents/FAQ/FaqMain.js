import React, {Component} from 'react';

import {
    Platform,
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity, ImageBackground,
} from 'react-native';
import MostViews from "./MostViews";


export default class FaqMain extends Component {
    constructor() {
        super();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        const array = [
            {
                expanded: false,
                title: '1. Can I view statement in offline mode?',
                body: 'In offline mode, you can see last viewed transaction only',
            },
            {
                expanded: false,
                title: '2. Do I have to pay for Smart Passbook Service?',
                body: 'No. This is a free service to account holders',
            },
            {
                expanded: false,
                title: '3. How can I change my login pin?',
                body: 'Go to settings and change your pin',
            },
            {
                expanded: false,
                title: '4. Can I name my accounts?',
                body:
                    'Yes. You can name your accounts with preferred names for easy identification',
            },
        ];

        this.state = {AccordionData: [...array]};
    }

    update_Layout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const array = this.state.AccordionData.map((item) => {
            const newItem = Object.assign({}, item);

            newItem.expanded = false;

            return newItem;
        });

        array[index].expanded = true;

        this.setState(() => {
            return {
                AccordionData: array,
            };
        });
    };

    render() {
        return (
            <View style={styles.MainContainer}>
                <ImageBackground style={styles.backgroundImage} source={require('../../assets/common.jpg')}>
                <ScrollView
                    contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 5}}>
                    {this.state.AccordionData.map((item, key) => (
                        <MostViews
                            key={key}
                            onClickFunction={this.update_Layout.bind(this, key)}
                            item={item}
                        />
                    ))}
                </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },

    Panel_text: {
        fontSize: 18,
        color: '#000',
        padding: 10,
    },

    Panel_Button_Text: {
        textAlign: 'left',
        color: '#000',
        fontSize: 15,
    },

    Panel_Holder: {
        borderWidth: 1,
        borderColor: '#FF6F00',
        marginVertical: 5,
    },

    Btn: {
        padding: 10,
        backgroundColor: '#fff',
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
