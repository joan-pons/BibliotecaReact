import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {assigna} from '../features/llengua/llenguaSlice'
import {Row, Col} from "react-bootstrap";

export default function Llengues() {
    const [llengues, setLlengues] = useState([]);
    // const [llengua, setLlengua] = useState([]);
    const llengua = useSelector((state) => state.llengua.value)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://52.178.39.51:8080/llengues');
            const currentData = await response.json();
            setLlengues(currentData);
        }
        fetchData();
    }, []);

    return (
        <div className="card card-body bg-light">
            <Row>
                <h2>Tria la llengua que vol utilitzar</h2>
            </Row>
            <Row>
                <Col>
                    <select className="form-select-lg" onChange={(e) => dispatch(assigna(e.target.value))}>
                        <option> -- Tria una llengua --</option>
                        {llengues.map(llengua => {
                            return (
                                <option value={llengua.llengua}>{llengua.llengua}</option>
                            )
                        })}
                    </select>
                </Col>
            </Row>
        </div>
    )
};