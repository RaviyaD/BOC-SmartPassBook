import React from 'react';
import {Component} from 'react';
import AccountList from "./AccountList";

class Dashboard extends Component{
    render(){
        return (
            <AccountList navigation={this.props.navigation}/>
        )
    }
}

export default Dashboard;
