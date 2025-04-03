import { tipoDeCultura } from "@/contants/estacoes";


export default function MenuCulturas() {
   
   return (
    <div className="flex gap-3">
{    tipoDeCultura.map((item, index) => {
        return (           
                <button key={index}>{item.nome}</button>          
        ) 
    })}
    </div>
)
}