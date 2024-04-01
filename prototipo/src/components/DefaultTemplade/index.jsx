import { Footer, Header } from "../fragments"

export const DefaultTemplade = ({children, setIsOpen}) => {

    return(
        <div>
            <Header setIsOpen={setIsOpen}/>
            
            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}