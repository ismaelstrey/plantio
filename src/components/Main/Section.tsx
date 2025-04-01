
export enum Type {
    FRUTIFERAS = "frutiferas",
    HORTALICAS = "hortaliças",
    PODA = "poda" 
}

export function Section ({children, title, tipo}:{children?:React.ReactNode, title?:string, tipo:Type}){
    const getBackgroundColor = () => {
        switch(tipo) {
            case Type.FRUTIFERAS:
                return 'bg-green-50'
            case Type.HORTALICAS:
                return 'bg-orange-50'
            case Type.PODA:
                return 'bg-yellow-50'
            default:
                return 'bg-gray-50'
        }
    }

    const getDefaultTitle = () => {
        switch(tipo) {
            case Type.FRUTIFERAS:
                return 'Árvores Frutíferas'
            case Type.HORTALICAS:
                return 'Hortaliças'
            case Type.PODA:
                return 'Serviços de Poda'
            default:
                return 'Plantas'
        }
    }

    return(
        <section className={`p-6 rounded-lg ${getBackgroundColor()}`}>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">{title || getDefaultTitle()}</h2>
            <p className="text-gray-600 italic mb-4">{children || "Carregando dados..."}</p>
        </section>
    )
}