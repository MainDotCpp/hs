import { BaseComponentType } from '@/app/components/component';
import { Prisma } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { usePageStore } from '@/app/store/use-page-store';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

type DraftComponent = {
  content: string;
} & BaseComponentType;

export const DraftComponent = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const schema = componentSchema as DraftComponent;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: schema.content }}></div>
    </>
  );
};

export const DraftConfig = ({
  componentSchema,
}: {
  componentSchema: Prisma.JsonValue;
}) => {
  const schema = usePageStore((state) => state.currentComponent);
  const saveComponent = usePageStore((state) => state.saveComponent);
  const onSubmit = (content: any) => {
    saveComponent({
      ...schema,
      type: 'draft',
      content: content,
    });
  };
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={schema.content}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction

            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ['clean'], // remove formatting button
          ],
        }}
        onChange={onSubmit}></ReactQuill>
    </div>
  );
};
