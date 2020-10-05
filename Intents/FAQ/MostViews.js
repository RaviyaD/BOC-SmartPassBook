import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class MostViews extends Component {
    constructor() {
        super();
        this.state = {
            updated_Height: 0,
        };
    }

    componentWillReceiveProps(update_Props) {
        if (update_Props.item.expanded) {
            this.setState(() => {
                return {
                    updated_Height: null,
                };
            });
        } else {
            this.setState(() => {
                return {
                    updated_Height: 0,
                };
            });
        }
    }

    shouldComponentUpdate(update_Props, nextState) {
        if (update_Props.item.expanded !== this.props.item.expanded) {
            return true;
        }

        return false;
    }
    render() {
        return (
            <View style={styles.Panel_Holder}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.props.onClickFunction}
                    style={styles.Btn}>
                    <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>
                </TouchableOpacity>

                <View style={{height: this.state.updated_Height, overflow: 'hidden'}}>
                    <Text style={styles.Panel_text}>{this.props.item.body}</Text>
                </View>
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
        color: '#625F56',
        backgroundColor: '#faee52',
        padding: 10,
    },

    Panel_Button_Text: {
        textAlign: 'left',
        color: '#625F56',
        fontSize: 17,
    },

    Panel_Holder: {
        borderWidth: 1,
        borderColor: '#ffd800',
        marginVertical: 5,
    },

    Btn: {
        padding: 10,
        backgroundColor: '#fff',
    },
});
