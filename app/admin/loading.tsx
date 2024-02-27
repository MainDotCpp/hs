import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <CircularProgress />
    </div>
  );
};

export default Loading;
