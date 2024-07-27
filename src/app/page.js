import Head from 'next/head';
import dynamic from 'next/dynamic';

const JitsiMeet = dynamic(() => import('./components/JitsiMeet'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jitsi Meet en Next.js</title>
        <meta name="description" content="Integración de Jitsi Meet en Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bienvenido a tu sala de videollamadas</h1>
        <JitsiMeet />
      </main>
    </div>
  );
}