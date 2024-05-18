import { useContext } from "react"
import { AppBehaviorContext, UserAdmContext } from "../../../../../../providers"
import { EducationCard } from "./EducationCard"
import { InsertEducationModal } from "../../../../../fragments"

export const SectionDashboardEducation = () => {
    const { 

        isOpenDashboard,
        setIsOpenDashboard

    } = useContext(AppBehaviorContext)
    

    const { educationList } = useContext(UserAdmContext)
       
    return(
        <div>
            <h2>Education.</h2>
            <ul>
                {
                    educationList?.map((education)=>{
                        return(
                            <EducationCard
                                key={education.id}
                                education={education} 
                            />
                        )
                    })
                }
            </ul>
            {
                isOpenDashboard === true ?
                <InsertEducationModal
                    setIsOpenDashboard={setIsOpenDashboard}
                />:
                null
            }
        </div>
    )
}