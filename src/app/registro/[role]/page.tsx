// src/app/registro/[role]/page.tsx
import { notFound } from 'next/navigation';
import FormWrapper from '@/app/components/FormWrapper';

export default function RoleFormPage({ params }: { params: { role: string } }) {
    const validRoles = ['produtor', 'transportador', 'armazenador', 'transformador', 'distribuidor'];

    if (!validRoles.includes(params.role)) return notFound();

    return <FormWrapper role={params.role} />;
}
