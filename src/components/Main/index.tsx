import { MainSection } from "./Main";
import { Section, Type } from "./Section";

interface Prosps {
    children?: React.ReactNode,
    title?: string,
    tipo: Type 
}




export function Main ({dataHorta}:{dataHorta:Prosps[]}){
    return(
       <MainSection>
        {dataHorta.map((data, index) => (
            <Section key={index} {...data}/>
        ))}
       </MainSection>
    )
}