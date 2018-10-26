import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component{
    render(){
        return(
            <div className="form-container">
                <h3>Add Student</h3>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i class="fas fa-user"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Student Name"/>
                </div>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i class="fas fa-book-open"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="course" id="course" placeholder="Student Course"/>
                </div>
                <div className="form-group input-group">
                    <span className="input-group-prepend">
                        <span className="input-group-text">
                            <i class="fas fa-graduation-cap"></i>
                        </span>
                    </span>
                    <input type="text" className="form-control" name="grade" id="grade" placeholder="Student grade"/>
                </div>
                <div className="button-row row">
                    <button className="add-btn btn btn-success col ml-3">ADD</button>
                    <button className="cancel-btn btn btn-danger col mr-3">CANCEL</button>
                </div>

            </div>
        )
    }
}
