import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import SiderItem from './sider-tiem'

const Sider = () => {
  return (
    <Box width={56} className='bg-black/10 flex flex-col items-center'>
      <SiderItem href='/admin/page-manager' name='页面管理'></SiderItem>
      <SiderItem href='/admin/page-manager' name='域名管理'></SiderItem>
      <SiderItem href='/admin/page-manager' name='服务器管理'></SiderItem>
      <SiderItem href='/admin/page-detail' name='页面内容'></SiderItem>
    </Box>
  )
}

export default Sider
