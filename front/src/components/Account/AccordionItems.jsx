import React from 'react';
import '../../styles = css/AccordionItems.css';
import AccordionHeader from './AccordionHeader';
import Accordion from './Accordion';

const AccordionItems = () => {
  const [day, setDays] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/main')
        .then((res) => res.json())
        .then((res) => {setDays(res)});
    }, [day]);

  return (
    <div className="container">
          <AccordionHeader key={day.scheduleId} scheduleDate={scheduleDate}/>
          <Accordion />
    </div>
  );
}

export default AccordionItems;


/*
return (
    <div className="container">
      {scheduleData.map((schedule, index) => (
        <div key={index}>
          <AccordionHeader schedule={schedule} />
          <Accordion schedule={schedule} />
        </div>
      ))}
    </div>
  );
*/
