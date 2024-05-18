import { CiImageOn } from "react-icons/ci"
import { LuImagePlus } from "react-icons/lu"
import { Button } from "../../../../../../../fragments";

export const InsertImage = (
    {   
        article,
        setIsOpenInsertImage,
        setIsopenUpdateImage,
        setArticle,
        articleImage,
        setImageArticle
    }
) => {
    const handleInsertImage = () => {
        setIsOpenInsertImage(true)
        setArticle(article)
        setImageArticle(null)
    };

    const handleUpdateImage = () => {
        setIsopenUpdateImage(true)
        setArticle(article)
        setImageArticle(articleImage)
    };
    
    return(
        <div>
            <img 
                src={articleImage} 
                alt={`${article.title}`}
            />
            <div>
                <Button onClick={
                    articleImage != "/src/assets/DefaultImage.ai.svg" ? 
                    handleUpdateImage : 
                    articleImage === "/src/assets/DefaultImage.ai.svg" ? 
                    handleInsertImage : null
                }
                >
                    {
                        articleImage != "/src/assets/DefaultImage.ai.svg" ? 
                        <CiImageOn
                            size={28}
                            color="black" 
                        /> : 
                        <LuImagePlus 
                            size={28}
                            color="black"
                        />
                    }

                </Button>
            </div>            
        </div>
    )
}