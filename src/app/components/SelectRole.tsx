// src/components/SelectRole.tsx
import { useRouter } from 'next/router';

const roles = [
    { id: 'produtor', label: 'Produtor', description: 'Cultiva e oferece produtos agrícolas' },
    { id: 'transportador', label: 'Transportador', description: 'Realiza entregas e coletas' },
    { id: 'armazenador', label: 'Armazenador', description: 'Oferece espaço para estocagem' },
    { id: 'transformador', label: 'Transformador', description: 'Processa e transforma produtos' },
    { id: 'distribuidor', label: 'Distribuidor', description: 'Conecta produtos aos mercados' },
];

export default function SelectRole() {
    const router = useRouter();

    const handleSelect = (roleId: string) => {
        router.push(`/registro/${roleId}`);
    };

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Escolha seu papel na plataforma</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {roles.map((role) => (
                    <button
                        key={role.id}
                        onClick={() => handleSelect(role.id)}
                        className="border rounded-lg p-6 hover:shadow-lg transition bg-white text-left"
                    >
                        <h2 className="text-xl font-semibold mb-2">{role.label}</h2>
                        <p className="text-gray-600">{role.description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
