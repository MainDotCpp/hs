'use client'
import { Button } from '@mui/material'

const ComponentButton = ({
  name,
  initialValue,
}: {
  name: string
  initialValue: any
}) => {
  return (
    <Button className='outline' fullWidth>
      {name}
    </Button>
  )
}
export default ComponentButton
