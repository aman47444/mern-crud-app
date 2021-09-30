import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { BsEyeFill } from 'react-icons/bs'
import { withRouter } from 'react-router-dom'

function Table(props) {
    const { data, getId, handleEdit, history, handleView } = props
    const iocnStyle = {
        fontSize: '25px',
        margin: '0px 5px',
        color: 'black'
    }

    return (
        <div>
            <table className="table table-hover table-bordered table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Company</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.company}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.salary}</td>
                                    {
                                        <td>
                                            <FiEdit type="button" style={iocnStyle} onClick={() => handleEdit(item._id, history)} />
                                            <RiDeleteBin6Line onClick={() => getId(item._id)} style={iocnStyle} type="button" />
                                            <BsEyeFill type="button" style={iocnStyle} onClick={() => handleView(item._id)} />
                                        </td>
                                    }
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td className="text-danger">No Data Added</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(Table)
