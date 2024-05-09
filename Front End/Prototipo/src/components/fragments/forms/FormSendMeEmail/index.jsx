import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { Button, Input, TextArea } from "../.."
import { sendMeEmailFormSchema } from "../../../../schema"
import { UserAdmContext } from "../../../../providers"

export const FormSendMeEmail = () => {
    const { messageMeRegister } = useContext(UserAdmContext)
    const [ loading, setLoading ] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(sendMeEmailFormSchema)
    })

    const onSubmit = (payLoad) => {
        messageMeRegister(payLoad, setLoading, reset)
        setLoading(false)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    label="You Name."
                    placeholder="Enter your name"
                    type="text"
                    error={errors.title}
                    {...register("name")} 
                />
                <Input
                    label="Email Anddress."
                    placeholder="Enter your email address"
                    type="email"
                    error={errors.email}
                    {...register("email")} 
                />
                <div>
                    <TextArea
                        label="Your Message"
                        placeholder="Come on, don't be shy, send a message..."
                        cols={30}
                        row={5}
                        error={errors.message}
                        {...register("description")}
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                    >
                       { !loading ? <span> TO SEND </span> : <span>SENDING...</span>}

                        <SlArrowRight
                            size={20}
                            color="#1b1f24" 
                        />                        
                    </Button>
                </div>
            </div>

        </form>
    )
}