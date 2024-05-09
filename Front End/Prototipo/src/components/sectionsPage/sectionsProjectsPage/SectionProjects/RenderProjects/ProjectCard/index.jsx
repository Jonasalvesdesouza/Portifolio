import { SlArrowRight } from "react-icons/sl"
import { useLinkProject, useRenderImage } from "../../../../../../hooks"

export const ProjectCard = ({project}) => {

const urlImage = useRenderImage(project)

    return(
        <li>
            <div>
                <div>
                    <img src={urlImage} alt={`${project.title}`} />
                </div>
                <div>
                    <h3>{`${project.title}`}</h3>
                    <p>{`${project.description}`}</p>
                </div>
                <div>
                    <a 
                        href={`https://${useLinkProject(project)}`} 
                        target="_blank"
                        rel="noopener noreferrer" 
                    >
                        VIEW
                        <SlArrowRight
                            seize={20}
                            color="#bababa"
                        />
                    </a>
                </div>
            </div>
        </li>
    )
}