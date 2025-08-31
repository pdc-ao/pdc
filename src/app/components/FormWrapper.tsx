import ProdutorForm from './forms/ProdutorForm';
import TransportadorForm from './forms/TransportadorForm';
// ... other imports

export default function FormWrapper({ role }: { role: string }) {
    switch (role) {
        case 'produtor':
            return <ProdutorForm />;
        case 'transportador':
            return <TransportadorForm />;
        // ... other cases
        default:
            return null;
    }
}
