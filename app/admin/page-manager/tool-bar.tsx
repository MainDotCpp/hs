'use client';
import { IconButton } from '@mui/material';
import { Add, Edit, PlusOneOutlined } from '@material-ui/icons';

const ToolBar = () => {
  return (
    <div className='h-16 bg-white/70 rounded-full mb-4 flex  items-center px-2 gap-2'>
      <IconButton>
        <Add />
      </IconButton>
    </div>
  );
};

export default ToolBar;
