import { Footer, HeaderHomeMobile } from "../../../fragments"

export const TemplateMobile = ({children, setIsOpen}) => {
    return(
        <div>
            <HeaderHomeMobile setIsOpen={setIsOpen}/> 
              
            <main>
                {children}                
            </main>
            
            <Footer />
        </div>
    )
}