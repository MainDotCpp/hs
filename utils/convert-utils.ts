import { UploadFile } from 'antd';

export const uploadConvert = ({ name }: { name: string }) => {
  return {
    transform: (v: (string | any)[]) => {
      for (let i = 0; i < v.length; i++) {
        if (typeof v[i] === 'object' && v[i].status === 'done') {
          v[i] = v[i].response.path;
        }
      }
      return { [name]: v };
    },
    convertValue: (v: string[] | any[]) => {
      if (Array.isArray(v) && v.length > 0) {
        for (let item of v) {
          if (typeof item === 'string') {
            item = [
              {
                uid: item,
                url: item,
                fileName: item.split('/').pop(),
                response: { path: item },
                thumbUrl: item,
              } as UploadFile,
            ];
          }
        }
      }
      return v;
    },
  };
};
