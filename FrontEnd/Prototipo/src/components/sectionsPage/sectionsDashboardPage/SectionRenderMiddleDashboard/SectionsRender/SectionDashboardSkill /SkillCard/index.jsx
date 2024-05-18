import { useContext, useState } from "react"
import { SkillButtons } from "./SkillButtons"
import { UserAdmContext } from "../../../../../../../providers"
import { EditSkillModal } from "../../../../../../fragments"

export const SkillCard = ({skill}) => {
    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const {

        setEditSkill, 
        skillDelete, 

    } = useContext(UserAdmContext)

    return(
        <>
            <li>
                <div>
                    <span>
                        {skill.name}
                    </span>

                    <SkillButtons

                        skill={skill} 
                        setIsOpen={setIsOpen} 
                        setEditSkill={setEditSkill} 
                        skillDelete={skillDelete} 
                        setLoading={setLoading}
                        loading={loading} 

                    />

                </div>
            </li>
            {
                isOpen === true ?
                <EditSkillModal
                    setIsOpen={setIsOpen} 
                />:
                null
            }
        </>
    )
}