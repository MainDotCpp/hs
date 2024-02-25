'use client'
import PageRender from '@/app/components/page-render'
import { Box, Divider, Paper, Typography } from '@mui/material'
import ComponentButton from '@/app/admin/page-designer/[pageId]/components/component-button'
import { components } from '@/constants/components'

const PageDesigner = ({
  params: { pageId },
}: {
  params: { pageId: string }
}) => {
  return (
    <>
      <Paper className='flex h-full overflow-clip p-2 divide-x'>
        <Box className='component-list w-80 '>
          <Typography variant='h5' paddingLeft={2}>
            组件库
          </Typography>
          <Divider />
          {components.map((component, inx) => {
            return <ComponentButton key={inx} {...component}></ComponentButton>
          })}
        </Box>
        <div className='preview flex-grow h-full flex flex-col'>
          <div>
            <Typography variant='h5' paddingLeft={2} display='inline'>
              预览
            </Typography>
            <a target='_blank' href={'/page/' + pageId}>
              <Typography display='inline' color='primary' paddingLeft={1}>
                打开
              </Typography>
            </a>
          </div>
          <Divider />
          <Box className='overflow-y-auto flex-grow h-80'>
            <PageRender pageId={pageId} mode='edit' />
          </Box>
        </div>
        <div className='config w-80'>
          <Typography variant='h5' paddingLeft={2}>
            设置
          </Typography>
          <Divider />
        </div>
      </Paper>
    </>
  )
}

// @ts-ignore
export default PageDesigner
