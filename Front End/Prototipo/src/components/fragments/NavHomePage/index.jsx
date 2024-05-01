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
                                    setSectionHomepage("")
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
                                    setSectionHomepage("about")
                                }
                            } 
                        >
                            About
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setSectionHomepage("workplace")}
                            } 
                        >
                            Workplace
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setSectionHomepage("contact")}
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