import { PrismaClient } from '@prisma/client'
import PageRender from '@/app/components/page-render'

const RealPage = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <PageRender pageId={id} />
    </main>
  )
}

export default RealPage
