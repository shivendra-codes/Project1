import React from 'react';
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const Card = ({ data, reference, deleteHandler }) => {
  return (
    <>
      {data.map((userData, index) => (
        <motion.div drag dragConstraints={reference} key={index} className="max-w-sm bg-red-100 rounded-lg overflow-hidden shadow-lg mx-auto my-4">
          <div className="px-6 py-4">
            <div className="text-red-500 font-bold text-xl mb-2">Employee Details : {index + 1} </div>
            <p className="text-gray-600 text-base">
              <strong>Name:</strong> {userData.name}
            </p>
            <p className="text-gray-600 text-base">
              <strong>Salary:</strong> {userData.salary}
            </p>
            <p className="text-gray-600 text-base">
              <strong>Profile:</strong> {userData.profile}
            </p>
            <div className="flex justify-end">
              <button onClick={() => deleteHandler(index)}><RxCross1 /></button>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Card;

