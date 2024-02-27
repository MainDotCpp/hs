'use client';
import {
  Card,
  CardActions,
  CardHeader,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { t_page } from '@prisma/client';
import {
  BarChart,
  Edit,
  Favorite as FavoriteIcon,
  Subject,
} from '@material-ui/icons';
import Link from 'next/link';

const PageCard = ({ page }: { page: t_page }) => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant={'h5'}>{page.title}</Typography>}
        subheader={
          <>
            <div>访问量: {page.access_count} 次</div>
            <div>阻止进入: {page.ban_count} 次</div>
          </>
        }></CardHeader>
      <CardActions>
        <Link href={'/admin/page-designer/' + page.id}>
          <IconButton>
            <Edit />
          </IconButton>
        </Link>
        <IconButton>
          <Subject />
        </IconButton>
        <IconButton>
          <BarChart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PageCard;
