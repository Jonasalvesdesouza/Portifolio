import { 
    useCaptureCity, 
    useCaptureCountry, 
    useCaptureMonth, 
    useCaptureState, 
    useCaptureYear 
} from '../../../../../hooks'

export const CardJobExperience = ({job}) => {
    const initialMonth = useCaptureMonth(job.initial_date)
    const initialYear = useCaptureYear(job.initial_date)

    const endMonth = useCaptureMonth(job.end_date)
    const endYear = useCaptureYear(job.end_date)

    const title = job.title
    const office = job.office
    const description = job.description

    const city = useCaptureCity(job.location)
    const state = useCaptureState(job.location)
    const country = useCaptureCountry(job.location) 

    return(
        <li>
            <div>
                <div>
                    <div>
                        <h4>{title}</h4>
                    </div>
                    <div>
                       <span>
                        {   endMonth == '' ? (initialMonth + ' - ' + initialYear + ' / ' + 'Present'):
                            (initialMonth + ' - ' + initialYear + ' / ') + (endMonth + ' - ' + endYear)
                        }
                       </span>
                    </div>
                </div>
                <div>
                    <span>
                        {
                            (office + ' / ' + city + ' - ' + state + ' / ' + country)     
                        }
                    </span>
                </div>
                <div>
                    <span>
                        {description}
                    </span>
                </div>
            </div>
        </li>
    )
}