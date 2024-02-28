import Image from 'next/image';

export default function Home({ params: { id } }: { params: { id: string } }) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>正常页面 {id}</div>
    </main>
  );
}
