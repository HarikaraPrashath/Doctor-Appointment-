import React from 'react';
import DoctorCard from './DoctorCard'; // Ensure the file name and import match
import { doctors } from '../../assets/data/doctors'; // Fixed import path

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
