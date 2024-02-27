import { Box, Chip, Divider, IconButton } from '@mui/material';
import { Prisma } from '@prisma/client';
import { switchComponent } from '@/app/components/page-render';
import { usePageStore } from '@/app/store/use-page-store';
import EditIcon from '@material-ui/icons/Edit';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Draft from 'draft-js';
import Components = Draft.Component.Components;
import { components } from '@/constants/components';
const DragComponentBox = ({
  item,
  inx,
}: {
  item: Prisma.JsonValue;
  inx: number;
}) => {
  const currentIndex = usePageStore((state) => state.currentIndex);
  const setCurrentIndex = usePageStore((state) => state.setCurrentIndex);
  const removeComponent = usePageStore((state) => state.removeComponent);
  return (
    <Box
      key={inx}
      position='relative'
      padding={0}
      className='group'
      border={'1px'}>
      <div className='absolute left-[calc(100%+8px)] flex items-center'>
        <Chip
          className={`text-white ${currentIndex === inx ? 'bg-blue-500' : 'bg-black/50'}`}
          label={
            components.find((it) => it.initialValue.type === item['type'])?.name
          }
          size='small'></Chip>
        <IconButton onClick={() => setCurrentIndex(inx)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeComponent(inx)}>
          <DeleteForeverIcon color='error' />
        </IconButton>
      </div>
      {switchComponent(item as Prisma.JsonObject)}
    </Box>
  );
};

export default DragComponentBox;
