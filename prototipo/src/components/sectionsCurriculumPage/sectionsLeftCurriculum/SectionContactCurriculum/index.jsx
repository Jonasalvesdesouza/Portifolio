import { useContext } from 'react'

import { SlPhone } from 'react-icons/sl'
import { BsMailboxFlag } from 'react-icons/bs'
import { UserAdmContext } from '../../../../providers'

export const SectionContactCurriculum = () => {
    const { user } = useContext(UserAdmContext)
   
    return(
        <div>
            <h3>Contact.</h3>
            <div>
                <SlPhone
                    size={20}
                    color='#848484' 
                />
                <p>
                    {user.phone}
                </p>
            </div>
            <div>
                <BsMailboxFlag
                    size={20}
                    color='#848484' 
                />
                <p>
                    {user.email}
                </p>

            </div>
        </div>
    )
}