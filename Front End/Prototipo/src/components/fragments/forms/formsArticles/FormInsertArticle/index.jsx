import 'react-quill/dist/quill.snow.css'

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
import { TextEditor } from './TextEditor'

export const FormInsertArticle = ({ setIsOpenDashboard }) => {
    const [ editorContent, setEditorContent ] = useState('');
    const  [ loading, setLoading ]  = useState(false)

    const { articleRegister, } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        /* {
            resolver: zodResolver(insertArticleSchema),
        } */
    )

    const onSubmit = (payload) => {
        payload.description = editorContent

        articleRegister(

            payload, 
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
               
              <TextEditor
                    setEditorContent={setEditorContent} 
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

