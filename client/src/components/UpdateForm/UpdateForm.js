import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
function UpdateForm(props) {

    const [upadeName, setUpdateName] = useState('');
    const [updateCompany, setUpdateCompany] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');
    const [updateDob, setUpdateDob] = useState('')
    const [updateSalary, setSalary] = useState('')

    const { handleUpdateForm, history } = props
    const { name, email, company, dob, salary, _id } = props.updateData;

    const updatedData = {
        name: upadeName ? upadeName : name,
        email: updateEmail ? updateEmail : email,
        company: updateCompany ? updateCompany : company,
        dob: updateDob ? updateDob : dob,
        salary: updateSalary ? updateSalary : salary
    }

    return (
        <div>
            <h5 className="mb-3">Change the Info</h5>
            <form className="card p-3" onSubmit={(e) => handleUpdateForm(updatedData, _id, history)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name*</label>
                    <input type="text" className="form-control mt-0" defaultValue={name} onChange={(e) => setUpdateName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Company*</label>
                    <input type="text" className="form-control mt-0" defaultValue={company} onChange={(e) => setUpdateCompany(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> Email* </label>
                    <input type="email" className="form-control mt-0" defaultValue={email} onChange={(e) => setUpdateEmail(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> DOB </label>
                    <input type="date" className="form-control mt-0" defaultValue={dob} onChange={(e) => setUpdateDob(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> Salary </label>
                    <input type="text" className="form-control mt-0" defaultValue={salary} onChange={(e) => setSalary(e.target.value)} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-info ml-0 p-0">Submit</button>
            </form>
            <div className="mt-2">* Denote the required field</div>
        </div>
    )
}

export default withRouter(UpdateForm)
