import React, { useState, useRef } from 'react';
import Form from './Form';
import Card from './Card';


const Forehead = () => {
  const ref = useRef(null);
  const [dataEmployee, setDataEmployee] = useState([]);

  // Function to handle adding new employee data
  const dataHandler = (data) => {
    const updatedData = [...dataEmployee, data];
    setDataEmployee(updatedData);
  }

  // Function to handle deleting employee data
  const deleteHandler = (index) => {
    // Create a copy of the current employee data array
    const updatedData = [...dataEmployee];
    // Remove the employee data at the specified index
    updatedData.splice(index, 1);
    // Update the state with the updated data
    setDataEmployee(updatedData);
  }

  return (
    <> 
      <div ref={ref} className='relative flex h-screen'>
        <div className='z-[3] flex flex-col'>
          {/* Pass dataHandler and deleteHandler as props to Form */}
          <Form dataTaker={dataHandler} />
          {/* Pass dataEmployee, reference, and deleteHandler as props to Card */}
          <Card data={dataEmployee} reference={ref} deleteHandler={deleteHandler} />
        </div>
      </div>
    </>
  )
}

export default Forehead;

