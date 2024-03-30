import { forwardRef } from 'react'

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return(

        <div>
            <label>{label}</label>

            <div>
                <input {...rest} ref={ref}/>
            </div>

            { error ? <p>{error.message}</p> : null }        
        </div>
    )
})