import { BaseComponentType } from '@/app/components/component';
import { Prisma } from '@prisma/client';
import { Button, Grid, Input, InputLabel, Slider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { usePageStore } from '@/app/store/use-page-store';
import { logClick } from '@/app/actions/page-actions';
import { useParams, useRouter } from 'next/navigation';
import {
  ProForm,
  ProFormDigit,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';

type ImageComponent = {
  src: string;
  padding_x: number;
  padding_y: number;
  shadow_level: number;
  link: string;
} & BaseComponentType;

const shadowMap = {
  0: '',
  1: 'xs',
  2: 'md',
  3: 'xl',
  4: '2xl',
  5: '3xl',
};

export const ImageComponent = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const params = useParams();
  const schema = componentSchema as ImageComponent;
  return (
    <div
      style={{
        paddingLeft: schema.padding_x / 1,
        paddingRight: schema.padding_x / 1,
        paddingTop: schema.padding_y / 1,
        paddingBottom: schema.padding_y / 1,
      }}>
      <img
        src={schema.src}
        alt={'loading...'}
        className={`w-full shadow-${shadowMap[schema.shadow_level]}  ${schema.link && 'cursor-pointer'}`}
        onClick={() => {
          if (schema.link) {
            logClick(params.id).then();
            window.open(schema.link);
          }
        }}></img>
    </div>
  );
};

export const ImageConfig = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const schema = componentSchema as ImageComponent;
  const saveComponent = usePageStore((state) => state.saveComponent);
  const onSubmit = async (values: any) => {
    saveComponent({ ...schema, ...values });
  };
  return (
    <div key={schema.src}>
      <ProForm
        onValuesChange={onSubmit}
        initialValues={schema}
        submitter={false}>
        <ProFormUploadButton
          action='/api/file'
          onChange={(info) => {
            if (info.file.status === 'done') {
              onSubmit({ src: info.file.response.path }).then();
            }
          }}
          name='src'>
          上传图片
        </ProFormUploadButton>
        <ProFormText name='type' hidden></ProFormText>
        <ProFormDigit name='padding_x' label='左右边距'></ProFormDigit>
        <ProFormDigit name='padding_y' label='上下边距'></ProFormDigit>
        <ProFormText name='link' label='点击跳转地址'></ProFormText>
      </ProForm>
    </div>
  );
};
