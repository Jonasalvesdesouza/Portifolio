import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { UserAdmContext } from "../../../../providers"
import { contactProfileSchema } from "../../../../schema"
import {

    Input, 
    Button

} from "../../index"

export const FormProfileContact = () => {
    const  [ loading, setLoading ]  = useState(false)

    const { editContactProfile, contactUpdate, } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        {
            resolver: zodResolver(contactProfileSchema),
            values: {
                email: editContactProfile.email,
                cel: editContactProfile.cel
            }
        }
    )
    
    const onSubmit = (payLoad) => {

        contactUpdate(

            payLoad, 
            setLoading, 
            reset

        )
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                <Input
                    type="email"
                    label="Email"
                    placeholder="Email"
                    error={errors.profession}
                    {...register('email')}  
                />
                <Input
                    type="text"
                    label="Cel"
                    placeholder="Cel"
                    error={errors.profession}
                    {...register('cel')}  
                />
               

                <Button 
                    type="submit"
                >
        
                    {loading ? "Loading..." : "To send"}

                <SlArrowRight
                    size={20}
                    color="#e8e9ea"
                />

                </Button>
            </div>

        </form>
    )
    
}

