'use client';
import { useState } from 'react';

export default function CadastroPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        termsAccepted: false,
    });

    const [documents, setDocuments] = useState({
        nif: null,
        certidao: null,
        outros: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setDocuments((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert('Você deve aceitar os Termos e Condições para continuar.');
            return;
        }

        console.log('Dados:', formData);
        console.log('Documentos:', documents);
        // TODO: Send to backend (e.g. API route with FormData)
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastro de Usuário</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:ring-green-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:ring-green-500"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:ring-green-500"
                    />

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded focus:ring-green-500"
                    >
                        <option value="">Selecione seu papel</option>
                        <option value="Produtor">Produtor</option>
                        <option value="Transportador">Transportador</option>
                        <option value="Transformador">Transformador</option>
                        <option value="Armazenador">Armazenador</option>
                        <option value="Distribuidor">Distribuidor</option>
                    </select>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">NIF (PDF ou imagem)</label>
                        <input
                            type="file"
                            name="nif"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            required
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Certidão Comercial</label>
                        <input
                            type="file"
                            name="certidao"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            required
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Outros documentos (opcional)</label>
                        <input
                            type="file"
                            name="outros"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="mt-1"
                        />
                    </div>

                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleInputChange}
                            className="mt-1 mr-2"
                            required
                        />
                        <label className="text-sm text-gray-700">
                            Eu aceito os{' '}
                            <a href="/termos" className="text-green-600 underline">
                                Termos e Condições
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </main>
    );
}
