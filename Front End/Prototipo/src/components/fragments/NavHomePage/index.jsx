import { useContext } from "react"
import { Button } from "../Button"
import { AppBehaviorContext } from "../../../providers/ApplicationBehavior"

export const NavHomePage = () => {
    const { setSectionHomepage, sectionHomepage } = useContext(AppBehaviorContext)
    
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Button
                            onClick={
                                ()=> {
                                    setSectionHomepage(0)
                                }
                            } 
                        >
                            Home
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {
                                    setSectionHomepage(1)
                                }
                            } 
                        >
                            About
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setSectionHomepage(2)}
                            } 
                        >
                            Workplace
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setSectionHomepage(3)}
                            } 
                        >
                            Contact
                        </Button>
                    </li>

                </ul>
            </nav>
        </div>

    )
}