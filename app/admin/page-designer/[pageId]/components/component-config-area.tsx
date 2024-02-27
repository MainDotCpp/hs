// @ts-nocheck
import { usePageStore } from '@/app/store/use-page-store';
import { switchComponentConfig } from '@/app/components/page-render';

const ComponentConfigArea = () => {
  const currentComponent = usePageStore((state) => state.currentComponent);
  if (!currentComponent) return <div>请选择一个组件</div>;
  return <div className='p-8'>{switchComponentConfig(currentComponent)}</div>;
};

export default ComponentConfigArea;
