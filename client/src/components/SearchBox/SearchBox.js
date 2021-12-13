import React from 'react'

export default function SearchBox({ onChange }) {
    return (
        <div className='w-75'>
            <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Search</label>
                <div> 
                    <input type="text" className="form-control w-50 mt-0" onChange={onChange} />
                </div>
            </div>
        </div>
    )
}
