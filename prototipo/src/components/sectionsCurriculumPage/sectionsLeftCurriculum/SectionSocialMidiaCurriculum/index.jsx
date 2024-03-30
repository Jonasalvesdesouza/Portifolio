import { useContext } from 'react'

import IconGitHub from '../../../../assets/IconGitHubGray.svg'
import IconLinkedin from '../../../../assets/IconLinkedinGray.svg'

import { UserAdmContext } from '../../../../providers'

export const SectionSocialMidiaCurriculum = () =>{
    const { user } = useContext(UserAdmContext)

    return(
        <div>
            <div>
                <h4>Social Midia.</h4>
            </div>
            <div>
                <div>
                    <a 
                        href={user.github}
                        target="_blank"
                    >
                        <img src={IconGitHub} alt='Icon GitHub' />                
                    </a>
                </div>
                <div>
                    <a 
                        href={user.linkedin}
                        target="_blank"
                    >
                        <img src={IconLinkedin} alt='Icon Linkedin' />                
                    </a>
                </div>
            </div>
        </div>
    )
}