import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            course: '',
            grade: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
            course: nextProps.course,
            grade: nextProps.grade,
        });
    }

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        }, console.log(this.state)
        )
    }

    handleSave() {
        console.log("edit form state:", this.state)
        const item = this.state;
        // this.props.saveedit(item)
    }

    render() {
        console.log('edit props', this.props);
        const inputStyle = {
            display: 'block',
            width: '100%',
        }
        return (
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Student Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>Name</label><br/>
                            <input value={this.state.name} name="name" onChange={this.handleChange} style={inputStyle}/><br/>
                            <label>Course</label><br/>
                            <input value={this.state.course} name="course" onChange={this.handleChange} style={inputStyle}/><br/>
                            <label>Grade</label><br/>
                            <input value={this.state.grade} name="grade" onChange={this.handleChange} style={inputStyle}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
