import { useContext, useState } from "react"
import { EducationButtons } from "./EducationButtons"
import { UserAdmContext } from "../../../../../../../providers"
import { EditEducationModal } from "../../../../../../fragments"
import { useDateFormatEduIsJobExp } from "../../../../../../../hooks"

export const EducationCard = ({education}) => {
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const {

        setEditEducation, 
        educationDelete, 

    } = useContext(UserAdmContext)

    const initialDate = useDateFormatEduIsJobExp(education.initialDate)
    const endDate = useDateFormatEduIsJobExp(education.endDate)

    const test  = education.title

    const country = education.country
    const state = education.state
    const city = education.city

    const description = education.description

    const title = education.course
    const Institute = education.title

    return(
        <>
            <li>
                <div>
                <EducationButtons

                    education={education} 
                    setIsOpen={setIsOpen} 
                    setEditEducation={setEditEducation} 
                    educationDelete={educationDelete} 
                    setLoading={setLoading}
                    loading={loading} 

                />
                    <div>
                        <div>
                            <h4>{title}</h4>
                        </div>
                        <div>
                           <span>
                            {   (initialDate + " - ") + (endDate === "" ? "current" : endDate) }
                           </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            {
                                (Institute + " / " + city + " - " + state + " / " + country)     
                            }
                        </span>
                    </div>
                    <div>
                        <span>
                            {description}
                        </span>
                    </div>
                </div>                 
            </li>
            {
                isOpen === true ?
                <EditEducationModal
                    setIsOpen={setIsOpen} 
                />:
                null
            }
        </>
    )
}