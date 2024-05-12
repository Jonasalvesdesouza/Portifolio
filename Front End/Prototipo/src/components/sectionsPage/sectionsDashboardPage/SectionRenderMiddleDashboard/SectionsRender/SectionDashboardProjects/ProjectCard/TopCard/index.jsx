import { CiImageOn } from "react-icons/ci"
import { LuImagePlus } from "react-icons/lu"

import { Button } from "../../../../../../../fragments"

export const TopCard = (
    {   
        project,
        setIsopenUpdateImage,
        setIsOpenInsertImage, 
        setProject, 
        projectImage,
    }
) => {
    const handleInsertImage = () => {
        setIsOpenInsertImage(true)
        setProject(project)
    };

    const handleUpdateImage = () => {
        setIsopenUpdateImage(true)
        setProject(project)
    };
    
    return(
        <div>
            <div>
                {
                    projectImage != "/src/assets/DefaultImage.ai.svg" ? 
                    "Update Image" : 
                    projectImage === "/src/assets/DefaultImage.ai.svg" ? 
                    "Insert Image" : null
                }
            </div>
            <div>
                <Button onClick={
                    projectImage != "/src/assets/DefaultImage.ai.svg" ? handleUpdateImage : 
                    projectImage === "/src/assets/DefaultImage.ai.svg" ? 
                    handleInsertImage : null
                }
                >
                    {
                        projectImage != "/src/assets/DefaultImage.ai.svg" ? 
                        <CiImageOn
                            size={28}
                            color="black" 
                        /> : <LuImagePlus 
                            size={28}
                            color="black"
                        />
                    }

                </Button>
            </div>
            <div>
                <img 
                    src={projectImage} 
                    alt={`${project.title}`}
                />
            </div>
            
        </div>
    )
}