import React from 'react';
import { BASE_URL } from '../../config';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import useFetchData from '../../hooks/userFetchData';

const MyBooking = () => {
  const {
    data: appointment = [], // Default to empty array if data is null or undefined
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  // Ensure appointment is always an array
  const safeAppointment = Array.isArray(appointment) ? appointment : [];

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}

      {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          {safeAppointment.length > 0 ? (
            safeAppointment.map(doctor => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))
          ) : (
            <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>
              You did not book any doctor yet!
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
