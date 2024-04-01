import { SlArrowRight } from "react-icons/sl"

export const ProjectCard = ({project}) => {
  
    return(
        <li>
            <div>
                <div>
                    <img src={`${project.image}`} alt={`${project.name}`} />
                </div>
                <div>
                    <h3>{`${project.name}`}</h3>
                    <p>{`${project.description}`}</p>
                </div>
                <div>
                    <a href={`${project.link}`} target="_blank" >
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