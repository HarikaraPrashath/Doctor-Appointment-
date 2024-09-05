
const Error =({errorMessage})=>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-headingColor text-[20px] leading-[30PX] font-semibold ">
                {errorMessage}
            </div>
        </div>
    )
}

export default Error;