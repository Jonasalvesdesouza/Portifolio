import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { UserAdmContext } from "../../../../../providers"
import { insertSocialMediaSchema } from "../../../../../schema"

import {
 
    Input, 
    Button,
    Select

} from "../../../index"

import { OptionsSocialMedia} from "./options"

export const FormInsertSocialMedia = ({ setIsOpenDashboard }) => {
    const  [ loading, setLoading ]  = useState(false)

    const { socialMediaRegister, } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        {
            resolver: zodResolver(insertSocialMediaSchema),
        }
    )

    const onSubmit = (payLoad) => {

        socialMediaRegister(

            payLoad, 
            setLoading, 
            reset,
            setIsOpenDashboard
        )
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                <Select
                    label={"Social Media"}
                    options={OptionsSocialMedia}
                    error={errors.category}
                    {...register('name')} 
                />

                <Input
                    type="text"
                    label="Link"
                    placeholder="Link"
                    error={errors.title}
                    {...register('link')}  
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

