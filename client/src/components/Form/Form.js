import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

function Form(props) {

  const [name, setUserName] = useState('');
  const [company, setUserCompany] = useState('');
  const [email, setUserEmail] = useState('');
  const [dob, setDob] = useState('')
  const [salary, setsSalary] = useState('')
  const { handleSubmitForm, history } = props

  let userData = {
    name: name,
    company: company,
    email: email,
    dob: dob,
    salary: salary
  }
  const isValid = name && email && company

  return (
    <div>
      <h5 className="mb-3">Fill all the required field {" *"}</h5>
      <form className="card p-3" onSubmit={(e) => handleSubmitForm(e, userData, history)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name*</label>
          <input type="text" className="form-control mt-0" value={name} onChange={(e) => setUserName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Company*</label>
          <input type="text" className="form-control mt-0" value={company} onChange={(e) => setUserCompany(e.target.value)} id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> Email* </label>
          <input type="email" className="form-control mt-0" value={email} onChange={(e) => setUserEmail(e.target.value)} id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"> DOB </label>
          <input type="date" className="form-control mt-0" value={dob} onChange={(e) => setDob(e.target.value)} id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Salary </label>
          <input type="text" className="form-control mt-0" value={salary} onChange={(e) => setsSalary(e.target.value)} id="exampleInputPassword1" />
        </div>
        <button type="submit" className={`btn btn-info ml-0 p-0 ${!isValid ? 'disabled': ''}`}>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(Form)
