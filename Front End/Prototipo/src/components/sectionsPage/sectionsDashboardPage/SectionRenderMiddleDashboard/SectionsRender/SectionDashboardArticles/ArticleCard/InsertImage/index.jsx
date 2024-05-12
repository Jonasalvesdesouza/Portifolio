export const InsertImage = (
    {   
        article,
        imageExists,
        setIsOpenInsertImage,
        setIsopenUpdateImage,
        setArticle,
        articleImage,
    }
) => {
    const handleInsertImage = () => {
        setIsOpenInsertImage(true)
        setArticle(article)
    };

    const handleUpdateImage = () => {
        setIsopenUpdateImage(true)
        setArticle(article)
    };
    
    return(
        <div>
            <img 
                src={articleImage} 
                alt={`${article.title}`}
                onClick={imageExists ? handleUpdateImage : handleInsertImage} 
            />
            
        </div>
    )
}