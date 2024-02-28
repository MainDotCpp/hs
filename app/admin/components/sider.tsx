import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SiderItem from './sider-tiem';

const Sider = () => {
  return (
    <Box
      width={56}
      className='bg-black/10 flex flex-col items-center gap-8 py-8'>
      <SiderItem
        href='/admin/page-manager'
        name='页面管理'
        icon='/static/home.png'></SiderItem>
      <SiderItem
        href='/admin/domain'
        name='域名管理'
        icon='/static/domain.png'></SiderItem>
      <SiderItem
        href='/admin/page-manager'
        name='服务器管理'
        icon='/static/sever.png'></SiderItem>
    </Box>
  );
};

export default Sider;
