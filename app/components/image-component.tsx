import { BaseComponentType } from '@/app/components/component';
import { Prisma } from '@prisma/client';
import { Button, Grid, Input, InputLabel, Slider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { usePageStore } from '@/app/store/use-page-store';
import { logClick } from '@/app/actions/page-actions';
import { useParams, useRouter } from 'next/navigation';

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
  const { handleSubmit, register, setValue } = useForm();
  const saveComponent = usePageStore((state) => state.saveComponent);
  const onSubmit = (values: any) => {
    console.log(values);
    saveComponent(values);
  };
  useEffect(() => {
    setValue('src', schema.src);
    setValue('padding_x', schema.padding_x);
    setValue('padding_y', schema.padding_y);
    setValue('shadow_level', schema.shadow_level);
    setValue('link', schema.link);
  }, [schema]);
  return (
    <div key={schema.src}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={1}>
          <Input
            {...register('type')}
            defaultValue='image'
            className='hidden'
            fullWidth></Input>
          <Grid md={12}>
            <InputLabel>图片地址</InputLabel>
            <Input
              {...register('src')}
              defaultValue={schema.src}
              fullWidth></Input>
          </Grid>
          <Grid md={6}>
            <InputLabel>左右边距</InputLabel>
            <Input
              {...register('padding_x')}
              defaultValue={0}
              fullWidth></Input>
          </Grid>
          <Grid md={5}>
            <InputLabel>上下边距</InputLabel>
            <Input
              {...register('padding_y')}
              defaultValue={0}
              fullWidth></Input>
          </Grid>
          <Grid md={12}>
            <InputLabel>阴影</InputLabel>
            <Slider
              {...register('shadow_level')}
              defaultValue={0}
              valueLabelDisplay='auto'
              step={1}
              marks
              min={0}
              max={5}
            />
          </Grid>
          <Grid md={12}>
            <InputLabel>点击图片跳转地址</InputLabel>
            <Input {...register('link')} fullWidth></Input>
          </Grid>
          <Button type='submit' fullWidth variant='outlined'>
            保存
          </Button>
        </Grid>
      </form>
    </div>
  );
};
