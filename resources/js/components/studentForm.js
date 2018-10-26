import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Student Name',
            course: 'Student Course',
            grade: 'Student Grade'
        }

        this.handleChange = this.handleChange.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    addStudent(){
        const {name, course, grade} = this.state;
        axios.post('/api/students', {
            ID: this.props.userID,
            name: name,
            course: course,
            grade: grade
        }).then((response)=>{
            console.log(response)
        }).then((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className="form-container">
                <h3>Add Student</h3>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-user"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="name" id="name" onChange={this.handleChange} placeholder={this.state.name}/>
                </div>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-book-open"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="course" id="course" onChange={this.handleChange} placeholder={this.state.course}/>
                </div>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-graduation-cap"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="grade" id="grade" onChange={this.handleChange} placeholder={this.state.grade}/>
                </div>
                <div className="button-row row">
                    <button className="add-btn btn btn-success col ml-3" onClick={this.addStudent}>ADD</button>
                    <button className="cancel-btn btn btn-danger col mr-3">CANCEL</button>
                </div>

            </div>
        )
    }
}
