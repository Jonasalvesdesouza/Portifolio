import { useContext } from "react"
import { Button } from "../Button"
import { AppBehaviorContext } from "../../../providers/ApplicationBehaviorContext"

export const NavHomePage = () => {
    const { setCurrentCard } = useContext(AppBehaviorContext)
    
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Button
                            onClick={
                                ()=> {
                                    setCurrentCard(0)
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
                                    setCurrentCard(1)
                                }
                            } 
                        >
                            About
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setCurrentCard(2)}
                            } 
                        >
                            Workplace
                        </Button>
                    </li>

                    <li>
                        <Button
                            onClick={
                                ()=> {setCurrentCard(3)}
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