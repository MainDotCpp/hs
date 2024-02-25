import { BaseComponentType } from '@/app/components/component'
import { Prisma } from '@prisma/client'
import { Button } from '@mui/material'
import Image from 'next/image'

type ImageComponent = {
  src: string
} & BaseComponentType

export const ImageBtn = () => {
  return <Button>图片</Button>
}
export const ImageComponent = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue
}) => {
  const schema = componentSchema as ImageComponent
  return <img src={schema.src} alt={'loading...'} className='w-full'></img>
}

export const ImageConfig = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue
}) => {
  const schema = componentSchema as ImageComponent
  return <div>{schema.src}</div>
}
