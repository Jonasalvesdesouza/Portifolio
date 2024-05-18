import { PiCopyrightLight } from "react-icons/pi"

import IconLinkedin from "../../../assets/IconLinkedinYellow.svg"
import IconGitHub from "../../../assets/IconGitHubYellow.svg"

import styles from "./styles.module.scss"

export const Footer = () => {
    return(
        <footer>
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.footerIconContainer}`}>
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
                <span className="flexDirectionxRow">
                    <div>
                        <PiCopyrightLight
                            size={11}
                            color="#ededf1"
                        />
                    </div>
                    <div>
                        <p className="text white">
                            Jonas Alves de Souza 2024
                        </p>
                    </div>
                </span>
            </div>
        </footer>
    )
}