import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { SlArrowRight } from "react-icons/sl"
import { UserAdmContext } from "../../../../providers"
import {

    Input, 
    Button

} from "../../index"

export const FormUpdateProjectImage = () => {
    const  [ loading, setLoading ]  = useState(false)

    const { projectImageUpdate } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
    )

    const onSubmit = (payLoad) => {
        const formData = new FormData();
        formData.append("path", payLoad.path[0])

        
        projectImageUpdate(

            formData, 
            setLoading, 
            reset

        )
    }
    

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                
                <Input
                    type="file"
                    accept=".png, .svg, .jpeg, .jpg"
                    error={errors.path}
                    {...register("path")}
                      /* onChange={(e) => console.log(e.target.files)} */
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


