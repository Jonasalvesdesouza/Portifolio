import {
    Footer, 
    Header, 
    NavHomePage 
} from "../../../fragments"

export const TemplateDefault = ({children, setIsOpen}) => {
    return(
        <div>
            <Header setIsOpen={setIsOpen}/>
        <div>
            <div>
                               
                <NavHomePage />
                
                <Footer />
            </div>

            <main>
                {children}                
            </main>
        </div>

    </div>
    )
}