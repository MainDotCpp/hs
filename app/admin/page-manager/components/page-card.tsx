'use client';
import {
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { t_page } from '@prisma/client';
import { BarChart, Edit, Subject } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';

const PageCard = ({ page }: { page: t_page }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardHeader
        title={<Typography variant={'h5'}>{page.title}</Typography>}
        subheader={
          <>
            <div>访问量: {page.access_count} 次</div>
            <div>阻止进入: {page.ban_count} 次</div>
            <div>点击跳转链接: {page.click_link_count} 次</div>
          </>
        }></CardHeader>
      <CardActions>
        <Link href={'/admin/page-designer/' + page.id}>
          <IconButton>
            <Edit />
          </IconButton>
        </Link>
        <IconButton onClick={handleClick}>
          <Subject />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={handleClose}
            className='flex justify-between gap-2'>
            <div>zishi.xyz</div>
            <div className='text-black/50'>香港</div>
          </MenuItem>
        </Menu>
        <IconButton>
          <BarChart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PageCard;
