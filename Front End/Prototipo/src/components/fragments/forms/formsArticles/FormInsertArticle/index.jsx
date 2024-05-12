import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { UserAdmContext } from "../../../../../providers"
import { insertArticleSchema } from "../../../../../schema"

import {

    TextArea, 
    Input, 
    Button,
    Select

} from "../../../index"

import { Category } from "./options"

export const FormInsertArticle = ({ setIsOpenDashboard }) => {
    const  [ loading, setLoading ]  = useState(false)

    const { articleRegister, } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        {
            resolver: zodResolver(insertArticleSchema),
        }
    )

    const onSubmit = (payLoad) => {

        articleRegister(

            payLoad, 
            setLoading, 
            reset,
            setIsOpenDashboard
        )
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                <Input
                    type="text"
                    label="Title"
                    placeholder="Title"
                    error={errors.title}
                    {...register('title')}  
                />
               
                
                
                <Select
                    label={"Category"}
                    options={Category}
                    error={errors.category}
                    {...register('category')} 
                />
               
                <TextArea
                    type="text"
                    label="Description"
                    placeholder="Description"
                    error={errors.description}
                    {...register('description')}  
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

