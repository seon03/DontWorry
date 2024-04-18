import React from 'react';
import '../../styles = css/AccordionItems.css';
import AccordionHeader from './AccordionHeader';
import Accordion from './Accordion';

const AccordionItems = () => {

  return (
    <div className="container">
          <AccordionHeader />
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