import React, { Component } from 'react';


export default class List extends Component {
    // contructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div className="main-content-box container-fluid row">
                <div className="table-box col-md-8">
                    <table className="table">
                        <thead>
                            <th className="column-heading">Student Name</th>
                            <th className="column-heading">Student Course</th>
                            <th className="column-heading">Student Grade</th>
                            <th className="column-heading">Operations</th>
                        </thead>
                    </table>
                </div>
                <div className="add-student-box col-md-4">
                    add student goes here
                </div>
            </div>
        )
    }
}
