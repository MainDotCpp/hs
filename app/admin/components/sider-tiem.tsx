import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const SiderItem = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: string;
}) => {
  return (
    <Link href={href}>
      <div className='flex flex-col items-center gap-2'>
        <Image src={icon} width={24} height={24} alt='' />
        <Box className='text-xs text-center text-black/50'>{name}</Box>
      </div>
    </Link>
  );
};

export default SiderItem;
