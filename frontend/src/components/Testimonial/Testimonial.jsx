import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import patientAvatar from '../../assets/images/patient-avatar.png';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper 
        modules={[Pagination]} 
        spaceBetween={30} 
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-lg'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahuman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-gray-700 font-normal'>
              "I have taken medical service from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-lg'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahuman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-gray-700 font-normal'>
              "I have taken medical service from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-lg'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahuman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-gray-700 font-normal'>
              "I have taken medical service from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-lg'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Muhibur Rahuman
                </h4>
                <div className='flex items-center gap-[2px]'>
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                  <HiStar className="text-yellow-500 w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-gray-700 font-normal'>
              "I have taken medical service from them. They treat so well and they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default Testimonial;
