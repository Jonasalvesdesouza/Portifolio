import { IoCloseOutline } from "react-icons/io5"

import { useKeydown, useOutclick, useRenderImage } from "../../../../hooks"
import { FormProfile, FormProfileContact, FormProfileImage, FormUpdateProfileImage } from "../../forms"
import { Button } from "../../Button"
import { useContext, useEffect, useState } from "react"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"

export const EditProfileModal = ({ setIsOpen }) => {
    const { imageProfile, setImageProfile } = useContext(AppBehaviorContext)
    const { profile } = useContext(UserAdmContext)
    const [ profileImage, setProjectImage ] = useState("")

	const closeModalOutClick = useOutclick(()=> {
        setIsOpen(false)      
    })
   
     const closeModalKeyDownEsque = useKeydown(()=>{
        setIsOpen(false)
    })
	
	const handleClick = () => {
        setImageProfile("")
		setIsOpen(false)
    }

    useEffect(() => {
        if (imageProfile) {
            setProjectImage(imageProfile)
        } else {
            const urlImage = useRenderImage(profile)
            setProjectImage(urlImage)
        }
    }, [profile, imageProfile])  
    
    
    return(
        <div

			role="dialog"
			ref={closeModalOutClick}

		>
			<div>
                <Button onClick={ handleClick }>

                    <IoCloseOutline
                        size={28}
                        color="#1b1f24"
                    />

                </Button>
            </div>
            <div>
                <img 
                    src={profileImage} 
                    alt="Preview" 
                    style={{ maxWidth: '100%', marginTop: '10px' }} 
                />
            </div>

            <div>
                {
                    profile.image === null ? 
                    <FormProfileImage /> : 
                    <FormUpdateProfileImage />
                }
            </div>

			<div>
				<FormProfile/>
			</div>

            <div>
                <FormProfileContact />                
            </div>

        </div>
    )
}
