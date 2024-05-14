import React, { useState } from 'react';

const Form = ({dataTaker}) => {
  const[name,setName]= useState("");
  const[profile,setProfile]= useState("");
  const[salary,setSalary]= useState("");
 

    const nameHandler = (e) => {
      setName(e.target.value);
    };
    const profileHandler = (e) => {
        setProfile(e.target.value);
     };
    const salaryHandler = (e) => { 
        setSalary(e.target.value);
    };

    const onSubmitHandler = (e) => { 
        e.preventDefault();

        const data = {
            name: name,
            profile: profile ,
            salary :  salary
        }
           
         dataTaker(data);

        setName("");
        setProfile("");
        setSalary("");
              

       
    };

    return (
        <div className="max-w-md mx-auto bg-grey-100 rounded-lg shadow-lg p-6">
            <form className="flex flex-wrap justify-between" onSubmit={onSubmitHandler}>
                <div className="w-full md:w-1/3 mb-4">
                    <label htmlFor="name" className="block text-red-100 font-bold mb-2">Name:</label>
                    <input type="text" id="name" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value ={name} onChange={nameHandler} />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                    <label htmlFor="profile" className="block text-red-100 font-bold mb-2">Profile:</label>
                    <input type="text" id="profile" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value ={profile} onChange={profileHandler} />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                    <label htmlFor="salary" className="block text-red-100 font-bold mb-2">Salary:</label>
                    <input type="number" id="salary" className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value ={salary} onChange={salaryHandler}
                     min="0" 
                     max="1000000000000" />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Employee</button>
            </form>
        </div>
    );
}

export default Form;



