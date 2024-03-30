import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { SlArrowRight } from 'react-icons/sl'

import { Button, Input, TextArea } from '../..'
import { sendMeEmailFormSchema } from '../../../schema'
import { MessageMeContext } from '../../../../providers/MessageMeContext'

export const FormSendMeEmail = () => {
    const { messageMeRegister } = useContext(MessageMeContext)
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
                    label='You Name.'
                    planceholder='Enter your name'
                    type='text'
                    error={errors.name}
                    {...register('name')} 
                />
                <Input
                    label='Email Anddress.'
                    planceholder='Enter your email address'
                    type='text'
                    error={errors.email}
                    {...register('email')} 
                />
                <div>
                    <TextArea
                        label='Your Message'
                        cols={30}
                        row={5}
                        error={errors.message}
                        {...register('message')}
                    />
                </div>
                <div>
                    <Button
                        type='submit'
                    >
                       { !loading ? <span> TO SEND </span> : <span>SENDING</span>}

                        <SlArrowRight
                            size={20}
                            color='#1b1f24' 
                        />                        
                    </Button>
                </div>
            </div>

        </form>
    )
}