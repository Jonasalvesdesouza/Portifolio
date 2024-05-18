import ImageDefault from "../../../../../../../assets/DefaultImage.ai.svg"

import { useContext, useEffect, useState } from "react"
import { BiPencil, BiTrash } from 'react-icons/bi'
import {

    Button, 
    EditProjectModal, 
    ImageProjectModal,
    ImageUpdateProjectModal 

} from "../../../../../../fragments"

import { AppBehaviorContext, UserAdmContext } from "../../../../../../../providers"
import { InsertImage } from "./InsertImage"
import { ConfigServerUrl } from "../../../../../../../config"
import { ProjectButtons } from "./ProjectButtons"

export const ProjectCard = ({ project }) => {
    const [ projectImage, setProjectImage ] = useState("")
    const { setImageProject } = useContext(AppBehaviorContext)
  
    const {

        setEditProjects, 
        projectDelete, 
        setProject,

    } = useContext(UserAdmContext)

    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const [ isOpenInsertImage, setIsOpenInsertImage ] = useState(false)
    const [ isOpenUpdateImage, setIsopenUpdateImage ] = useState(false)

    useEffect(() => {
        const imageRender = () => {
            if (!project.image) {
                return ImageDefault
            } else {
                const imagePath = project.image.path;
                const imageName = imagePath?.substring(imagePath.lastIndexOf('/') + 1)
                const serverUrl = ConfigServerUrl;
                return `${serverUrl}/uploads/${imageName?.replace(/\s/g, '%20')}`
            }
        }

        const imageUrl = imageRender();
        setProjectImage(imageUrl);
    }, [project])


    return(
        <>
            <li>
                <div>
                    <div>
                    {

                        <InsertImage
                            project={project}
                            setIsOpenInsertImage={setIsOpenInsertImage}
                            setIsopenUpdateImage={setIsopenUpdateImage} 
                            setProject={setProject} 
                            projectImage={projectImage}
                            setImageProject={setImageProject}
                        />

                    }
                    </div>
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.category}</p>
                        <p>{project.description}</p>
                    </div>
                    <ProjectButtons

                        project={project} 
                        setIsOpen={setIsOpen} 
                        setEditProjects={setEditProjects} 
                        projectDelete={projectDelete} 
                        setLoading={setLoading} 
                        loading={loading}

                    />
                </div>
            </li>

    
            {
                isOpen === true ?
                <EditProjectModal
                    setIsOpen={setIsOpen} 
                />:
                null
            }
            {
                isOpenInsertImage === true ?
                <ImageProjectModal
                    setIsOpenInsertImage={setIsOpenInsertImage} 
                    project={project} 
                /> :
                null
            }

            {
                isOpenUpdateImage === true ?
                <ImageUpdateProjectModal
                    setIsopenUpdateImage={setIsopenUpdateImage}
                    project={project} 
                /> :
                null
            }
        </>
    )
}

