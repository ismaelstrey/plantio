'use client';
import { HortaProvider } from "@/contexts/HortaContext";

export default function Template({children}:{children:React.ReactNode}) {

    return (      
          <HortaProvider>{children}</HortaProvider>      
    );
}
  