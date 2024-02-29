import { BaseComponentType } from '@/app/components/component';
import { Prisma } from '@prisma/client';
import { usePageStore } from '@/app/store/use-page-store';
import { logClick } from '@/app/actions/page-actions';
import { useParams } from 'next/navigation';
import {
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { components } from '@/constants/components';
import { UploadFile } from 'antd';
import { uploadConvert } from '@/utils/convert-utils';

let initialValue = components.find((it) => it.initialValue.type === 'image')!!
  .initialValue;
type ImageComponent = Partial<typeof initialValue>;

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
        maxWidth: '444px',
        paddingLeft: schema.padding_x,
        paddingRight: schema.padding_x,
        paddingTop: schema.padding_y,
        paddingBottom: schema.padding_y,
        position: schema.position,
        top: schema.top,
        bottom: schema.bottom,
      }}>
      <img
        src={schema.src.at(0)!!}
        alt={'loading...'}
        className={`w-full   ${schema.link && 'cursor-pointer'}`}
        onClick={() => {
          if (schema.link && params.id) {
            logClick(params.id as string).then();
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
        size='small'
        grid
        onValuesChange={onSubmit}
        initialValues={{ ...initialValue, ...schema }}
        submitter={false}>
        <ProFormUploadButton
          action='/api/file'
          name='src'
          max={1}
          label='图片'
          {...uploadConvert({ name: 'src' })}>
          上传图片
        </ProFormUploadButton>
        <ProFormText name='type' hidden></ProFormText>
        <ProFormSelect
          name='position'
          colProps={{ span: 8 }}
          label='定位方式'
          valueEnum={{
            static: '静态',
            sticky: '浮动',
            fixed: '固定',
          }}></ProFormSelect>
        <ProFormDependency name={['position']}>
          {({ position }) => {
            return (
              <>
                <ProFormDigit
                  hidden={position === 'static'}
                  colProps={{ span: 8 }}
                  label='距离上方'
                  name='top'></ProFormDigit>
                <ProFormDigit
                  hidden={position === 'static'}
                  colProps={{ span: 8 }}
                  label='距离上方'
                  name='bottom'></ProFormDigit>
              </>
            );
          }}
        </ProFormDependency>
        <ProFormDigit
          colProps={{ span: 12 }}
          name='padding_x'
          label='左右边距'></ProFormDigit>
        <ProFormDigit
          colProps={{ span: 12 }}
          name='padding_y'
          label='上下边距'></ProFormDigit>
        <ProFormText name='link' label='点击跳转地址'></ProFormText>
      </ProForm>
    </div>
  );
};
