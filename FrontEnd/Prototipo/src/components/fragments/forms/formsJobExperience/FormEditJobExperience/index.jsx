import {

    useContext, 
    useState

} from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { SlArrowRight } from "react-icons/sl"

import { UserAdmContext } from "../../../../../providers"
import { insertJobexperienceSchema } from "../../../../../schema"

import {
 
    Input, 
    Button,
    TextArea,

} from "../../../index"

export const FormEditJobExperience = ({ setIsOpen }) => {
    const  [ loading, setLoading ]  = useState(false)

    const { jobExperienceUpdate, editJobExperience } = useContext(UserAdmContext)

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors }, 

     } = useForm(
        {
            resolver: zodResolver(insertJobexperienceSchema),
            values:{

                title: editJobExperience.title,
                companyName: editJobExperience.companyName,
                country: editJobExperience.country,
                city: editJobExperience.city,
                state: editJobExperience.state,
                initialDate: editJobExperience.initialDate,
                endDate: editJobExperience.endDate,
                description: editJobExperience.description
                
            }
        }
    )

    const onSubmit = (payLoad) => {

        jobExperienceUpdate(

            payLoad, 
            setLoading, 
            reset,
            setIsOpen
        )
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
            <Input
                    type="text"
                    label="title"
                    placeholder="title"
                    error={errors.title}
                    {...register('title')}  
                />
                
                <Input
                    type="text"
                    label="Company Name"
                    placeholder="Company Name"
                    error={errors.companyName}
                    {...register('companyName')}  
                />
                
                <Input
                    type="text"
                    label="Country"
                    placeholder="Country"
                    error={errors.country}
                    {...register('country')}  
                />

                <Input
                    type="text"
                    label="City"
                    placeholder="City"
                    error={errors.city}
                    {...register('city')}  
                />

                <Input
                    type="text"
                    label="State"
                    placeholder="State"
                    error={errors.state}
                    {...register('state')}  
                />
                
                <Input
                    type="date"
                    label="InitialDate"
                    placeholder="InitialDate"
                    error={errors.initialDate}
                    {...register('initialDate')}  
                />

                <Input
                    type="date"
                    label="EndDate"
                    placeholder="EndDate"
                    error={errors.endDate}
                    {...register('endDate')}  
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

