import { useContext } from 'react'
import { UserAdmContext } from '../../../../providers'
import { CardHobbiesCurriculum } from './CardHobbiesCurriculum'

export const SectionHobbiesCurriculum = () => {
    const { user } = useContext(UserAdmContext)

    const hobbies = user.hobbies 
  
    return(
        <div>
            <ul>
                {
                    hobbies?.map((hobbie)=>{
                        return(
                            <CardHobbiesCurriculum
                                key={hobbie.id}
                                hobbie={hobbie} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
} 