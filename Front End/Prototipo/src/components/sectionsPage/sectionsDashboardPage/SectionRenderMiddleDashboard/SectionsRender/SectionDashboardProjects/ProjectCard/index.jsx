import { useContext, useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'
import { BiImageAdd, BiImage  } from "react-icons/bi"

import {

    Button, 
    EditProjectModal, 
    ImageProjectModal,
    ImageUpdateProjectModal 

} from "../../../../../../fragments"

import { AppBehaviorContext, UserAdmContext } from "../../../../../../../providers"
import { useStateImage } from "../../../../../../../hooks"

export const ProjectCard = ( { project } ) => {

    const {

        setEditProjects, 
        projectDelete, 
        setProject,

    } = useContext(UserAdmContext)

    const { imageStade } = useContext(AppBehaviorContext)

    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const [ isOpenInsertImage, setIsOpenInsertImage ] = useState(false)
    const [ isOpenUpdateImage, setIsopenUpdateImage ] = useState(false)

    const test = useStateImage(project)
    
    const hancleCkickEditProjects = () => {
        setIsOpen(true)
        setEditProjects(project)
    }

    const hancleCkickInsertImage = () => {
        setIsOpenInsertImage(true)
        setProject(project)
    }

    const hancleCkickUpdateImage = () => {
        setIsopenUpdateImage(true)
        setProject(project)
    }
    
    const hancleCkickProjectDelete = () => {
        projectDelete(project.id, setLoading)
    }
    
    console.log(project.image)

    return(
        <>
            <li>
                <div>
                    <h2>
                        {project.title}
                    </h2>
                    <div>
                        <p>
                            {project.category}
                        </p>

                        <Button
                            onClick={hancleCkickEditProjects}
                        >
                            <BiPencil
                                size={18}
                                color="black"
                                /* color="#e8e9ea" */ 
                            />
                        </Button>
                        

                        {
                           test == false ?
                            <Button
                                onClick={hancleCkickInsertImage}
                            >
                                <BiImageAdd 
                                    size={18}
                                    color="black"
                                />
                            </Button> :
                            <Button
                                onClick={hancleCkickUpdateImage}
                            >
                            <BiImage 
                                size={18}
                                color="black"
                            />
                            </Button> 

                        }

                        <Button
                            onClick={hancleCkickProjectDelete}
                        >
                            {
                                loading? "Loading...":
                                <BiTrash
                                    size={18}
                                    color="black"
                                    /* color="#e8e9ea" */ 
                                />
                            }
                        </Button>
                    </div>
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
                /> :
                null
            }

            {
                isOpenUpdateImage === true ?
                <ImageUpdateProjectModal
                    setIsopenUpdateImage={setIsopenUpdateImage} 
                /> :
                null
            }
        </>
    )
}