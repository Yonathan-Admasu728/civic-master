import React from 'react';

const ValuePropCard = ({ title, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col text-center m-4 hover:shadow-lg transition-shadow duration-300 ease-in-out hover:-translate-y-1 transform transition">
      <h3 className={`text-lg font-semibold ${color} p-2`}>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default ValuePropCard;
