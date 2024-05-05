
import { useContext, useState } from "react"

import { IoIosArrowUp } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"


import { FormSendMeEmail } from "../../../fragments/forms"
import { useScreenWidth } from "../../../../hooks"
import { smallResolution } from "../../../../config"

export const SectionMeEmail = () => {
    const {

        setCurrentCard, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const [ test, setTest ] = useState("")

    useScreenWidth()

    const handleClick = () => {
        setCurrentCard(0)
    }

    return(
        <div>
            <div>
                <h4>
                    Send me a email<span>.</span>
                </h4>
                <p>
                    Are you in need of a project, 
                    or just say hello!
                </p>
            </div>
            <div>
                <FormSendMeEmail />
            </div>

           { 
                screenWidth >= smallResolution ?
                <Button
                    id="button"
                    onClick={handleClick}
                >
                    <IoIosArrowUp 
                        size={55} color="#1b1f24"
                    />
                </Button> :
                null
            }
        </div>
    )
}