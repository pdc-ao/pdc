import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    nome: z.string().min(1),
    localizacao: z.string().min(1),
    // Add more fields
});

export default function ProdutorForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log('Produtor data:', data);
        // Future: send to backend
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register('nome')} placeholder="Nome do produtor" />
            {errors.nome && <p>{errors.nome.message}</p>}
            {/* More fields */}
            <button type="submit">Enviar</button>
        </form>
    );
}
