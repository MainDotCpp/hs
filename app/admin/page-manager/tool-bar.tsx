'use client';
import { IconButton } from '@mui/material';
import { Add } from '@material-ui/icons';
import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { createPage } from '@/app/actions/page-actions';
import { useRequest } from 'ahooks';

const ToolBar = () => {
  const onCreatePage = async (formData: any) => {
    console.log(formData);
    await createPage(formData);
    return true;
  };

  useRequest(async () => {
    await fetch('/api/file', {
      method: 'POST',
    });
  });
  return (
    <>
      <div className='h-16 bg-white/70 rounded-full mb-4 flex  items-center px-2 gap-2'>
        <ModalForm
          title='创建页面'
          onFinish={onCreatePage}
          trigger={
            <IconButton>
              <Add />
            </IconButton>
          }>
          <ProFormText label='页面名称' name='title'></ProFormText>
        </ModalForm>
      </div>
    </>
  );
};

export default ToolBar;
