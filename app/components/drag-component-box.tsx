import { Box, Chip } from '@mui/material'
import { Prisma } from '@prisma/client'
import { switchComponent } from '@/app/components/page-render'

const DragComponentBox = ({
  item,
  inx,
}: {
  item: Prisma.JsonValue
  inx: number
}) => {
  return (
    <Box key={inx} position='relative' padding={0} className='group'>
      <Box position='absolute' right={'calc(100% + 8px)'} height={30}>
        <Chip color='primary' label={'图片'} size='small'></Chip>
      </Box>
      {switchComponent(item as Prisma.JsonObject)}
    </Box>
  )
}

export default DragComponentBox
