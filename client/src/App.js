import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const [data, setData] = useState([])
    const [updateData, setUpdateData] = useState([])
    const [page, setPage] = useState(0)
    const [autoRefresh, setAutoRefresh] = useState(false)
    const [isFetch, setIsFetch] = useState(false)

    useEffect(() => {
        const apiData = async () => {
            await Axios.get('/api/users/user')
                .then(res => setData(res.data))
                .then(() => setIsFetch(true))
                .catch(err => console.log(err))
        }
        apiData();
        if(autoRefresh) {
            apiData();
            setAutoRefresh(false)
        }
    }, [autoRefresh])


    const handleSubmitForm = async (e, data, history) => {
        e.preventDefault()
        await Axios.post('/api/users/create-user', data)
            .then(res => { return console.log(res)})
            .then(() => history.push('/'))
            .then(() => setAutoRefresh(true))
            .then(setTimeout(() => {toast.success('Successfully Created')}, 2000))
            .catch(err => console.log(err))

    };

    const handleDelete = async (id) => {
        await Axios.delete(`/api/users/user/${id}`)
            .then(() => setAutoRefresh(true))
            .then(setTimeout(() => {toast.success('Successfully Deleted')},1000))
            .catch(err => console.log(err))
    }

    const handleEdit = (id, history) => {
        Axios.get(`/api/users/user/${id}`)
            .then(res => setUpdateData(res.data))
            .then(() => history.push(`/update-user/${id}`))
    }

    const handleView = (id) => {
        console.log(id)
    }

    const handleUpdateForm = async (data, id, history) => {
        console.log(data)
        try {

            const res = Axios.patch(`/api/users/user/${id}`, data)
            history.push('/')
            await setAutoRefresh(true)
            setTimeout(() => {
                toast.success('Successfully Updated')
            }, 2000)
            return res

        } catch(e) {
            return e
        }

    }

    const prevButton = (num) => {
        setPage(num)
    }

    const nextButton = (num) => {
        setPage(num)
    }

    const selectPage = (num) => {
        setPage(num)
    }

    return (
        <div className="container p-5">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Pagination
                            data={data}
                            Component={Table}
                            prevButton={prevButton}
                            nextButton={nextButton}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleView={handleView}
                            selectPage={selectPage}
                            page={page}
                            isFetch={isFetch}

                        />
                    </Route>
                    <Route path="/create">
                        <Form handleSubmitForm={handleSubmitForm} />
                    </Route>
                    <Route path="/update-user/:id">
                        <UpdateForm updateData={updateData} handleUpdateForm={handleUpdateForm}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default App;
