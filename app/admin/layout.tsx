import Sider from './components/sider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '管理后台',
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='min-h-screen flex fixed top-0 w-screen'>
      <Sider></Sider>
      <div className='flex-grow px-8  py-4'>{children}</div>
    </main>
  );
};

export default AdminLayout;
