import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { SlArrowRight } from "react-icons/sl"
import { AppBehaviorContext, UserAdmContext } from "../../../../../providers"
import {

    Input, 
    Button

} from "../../../index"

export const FormUpdateArticleImage = ({setIsopenUpdateImage, article}) => {
    const  [ loading, setLoading ]  = useState(false)

    const { articleImageUpdate } = useContext(UserAdmContext)
    const { setArticleImage } = useContext(AppBehaviorContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm()

     const onSubmit = (payLoad) => {
        const formData = new FormData();
        formData.append("path", payLoad.path[0])
       
        articleImageUpdate(

            formData,
            setLoading,
            reset,
            setIsopenUpdateImage,
            article
        )
    
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setArticleImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div>
                
                <Input
                    label="Insert Image"
                    onChangeCapture={handleImageChange}
                    type="file"
                    accept=".png, .svg, .jpeg, .jpg"
                    error={errors.path}
                    {...register("path")}
                />               
               
                <Button 
                    type="submit"
                >
        
                    {loading ? "Loading..." : "To send"}

                <SlArrowRight
                    size={20}
                    color="black"
                />

                </Button>
            </div>

        </form>
    )
    
}


