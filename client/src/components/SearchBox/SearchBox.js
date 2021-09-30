import React from 'react'

export default function SearchBox() {
    return (
        <div>
            <div className="my-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Search</label>
                <div className="d-flex align-items-center">
                    <input type="text" className="form-control w-50 mt-0" />
                </div>
            </div>
        </div>
    )
}
