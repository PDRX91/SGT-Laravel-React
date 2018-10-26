import React, { Component } from 'react';
import axios from 'axios';
import StudentForm from './studentForm'


export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            'items' : []
        }
    }

    componentDidMount(){
        this.getStudents();
    }

    getStudents() {
        axios.get('/api/students', {
            params: {
                ID: 1
            }
        })
        .then((response) => {
            this.setState({'items': response.data});
            console.log(this.state)
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    render() {
        const students = this.state.items.map((item, index) => {
            const {name, course, grade, id} = item;
            return(
                <tr key={index}>
                    <td>{name}</td>
                    <td>{course}</td>
                    <td>{grade}</td>
                    <td>
                        <button className="delete-btn btn btn-danger" id={id}>DELETE</button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="main-content-box container-fluid row">
                <div className="table-box col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="column-heading">Student Name</th>
                                <th className="column-heading">Student Course</th>
                                <th className="column-heading">Student Grade</th>
                                <th className="column-heading">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students}
                        </tbody>
                    </table>
                </div>
                <div className="add-student-box col-md-4">
                    <StudentForm />
                </div>
            </div>
        )
    }
}
