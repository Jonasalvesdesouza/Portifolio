import { IoCloseOutline } from "react-icons/io5"

import IconLinkedinYellow from "../../../../assets/IconLinkedinYellow.svg"
import IconLinkedinBalck from "../../../../assets/IconLinkedinBlack.svg"

import IconGitHubYellow from "../../../../assets/IconGitHubYellow.svg"
import IconGitHubBlack from "../../../../assets/IconGithubBlack.svg"

import { Button } from "../../Button"
import { useContext } from "react"
import { AppBehaviorContext } from "../../../../providers"
import {

    useKeydown, 
    useOutclick, 
    useRemoveStringFromArray 

} from "../../../../hooks"
import { listPage } from "./listPages"
import { CardListPage } from "./cardListPage"

export const NavModal = ({ setIsOpen }) => {

    const { routeLocation } = useContext(AppBehaviorContext)

    const closeModalOutClick = useOutclick(()=> {
        setIsOpen(false)      
     })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpen(false)
     })
         

    const ListPage = useRemoveStringFromArray(listPage, routeLocation)

    return(
        <div
            role="dialog"
            ref={closeModalOutClick}
        >
            <div>
                <Button onClick={() => {
                        return setIsOpen(false)
                    }}>
                    <IoCloseOutline
                        size={28}
                        color="#1b1f24"
                    />                    
                </Button>
            </div>
            <div>
                <ul>
                    {
                        ListPage.map((page)=>{
                            return(
                                <CardListPage
                                    key={page.id}
                                    page={page} 
                                />
                            )
                        })
                    }
                </ul>
            </div>

            {
                <div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/jonas-alves-de-souza-61540b114/"
                            target="_blank"
                        >
                            <img src={IconGitHubBlack} alt="Linkdin Icon" />
                        </a>
                    </div>
                   <div>
                        <a 
                            href="https://github.com/Jonasalvesdesouza"
                            target="_blank"
                        >
                            <img src={IconLinkedinBalck} alt="GitHub Icon" />
                        </a>                                  
                    </div>
                </div>     
            }
        </div>
    )
}