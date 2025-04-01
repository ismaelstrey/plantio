import { Periodo } from "@/types/HortaIA"



export function Section ({ nome, tipo,descricao, periodos}:{ nome?:string, descricao:string,tipo:string, periodos?:Periodo[]}){
    const getBackgroundColor = () => {
        switch(tipo) {
            case "frutifera":
                return 'bg-green-50'
            case "hortalica":
                return 'bg-orange-50'
            case "poda":
                return 'bg-yellow-50'
            default:
                return 'bg-gray-50'
        }   }

    const getDefaultTitle = () => {
        switch(tipo) {
            case "frutifera":
                return 'Árvores Frutíferas'
                case "hortalica":
                return 'Hortaliças'
                case "poda":
                return 'Serviços de Poda'
            default:
                return 'Plantas'
        }
    }

    return(
        <section className={`p-6 rounded-lg ${getBackgroundColor()}`}>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">{nome || getDefaultTitle()}</h2> 
            <h3 className="text-sm text-slate-500">{descricao}</h3>         
                 <ul className="text-gray-600 italic mb-4">
                    {periodos?.map((periodo) =>
                    <span key={periodo.id}>
                        <li>{periodo.mesInicio} - {periodo.mesFim}</li>
                        <li>{periodo.observacoes}</li>
                    </span>
                    )}
                  </ul>   
        </section>
    )
}