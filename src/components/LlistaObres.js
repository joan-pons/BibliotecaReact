import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function LlistaObres() {
    const [obres, setObres] = useState([]);

    const llengua = useSelector((state) => state.llengua.value)

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('http://52.178.39.51:8080/llibres/perLlengua/' + llengua);
                const currentData = await response.json();
                setObres(currentData);
            }
            fetchData();
        }, [llengua]);

    return (
        <div className="card card-body bg-light">
            <h2>Llista d'obres en llengua {llengua}</h2>
            {obres.length>0 && <ul>
                { obres.map(obra => {
                    return (
                        <li>{obra.titol}</li>
                    )
                })}
            </ul>}
            {obres.length===0 && <p>No hi ha obres en aquesta llengua</p>}
        </div>
    )
};