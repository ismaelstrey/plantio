'use client';

import { Section } from './Section';
import { useHorta } from '@/contexts/HortaContext';

export function MainSection() {
    const { dataHorta, loading, error } = useHorta();

    if (loading) {
        return <div className="text-center py-8">Carregando dados...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {dataHorta.map((item, index) => (
                <Section
                    key={index}
                    title={item.title}
                    tipo={item.tipo}
                >
                    {item.children}
                </Section>
            ))}
        </div>
    );
}