import React, {useState, useEffect} from 'react';
import './App.css'
import {getList} from './services/list'

export default function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])
    let ships = []

    for (let i in list.ships) {
        ships.push(list.ships[i])
    }

    return(
        <div className="wrapper">
            <h1>My Grocery List</h1>
            <ul>
                {list.name}
                {list.details}
                {ships[0]}
            </ul>
        </div>
    )
}


