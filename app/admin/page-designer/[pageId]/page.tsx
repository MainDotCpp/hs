'use client';
import PageRender from '@/app/components/page-render';
import {
  Alert,
  Box,
  Divider,
  Grow,
  Paper,
  Snackbar,
  Typography,
} from '@mui/material';
import ComponentButton from '@/app/admin/page-designer/[pageId]/components/component-button';
import { components } from '@/constants/components';
import { usePageStore } from '@/app/store/use-page-store';
import { useBoolean, useRequest } from 'ahooks';
import ComponentConfigArea from '@/app/admin/page-designer/[pageId]/components/component-config-area';

const PageDesigner = ({
  params: { pageId },
}: {
  params: { pageId: string };
}) => {
  const [messageOpen, { setFalse: closeMessage, setTrue: openMessage }] =
    useBoolean();
  const addComponents = usePageStore((state) => state.addComponents);
  const { run: savePage } = useRequest(
    usePageStore((state) => state.savePage),
    {
      manual: true,
      onSuccess: () => {
        openMessage();
      },
    },
  );
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={messageOpen}
        onClose={closeMessage}
        autoHideDuration={1000}
        message='保存成功'></Snackbar>
      <Paper className='flex h-full overflow-clip p-2 divide-x'>
        <Box className='component-list w-40'>
          <Typography variant='h5' paddingLeft={2}>
            组件库
          </Typography>
          <Divider />
          {components.map((component, inx) => {
            return (
              <ComponentButton
                key={inx}
                {...component}
                onClick={() => {
                  addComponents(components[inx]['initialValue']);
                }}></ComponentButton>
            );
          })}
        </Box>
        <div className='preview flex-grow h-full flex flex-col'>
          <div className='preview__header'>
            <Typography variant='h5' paddingLeft={2} display='inline'>
              预览
            </Typography>
            <a target='_blank' href={'/page/' + pageId}>
              <Typography display='inline' color='primary' paddingLeft={1}>
                新标签打开
              </Typography>
            </a>
            <Typography
              className='cursor-pointer'
              display='inline'
              color='primary'
              paddingLeft={1}
              onClick={savePage}>
              保存页面
            </Typography>
          </div>
          <Divider />
          <Box className='overflow-y-auto flex-grow h-80'>
            <PageRender pageId={pageId} mode='edit' />
          </Box>
        </div>
        <div className='config w-[400px]'>
          <Typography variant='h5' paddingLeft={2}>
            设置
          </Typography>
          <Divider />
          <ComponentConfigArea />
        </div>
      </Paper>
    </>
  );
};

// @ts-ignore
export default PageDesigner;
