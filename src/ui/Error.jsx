import {  useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';


function Error() {
  const error = useRouteError()
  return (
    <div className='flex flex-col items-center justify-center h-screen shadow-md max-w-[50%] mx-auto h-max bg-yellow-100 rounded-md p-2 leading-2 mt-12'>
      <h1 className='font-medium text-xl'>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to='-1'>&larr; Go back</LinkButton>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
    </div>
  );
}

export default Error;
