// Accordion.jsx
import React , { useEffect, useState } from 'react';
import AccordionItem from "./AccordionItem";
import { useScheduleContext } from '../../contexts/ScheduleContext';
import { ScheduleProvider } from '../../contexts/ScheduleContext';

const Accordion = () => {
    const { accordionData } = useScheduleContext();
    const [main, setMains] = useState([]);
    const [posts, setPosts] = useState([]);
    const [acc, setAcc] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/main')
        .then((res) => res.json())
        .then((res) => {setMains(res)});
    }, [main]);

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
                {/*백엔드에서 가져온 데이터*/}
                {main.map((main) => (
                    <AccordionItem key={main.scheduleId} schedule={main.title} income={main.income} expesne={main.expense} />
                ))}
                {acc.map((acc) => (
                    <AccordionItem key={acc.schedule} schedule={acc.title} expesne={acc.cost} />
                ))}
                {posts.map((post) => (
                    <AccordionItem schedule={post.title} />
                ))}

                {/*flask예산예측에서 가져온 데이터*/}
                {accordionData.map((data, index) => (
                    <AccordionItem key={index} schedule={data.schedule_name} expected={data.prediction_result} income={data.income} expense={data.expense} details={data.details}/>
                ))}
            </ul>
        </ScheduleProvider>
    );
};

export default Accordion;

