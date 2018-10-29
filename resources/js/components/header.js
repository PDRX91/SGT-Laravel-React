import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="title-row d-flex justify-content-between">
                <h1 className="page-title"> Student Grade Table</h1>
                <h3 className="average">Grade Average: N/A</h3>
            </div>

        )
    }
}
