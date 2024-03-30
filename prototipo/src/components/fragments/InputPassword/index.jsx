import { forwardRef, useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
    const [isHidden, setHidden] = useState(false)

    return(

        <div>

            <label>{label}</label>

            <div>
                <input

                    {...rest}
                    ref={ref}
                    type={isHidden ? 'Text' : 'password'} 
                />
                <span onClick={()=> setHidden(!isHidden)}>
                    {isHidden ? <FaRegEyeSlash size={21} color='868E96'/> :  <FaRegEye size={21} color='868E96'/>}
                </span>
            </div>

            { error ? <p>{error.message}</p> : null }        
        </div>
    )
})