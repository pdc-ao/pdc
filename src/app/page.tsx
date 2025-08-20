// src/pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
      <>
        <Head>
          <title>Plataforma do Comerciante</title>
          <meta name="description" content="Conectando produtores, transportadores e distribuidores." />
        </Head>

        <main className="min-h-screen bg-gray-50 text-gray-800">
          <section className="text-center py-16 px-4">
            <h1 className="text-4xl font-bold mb-4">Plataforma do Comerciante</h1>
            <p className="text-lg mb-6">
              Conectando <strong>produtores</strong>, <strong>transportadores</strong>, <strong>armazenadores</strong> e <strong>distribuidores</strong> em uma rede transparente e eficiente.
            </p>
            <a href="#roles" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Começar
            </a>
          </section>

          <section id="roles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12">
            {['Produtor', 'Transportador', 'Armazenador','Transformador','Distribuidor'].map((role) => (
                <div key={role} className="bg-white shadow p-6 rounded text-center">
                  <h2 className="text-xl font-semibold mb-2">{role}</h2>
                  <p className="text-sm text-gray-600">Cadastre-se e conecte-se com parceiros da cadeia de suprimentos.</p>
                </div>
            ))}
          </section>
        </main>
      </>
  );
}
