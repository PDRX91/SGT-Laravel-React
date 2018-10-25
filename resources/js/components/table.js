import React, { Component } from 'react';
import Header from './header'
import List from './list'

export default class Table extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container-fluid centered-content">
                <Header/>
                <List />
            </div>
        )
    }
}
