import { useContext, useRef, useState } from "react"

import { useForm } from "react-hook-form"
import { SlArrowRight } from "react-icons/sl"
import { UserAdmContext } from "../../../../../providers"

import {

  Input,
  Button, 
  Select 

} from "../../../index"

import { Category } from "./options"
import { TextEditor } from "./TextEditor"

export const FormInsertArticle = ({ setIsOpenDashboard }) => {
  const [editorContent, setEditorContent] = useState("")
  
  const [loading, setLoading] = useState(false)
  const { articleRegister } = useContext(UserAdmContext)
  
  const {

    register, 
    handleSubmit, 
    reset, 
    formState: { errors }

} = useForm()

const onSubmit = (payload) => {
  payload.description = editorContent
  
  articleRegister(
    
    payload, 
    setLoading, 
    reset, setIsOpenDashboard
    
  )
}

const editorRef = useRef(null)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="text"
          label="Title"
          placeholder="Title"
          error={errors.title}
          {...register("title")}
        />
        <Select
          label="Category"
          options={Category}
          error={errors.category}
          {...register("category")}
        />
        <TextEditor
          ref={editorRef}
          setEditorContent={setEditorContent}
          {...register("description")}
        />
        <Button type="submit">
          {loading ? "Loading..." : "To send"}
          <SlArrowRight size={20} color="#e8e9ea" />
        </Button>
      </div>
    </form>
  )
}

