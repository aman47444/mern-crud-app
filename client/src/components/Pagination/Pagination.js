import React from 'react'
import './style.css'
// import { GrLinkNext } from 'react-icons/gr'
// import { GrLinkPrevious } from 'react-icons/gr'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    Link
  } from "react-router-dom";
import SearchBox from '../SearchBox/SearchBox';

export default function Pagination(props) {

    const { data, Component, handleDelete, handleEdit, isFetch, handleViewUser, onChangeHandle } = props
    const getId = (id) => {
        handleDelete(id)
    }

    if (!isFetch) return ( <div className="text-center my-5"><Loader type="Oval" color="#000066" secondaryColor="#00ccff" height={50} width={50} timeout={10000} visible={true} /></div>)
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <SearchBox onChange={onChangeHandle} />
                <div><Link to="/create" className="createUser">Create User</Link></div>
            </div>
            <div className="dataContainer mt-3">
                <Component data={data} getId={getId} handleEdit={handleEdit} handleViewUser={handleViewUser} />
            </div>
            {/* <div className="pagination my-3">
                <button className={`btn btn-info ${page === 1 || data.length < limit ? 'disabled' : ''} `} onClick={() => prevButton(page - 1)}><GrLinkPrevious style={{fontSize: '25px', marginTop: '-10px'}} /></button>
                 <div><input className="inputBox" type="number" value={page} onChange={(e) => selectPage(e.target.value)} /></div>   
                <button className={`btn btn-info ${page === pages || data.length < limit ? 'disabled' : ''} `}  onClick={() => nextButton(page + 1)}><GrLinkNext style={{fontSize: '25px', marginTop: '-10px'}}/></button>
            </div> */}
        </div>
    )
}
