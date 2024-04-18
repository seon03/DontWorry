// Accordion.jsx
import React from 'react';
import AccordionItem from "./AccordionItem";
import { useScheduleContext } from '../../contexts/ScheduleContext';
import { ScheduleProvider } from '../../contexts/ScheduleContext';

const Accordion = () => {
    const { accordionData } = useScheduleContext();
    const [posts, setPosts] = useState([]);
    const [acc, setAcc] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/schedule')
        .then((res) => res.json())
        .then((res) => {setPosts(res)});
    }, [posts]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/accountbook')
        .then((res) => res.json())
        .then((res) => {setAcc(res)});
    }, [acc]);

    return (
        <ScheduleProvider>
            <ul className="accordion">
                {acc.map((acc) => (
                    <AccordionItem key={acc.schedule} schedule={acc.title} expesne={acc.cost} />
                ))}
                {posts.map((post) => (
                    <AccordionItem schedule={post.title} />
                ))}
                {accordionData.map((data, index) => (
                    <AccordionItem key={index} schedule={data.schedule_name} expected={data.prediction_result} income={data.income} expense={data.expense} details={data.details}/>
                ))}
            </ul>
        </ScheduleProvider>
    );
};

export default Accordion;


/* 백엔드에서 가져오기
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Accordian = () => {
    const [scacs, setHello] = useState('');

    useEffect(() => {
        axios.get('?')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <ul className="accordion">
            //백엔드에서 가져온 데이터
            {scacs.map((scac, index) => (
                <AccordionItem key={index} scac={scac} />
            ))}
            //flask에서 가져온 데이터
            {accordionData.map((data, index) => (
                    <AccordionItem key={index} schedule={data.schedule_name} expected={data.prediction_result} income={data.income} expense={data.expense} details={data.details}/>
            ))}
        </ul>
    );
}

export default Accordian;

*/