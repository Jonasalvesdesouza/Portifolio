import { BiPencil, BiTrash } from 'react-icons/bi'
import { Button } from '../../../../../../../fragments'


export const ButtonsSection = (

    {
        article, 
        setIsOpen, 
        setEditArticles, 
        articleDelete,
        loading,
        setLoading
    }

) => {

    const handleClickEdit = () => {
        setIsOpen(true)
        setEditArticles(article)
    }

    const handleClickDelete = () => {
        articleDelete(article.id, setLoading)
    }

    return(
        <div>
             <div>
                <Button
                        onClick={ handleClickEdit }
                    >
                        <BiPencil
                            size={18}
                            color="black" 
                        />
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={handleClickDelete}
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
    )
}