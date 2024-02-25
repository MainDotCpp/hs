'use client'
import { Prisma } from '@prisma/client'
import { CircularProgress, Container } from '@mui/material'
import { ImageComponent } from '@/app/components/image-component'
import { useRequest } from 'ahooks'
import { getPage } from '@/app/admin/page-designer/[pageId]/action'
import { usePageStore } from '@/app/store/use-page-store'
import DragComponentBox from './drag-component-box'

/**
 * 选择渲染的组件
 * @param item
 */
export const switchComponent = (item: Prisma.JsonObject) => {
  switch (item['type']) {
    case 'image':
      return <ImageComponent componentSchema={item}></ImageComponent>
  }
  return <div>{JSON.stringify(item)}</div>
}

const PageRender = ({
  pageId,
  mode = 'show',
}: {
  pageId: string
  mode?: 'edit' | 'show'
}) => {
  const page = usePageStore((state) => state.page)
  const setPage = usePageStore((state) => state.setPage)
  const { loading, error } = useRequest(() => getPage(pageId), {
    onSuccess: (page) => {
      if (page) {
        document.title = page.title || document.title
        setPage(page)
      }
    },
  })
  let schema = page?.content as Prisma.JsonArray
  return (
    <>
      <Container disableGutters maxWidth={'xs'}>
        {loading && (
          <div className='h-screen flex justify-center items-center'>
            <CircularProgress color='inherit' />
          </div>
        )}
        {schema?.map((item, inx) => {
          if (mode === 'edit')
            return <DragComponentBox item={item} inx={inx}></DragComponentBox>
          return switchComponent(item as Prisma.JsonObject)
        })}
      </Container>
    </>
  )
}

export default PageRender
