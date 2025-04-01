import { MainSection } from "./Main";
import { Section, Type } from "./Section";


export function Main (){
    return(
       <MainSection>
        <Section title="Hortaliças para Plantar" tipo={Type.HORTALICAS}/>
        <Section title="Frutíferas para Plantar" tipo={Type.FRUTIFERAS}/>
        <Section title="Época de Poda" tipo={Type.PODA}/>
       </MainSection>
    )
}