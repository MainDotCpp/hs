import { Box } from '@mui/material'
import Link from 'next/link'

const SiderItem = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href}>
      <Box
        alignContent='center'
        justifyContent='center'
        className='flex flex-col p-2'>
        <img src='https://fakeimg.pl/300/' width={56} height={56} />
        <Box className='text-xs text-center text-black/80'>{name}</Box>
      </Box>
    </Link>
  )
}

export default SiderItem
