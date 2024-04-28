import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { UserAdmContext } from "../../../../providers"
import { loginFormSchema } from "../../../schema"
import { Input } from "../../InputDefault"
import { InputPassword } from "../../InputPassword"
import { Button } from "../../Button"

export const FormLoginPage = () => {
    const [ loading, setLoading ] = useState(false)

    const { userAdmLogin } = useContext(UserAdmContext)

    const {

        register, 
        handleSubmit, 
        reset, 
        formState: { errors },

    } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = (payLoad) => {

        userAdmLogin(

            payLoad, 
            setLoading, 
            reset

    )
    }
 
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <Input
                    type="text"
                    placeholder="User Name"
                    error={errors.username}
                    {...register('username')}  
                />
                <InputPassword
                    placeholder="Password"
                    error={errors.password}
                    {...register('password')}                      
                />

                <Button 
                    type="submit">
        
                        {loading ? "Loading..." : "Login"}

                        <SlArrowRight
                            size={20}
                            color="#e8e9ea"
                        />
                </Button>
            </div>

        </form>
    )
}