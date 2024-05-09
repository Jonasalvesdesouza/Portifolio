import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"

import { SlArrowRight } from "react-icons/sl"

import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import {

    Input, 
    Button

} from "../../index"

export const FormProjectImage = ({ setIsOpenInsertImage }) => {
    const  [ loading, setLoading ]  = useState(false)

    const { projectImageRegister } = useContext(UserAdmContext)
    const { setStateImage } = useContext(AppBehaviorContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm()


    const onSubmit = (payLoad) => {
        const formData = new FormData();
        formData.append("path", payLoad.path[0])

        
        projectImageRegister(

            formData, 
            setLoading, 
            reset,
            setIsOpenInsertImage

        )
    }
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
        console.log('previewUrl:', previewUrl);
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                
                <input
                    label="Insert Image"
                    onChangeCapture={handleImageChange}
                    type="file"
                    accept=".png, .svg, .jpeg, .jpg"
                    error={errors.path}
                    {...register("path")}
                />
              
                {previewUrl && (
                    <img 
                        src={previewUrl} 
                        alt="Preview" 
                        style={{ maxWidth: '100%', marginTop: '10px' }} 
                    />
                )}
                
               
                <Button 
                    type="submit"
                    onClick={
                        ()=>{
                            setStateImage(true)
                        }
                    }
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


