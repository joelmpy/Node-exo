import React from 'react'
import Add from './add'
import { useState, useEffect } from 'react'

function Home() {

    const [list, setList] = useState([])

    useEffect(() => {
        Items()
    }, [])

    const Items = () => {
        const url = "http://localhost:8009/students"
        fetch(url)
            .then((reponse) => reponse.json())
            .then((res) => {
                setList(res)
            })
    }

    return (
        <div className='container'>
            <div className="container-left">
                {
                    list.map((students) => {
                        return (
                            <ul>
                                <li>{students}</li>
                            </ul>
                        )
                    })
                }

            </div>
            <div className="container-right">
                <Add />
            </div>
        </div>
    )
}

export default Home