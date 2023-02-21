import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Add() {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    const onChangeValue = (e) => {
        setName(e.target.value)
    }



    const newStudents = (event) => {
        event.preventDefault();
        const url = "http://localhost:8009/students"
        fetch(url, {
            method: 'POST',
            body : JSON.stringify({
                name : name
            }), 
            headers : new Headers({'content-type' : 'application/json'})
        }).then(res => {
            navigate('/', { replace: true })
        })
    }

    return (
        <div className=''>
            <h1>Add Students</h1>
            <form onSubmit={newStudents}>
            <input type="text" placeholder='name' onChange={onChangeValue} value={name} />
            <button>Send</button>
            </form>
        </div>
    )
}

export default Add