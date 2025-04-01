export function MainSection ({children}:{children:React.ReactNode}){
    return(
        <div className="grid md:grid-cols-2 gap-8">
            {children}
            </div>
    )
}