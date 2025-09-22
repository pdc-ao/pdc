'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type User = {
    id: string;
    name: string;
    role: string;
    verificado: boolean;
};

export default function RoleDashboard() {
    const { role } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Simulate session fetch
        const mockUser: User = {
            id: '123',
            name: 'Raul Silva',
            role: role as string,
            verificado: true, // toggle to false to simulate pending
        };
        setUser(mockUser);
    }, [role]);

    if (!user) return <p className="text-center py-12">Carregando dashboard...</p>;

    return (
        <main className="max-w-5xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Dashboard: {user.role}</h1>

            {user.verificado ? (
                <div className="bg-green-100 border border-green-400 p-4 rounded mb-6">
                    ✅ Conta verificada. Acesso completo liberado.
                </div>
            ) : (
                <div className="bg-yellow-100 border border-yellow-400 p-4 rounded mb-6">
                    ⏳ Verificação pendente. Algumas funcionalidades estão restritas.
                </div>
            )}

            {/* Role-specific actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.role === 'Produtor' && (
                    <>
                        <DashboardCard title="Publicar Oferta" />
                        <DashboardCard title="Visualizar Demandas" />
                    </>
                )}
                {user.role === 'Transportador' && (
                    <>
                        <DashboardCard title="Agendar Transporte" />
                        <DashboardCard title="Histórico de Viagens" />
                    </>
                )}
                {/* Add more roles as needed */}
            </div>
        </main>
    );
}

function DashboardCard({ title }: { title: string }) {
    return (
        <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Acessar
            </button>
        </div>
    );
}
