import React from "react";
import { withRouter } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'

function View({ viewData, history }) {
    const handleViewBack = () => {
        history.push('/')
    }
    return (
        <div>
            <div className="my-2">
                <h5>Name</h5>
                <label>{viewData.name}</label>
            </div>
            <div className="my-2">
                <h5>Company</h5>
                <label>{viewData.company}</label>
            </div>
            <div className="my-2">
                <h5>Salary</h5>
                <label>{viewData.salary}</label>
            </div>
            <div className="my-2">
                <h5>Email</h5>
                <label>{viewData.email}</label>
            </div>
            <div className="my-2">
                <h5>DOB</h5>
                <label>{viewData.dob}</label>
            </div>
            <button className="my-2" type="button" onClick={handleViewBack}><BiArrowBack/>Back</button>
        </div>
    );
}

export default withRouter(View);
