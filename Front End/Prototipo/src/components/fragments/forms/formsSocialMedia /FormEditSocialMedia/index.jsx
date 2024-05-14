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
import { OptionsSocialMedia } from "./options"

export const FormEditSocialMedia = ({setIsOpen}) => {
    const  [ loading, setLoading ]  = useState(false)

    const { socialMediaUpdate, editSocialMedia} = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        {
            resolver: zodResolver(insertSocialMediaSchema),
            values:{
                name: editSocialMedia.name,
                link: editSocialMedia.link,
            }
        }
    )

    const onSubmit = (payLoad) => {
        console.log(handleSubmit)

        socialMediaUpdate(

            payLoad, 
            setLoading, 
            reset,
            setIsOpen

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

