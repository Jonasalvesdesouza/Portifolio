import { useContext, useState } from "react"

import { BiPencil, BiTrash } from 'react-icons/bi'
import { BiImageAdd, BiImage  } from "react-icons/bi"

import {

    Button, 
    EditProjectModal, 
    ImageProjectModal,
    ImageUpdateProjectModal 

} from "../../../../../../fragments"

import { UserAdmContext } from "../../../../../../../providers"
import { useStateImage } from "../../../../../../../hooks"

export const ProjectCard = ( { project } ) => {
    const {

        setEditProjects, 
        projectDelete, 
        setProject,

    } = useContext(UserAdmContext)

    const [ loading, setLoading ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    const [ isOpenInsertImage, setIsOpenInsertImage ] = useState(false)
    const [ isOpenUpdateImage, setIsopenUpdateImage ] = useState(false)

    const imageExists = useStateImage(project)

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
                            onClick={
                                ()=>{
                                    setIsOpen(true)
                                    setEditProjects(project)
                                }
                            }
                        >
                            <BiPencil
                                size={18}
                                color="black"
                                /* color="#e8e9ea" */ 
                            />
                        </Button>
                        

                        {
                           imageExists == false ?
                            <Button
                                onClick={
                                    ()=>{
                                        setIsOpenInsertImage(true)
                                        setProject(project)
                                    }
                                }
                            >
                                <BiImageAdd 
                                    size={18}
                                    color="black"
                                />
                            </Button> :
                            <Button
                                onClick={
                                    () => {
                                        setIsopenUpdateImage(true)
                                        setProject(project)
                                    }
                                }
                            >
                            <BiImage 
                                size={18}
                                color="black"
                            />
                            </Button> 

                        }

                        <Button
                            onClick={
                                ()=>{
                                    projectDelete(project.id, setLoading)
                                }
                            }
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
                    project={project} 
                /> :
                null
            }
        </>
    )
}