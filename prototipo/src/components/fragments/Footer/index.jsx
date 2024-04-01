import IconLinkedin from "../../../assets/IconLinkedinYellow.svg"
import IconGitHub from "../../../assets/IconGitHubYellow.svg"
import IconC from "../../../assets/IconWaterMark.png"

export const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <div>
                        <img src={IconC} alt="Icon C" />
                    </div>
                    <div>
                        <p>Jonas Alves de Souza 2024</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={IconLinkedin} alt="Icon Linkedin" />
                    </div>
                    <div>
                        <img src={IconGitHub} alt="Icon GitHub" />
                    </div>                    
                </div>
            </div>
        </footer>
    )
}