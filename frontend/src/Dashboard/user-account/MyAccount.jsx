import React, { useContext, useState } from 'react';
import { authContext } from '../../context/authContext';
import userImage from '../../assets/images/doctor-img01.png';
import MyBooking from './MyBooking';
import Profile from './Profile';
import useFetchData from '../../hooks/userFetchData';
import { BASE_URL } from '../../config'; // No need to import token directly here

import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
 

const MyAccount = () => {
  const { dispatch, token } = useContext(authContext); // Ensure token is from context
  const [tab, setTab] = useState('bookings');

  const { data: userData, loading, error } = useFetchData(`${BASE_URL}/users/profile/me`, token);
  console.log(token)
  console.log(userData ,"userdata");

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && <Loading />}
        {!loading && error && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                  <img src={userImage} alt="" className='w-full rounded-full' />
                </figure>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData?.name || 'HariKara Prasadh'}
                </h3>
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                  {userData?.email || 'example@gmail.com'}
                </p>  
                <p className='text-textColor text-[15px] leading-6 font-medium'>
                  Blood Type:
                  <span className='ml-2 text-headingColor text-[22px] leading-8'>
                    {userData?.bloodType || 'O-'}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout}>LogOut</button>
                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab('bookings')}
                  className={`${tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : ''} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Booking
                </button>
                <button
                  onClick={() => setTab('settings')}
                  className={`${tab === 'settings' ? 'bg-primaryColor text-white font-normal' : ''} p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Setting
                </button>
              </div>

              {tab === 'bookings' && <MyBooking />}
              {tab === 'settings' && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
