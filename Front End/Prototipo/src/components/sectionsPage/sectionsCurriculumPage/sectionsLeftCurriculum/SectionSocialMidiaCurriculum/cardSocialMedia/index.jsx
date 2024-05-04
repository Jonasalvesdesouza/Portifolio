import IconGitHub from "../../../../../../assets/IconGitHubGray.svg"
import IconLinkedin from "../../../../../../assets/IconLinkedinGray.svg"

export const CardSocialMedia = ({object}) =>{
    const icon = object?.name === "GitHub" ? IconGitHub : IconLinkedin

    return(
        <li>
            <div>
                <a 
                    href={object.link}
                    target="_blank"
                >
                    <img src={icon} alt={object.name} />                
                </a>
            </div>
        </li>
    )
}