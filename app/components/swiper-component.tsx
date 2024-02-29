import { Prisma } from '@prisma/client';
import { usePageStore } from '@/app/store/use-page-store';
import { logClick } from '@/app/actions/page-actions';
import { useParams } from 'next/navigation';
import {
  ProForm,
  ProFormSwitch,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { components } from '@/constants/components';
import { Carousel } from 'antd';
import { uploadConvert } from '@/utils/convert-utils';

let initialValue = components.find((it) => it.initialValue.type === 'swiper')!!
  .initialValue;
type SwiperComponent = Partial<typeof initialValue>;

export const SwiperComponent = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const params = useParams();
  const schema = componentSchema as SwiperComponent;
  return (
    <div
      style={{
        maxWidth: '444px',
        paddingLeft: schema.padding_x,
        paddingRight: schema.padding_x,
        paddingTop: schema.padding_y,
        paddingBottom: schema.padding_y,
        position: schema.position,
        top: schema.top,
        bottom: schema.bottom,
      }}>
      <Carousel
        autoplay={schema.autoPlay}
        autoplaySpeed={schema.autoPlaySpeed}
        fade={schema.fade}
        infinite={schema.infinite}>
        {schema.images?.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} style={{ width: '100%', height: 'auto' }} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export const SwiperConfig = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const schema = componentSchema as SwiperComponent;
  const saveComponent = usePageStore((state) => state.saveComponent);
  const onSubmit = async (values: any) => {
    saveComponent({ ...schema, ...values });
  };
  return (
    <div>
      <ProForm
        size='small'
        grid
        onValuesChange={onSubmit}
        initialValues={{ ...initialValue, ...schema }}
        submitter={false}>
        <ProFormText name='type' hidden></ProFormText>
        <ProFormUploadButton
          name='images'
          action='/api/file'
          fieldProps={{
            multiple: true,
          }}
          max={10}
          {...uploadConvert({ name: 'images' })}>
          上传图片
        </ProFormUploadButton>
        <ProFormSwitch name='autoPlay' label='自动播放'></ProFormSwitch>
        <ProFormText
          name='autoPlaySpeed'
          label='自动播放速度'
          tooltip='单位：毫秒'></ProFormText>
        <ProFormSwitch name='fade' label='淡入淡出'></ProFormSwitch>
        <ProFormSwitch name='infinite' label='无限循环'></ProFormSwitch>
      </ProForm>
    </div>
  );
};
