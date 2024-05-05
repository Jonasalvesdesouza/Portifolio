
import { useContext } from "react"

import { IoIosArrowUp } from "react-icons/io"
import { Button } from "../../../fragments"
import { AppBehaviorContext } from "../../../../providers"


import { FormSendMeEmail } from "../../../fragments/forms"
import { useScreenWidth } from "../../../../hooks"

export const SectionMeEmail = () => {
    const { setSectionHomepage, screenWidth  } = useContext(AppBehaviorContext)

    useScreenWidth()

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
                screenWidth >= 700 ?
                <Button
                    id="button"
                    onClick={
                        ()=> {
                            setSectionHomepage(0)
                        }
                    }
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