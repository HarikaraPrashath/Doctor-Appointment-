import React from 'react'
import { FormateData } from '../../Utils/FormateDate'


const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
            </h3>
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                Mhuirbar Rahuman
            </span>
            <p className='text_para'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Repellendus atque deleniti quos, voluptates molestiae quo nihil illum 
                ducimus fugiat cupiditate magni, similique assumenda iure! Id autem 
                quidem ut nemo enim.
            </p>
        </div>
        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {FormateData('12-03-2010')} - {FormateData('12-07-2014')}
                        </span>
                        <p className='text-[15px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>

                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital,New York.
                    </p>
                </li>


                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {FormateData('12-07-2019')} - {FormateData('12-07-2023')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Master is Surgeon
                        </p>

                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Medice Hospital,New City.
                    </p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>

            <ul  className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4  rounded  bg-[#fff9ea] '>
                    <span className='text-yellowColor text-[16px] leading-6 font-semibold'>
                    {FormateData('12-07-2014')} - {FormateData('12-07-2019')} 
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr.Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Medice Hospital,New City.
                    </p>  

                    <li className='p-4  rounded  bg-[#fff9ea] '>
                    <span className='text-yellowColor text-[16px] leading-6 font-semibold'>
                    {FormateData('12-07-2014')} - {FormateData('12-07-2019')} 
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr.Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Medice Hospital,New City.
                    </p>  
                </li>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout