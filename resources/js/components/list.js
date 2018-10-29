import React, { Component } from 'react';
import axios from 'axios';
import AddStudentForm from './addstudentForm'
import EditStudentForm from './editStudentForm'


export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            'items' : [],
            'id': 1,
            'itemToEdit': 0,
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.renderStudent = this.renderStudent.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    componentDidMount(){
        this.getStudents();
    }

    getStudents() {
        axios.get('/api/students', {
            params: {
                ID: this.state.id
            }
        })
        .then((response) => {
            this.setState({'items': response.data});
            console.log(this.state)
            // return this.genRows();
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    genRows() {
        const students = this.state.items.map((item, index) => {
            const {name, course, grade, id} = item;
            return(
                <tr key={index}>
                    <td>{name}</td>
                    <td>{course}</td>
                    <td>{grade}</td>
                    <td>
                        {/* <button className="edit-btn btn btn-info mr-2" id={id} data-toggle="modal"
                            data-target="#editModal" onClick={()=>{this.handleEdit(item)}}>EDIT</button> */}
                        <button className="delete-btn btn btn-danger" id={id} onClick={this.handleDelete} index={index}>DELETE</button>
                    </td>
                </tr>
            )
        })
        return students;
    }

    handleDelete(e){
        const studentID = e.target.id;
        console.log(this.props.index);
        let tableRow = document.querySelectorAll(`[key="${e.target.index}"`);
        axios.delete('/api/students/'+ studentID)
            .then((response)=>{
                this.getStudents();
            })
            .then((error)=> {
                console.log(error)
            })
    }

    handleEdit(index){
        this.setState({
            itemToEdit: index
        })
        console.log("edit: ", this.state.itemToEdit);
    }

    saveEdit(item) {
        const itemToEdit = this.state.itemToEdit;
        let tempItem = this.state.items;
        tempitem[itemToEdit] = item;
        this.setState({
            items: tempItem
        })
        this.getStudents();
    }

    renderStudent(){
        this.getStudents();
    }

    render() {
        const students = this.genRows();
        const itemToEdit = this.state.itemToEdit;
        let editModal

        if(itemToEdit) {
            let modalData = this.state.items[itemToEdit];
            if(modalData){
                console.log("modal data:", modalData)
            editModal = <EditStudentForm name={modalData.name} course={modalData.course} grade={modaData.grade} saveedit={this.saveEdit}/>
            }
        } else {
            editModal = <EditStudentForm name='' course='' grade='' saveedit={this.saveEdit}/>;
        }

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
                    {editModal}
                </div>
                <div className="add-student-box col-md-4">
                    <AddStudentForm userID={this.state.id} renderstudent={this.renderStudent}/>
                </div>
            </div>
        )
    }
}
