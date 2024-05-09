import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { BiImageAdd  } from "react-icons/bi"

import { SlArrowRight } from "react-icons/sl"

import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import {

    Input, 
    Button

} from "../../index"

export const FormProjectImage = ({ setIsOpenInsertImage }) => {
    const  [ loading, setLoading ]  = useState(false)

    const { projectImageRegister } = useContext(UserAdmContext)
    const { setImageStade } = useContext(AppBehaviorContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm()

    const handleClick = () =>{
        setImageStade(true)
    }

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
    

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                
                <Input
                    label="Insert Image"
                    type="file"
                    accept=".png, .svg, .jpeg, .jpg"
                    error={errors.path}
                    {...register("path")}
                />
         

                               

                <Button 
                    type="submit"
                    onClick={handleClick}
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


