import { PiCopyrightLight } from "react-icons/pi"

import IconLinkedin from "../../../assets/IconLinkedinYellow.svg"
import IconGitHub from "../../../assets/IconGitHubYellow.svg"

export const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <div>
                        <PiCopyrightLight
                            size={22}
                            color="black"
                        />
                    </div>
                    <div>
                        <p>Jonas Alves de Souza 2024</p>
                    </div>
                </div>
                <div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/jonas-alves-de-souza-61540b114/"
                            target="_blank"
                        >
                            <img src={IconLinkedin} alt="Linkdin Icon" />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://github.com/Jonasalvesdesouza"
                            target="_blank"
                        >
                            <img src={IconGitHub} alt="GitHub Icon" />
                        </a>                                  
                    </div>                   
                </div>
            </div>
        </footer>
    )
}