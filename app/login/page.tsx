'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function CadastroPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert('Você deve aceitar os Termos e Condições para continuar.');
            return;
        }
        console.log('Cadastro enviado:', formData);
        // TODO: Add sign-up logic
    };

    return (
        <>
            <Head>
                <title>Cadastro | Plataforma do Comerciante</title>
            </Head>
            <main className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email, Password, Terms */}
                    </form>
                </div>
            </main>
        </>
    );
}
