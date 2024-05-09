import { useContext } from "react"
import { UserAdmContext } from "../../../../../../providers"
import { SocialMediaCard } from "./SocialMediaCard"

export const SectionDashboardSocialMedia = () => {

    const { profile } = useContext(UserAdmContext)

    const socialMedias = profile?.socialMedia
    
       
    return(
        <div>
            <h2>SocialMedia.</h2>
            <ul>
                {
                    socialMedias?.map((socialMedia)=>{
                        return(
                            <SocialMediaCard
                                key={socialMedia.id}
                                socialMedia={socialMedia} 
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}