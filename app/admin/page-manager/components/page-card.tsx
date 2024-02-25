'use client'
import {
  Card,
  CardActions,
  CardHeader,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material'
import { t_page } from '@prisma/client'
import { Favorite as FavoriteIcon } from '@material-ui/icons'
import Link from 'next/link'

const PageCard = ({ page }: { page: t_page }) => {
  return (
    <Card>
      <CardHeader
        title={<Typography>{page.title}</Typography>}
        subheader={
          <Typography>
            访问量:{page.access_count} 阻止进入:{page.ban_count}
          </Typography>
        }></CardHeader>
      <CardActions>
        <Link href={'/admin/page-designer/' + page.id}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  )
}

export default PageCard
