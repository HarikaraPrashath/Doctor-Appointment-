import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full' aria-label="Loading">
    <HashLoader color='#0067FF'/>
    </div>
  )
}

export default Loading