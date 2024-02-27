'use client';
import { Button } from '@mui/material';

const ComponentButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <Button className='outline' fullWidth onClick={onClick}>
      {name}
    </Button>
  );
};
export default ComponentButton;
