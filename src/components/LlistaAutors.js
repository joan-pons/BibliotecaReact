import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

export default function LlistaObres() {
    const [autors, setAutors] = useState([]);

    const llengua = useSelector((state) => state.llengua.value)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://52.178.39.51:8080/autors/perLlengua/' + llengua);
            const currentData = await response.json();
            setAutors(currentData);
        }
        fetchData();
    }, [llengua]);

    return (
        <div className="card card-body bg-light">
            <h2>Llista d'autors dels que tenim obres en llengua {llengua}</h2>
            {autors.length > 0 && <ul>
                {autors.map(autor => {
                    return (
                        <li>{autor.nomAut}</li>
                    )
                })}
            </ul>}
            {autors.length === 0 && <p>No hi ha autors amb obres en aquesta llengua</p>}
        </div>
    )
};