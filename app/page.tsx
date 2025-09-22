// src/pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
      <>
        <Head>
          <title>Plataforma do Comerciante</title>
          <meta name="description" content="Rede colaborativa para produtores, transportadores, armazenadores e distribuidores." />
        </Head>

        <main className="min-h-screen bg-gray-50 text-gray-800">
          <section className="text-center py-16 px-4">
            <h1 className="text-4xl font-bold mb-4">Plataforma do Comerciante</h1>
            <p className="text-lg mb-6">
              Conectando <strong>produtores</strong>, <strong>transportadores</strong>, <strong>transformador</strong>, <strong>armazenadores</strong> e <strong>distribuidores</strong> em uma rede transparente e eficiente.
            </p>
              <a
                  href="/auth"
                  className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              >
                  Começar agora
              </a>

          </section>

          <section id="roles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12">
            {['Produtor', 'Transportador','Transformador', 'Armazenador', 'Distribuidor'].map((papel) => (
                <div key={papel} className="bg-white shadow p-6 rounded text-center">
                  <h2 className="text-xl font-semibold mb-2">{papel}</h2>
                  <p className="text-sm text-gray-600">Cadastre-se e conecte-se com parceiros da cadeia de suprimentos.</p>
                </div>
            ))}
          </section>

          <section className="text-center py-16 px-4">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg mb-6">
                  informacao...
              </p>
          </section>

            <section className="py-16 px-4 bg-white">
                <h1 className="text-4xl font-bold mb-4 text-center">Contacte-nos</h1>
                <p className="text-lg mb-6 text-center">
                    Tem dúvidas ou sugestões? Envie-nos uma mensagem.
                </p>

                <form className="max-w-xl mx-auto space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    >
                        Enviar
                    </button>
                </form>
            </section>

        </main>
      </>
  );
}
