import { 
    useCaptureCity, 
    useCaptureCountry, 
    useCaptureMonth, 
    useCaptureState, 
    useCaptureYear 
} from "../../../../../../hooks"

export const CardEducation = ({school}) => {
    const initialMonth = useCaptureMonth(school.initial_date)
    const initialYear = useCaptureYear(school.initial_date)

    const endMonth = useCaptureMonth(school.end_date)
    const endYear = useCaptureYear(school.end_date)

    const city = useCaptureCity(school.location)
    const state = useCaptureState(school.location)
    const country = useCaptureCountry(school.location) 

    const title = school.title
    const course = school.course
    const description = school.description


    return(
        <li>
            <div>
                <div>
                    <div>
                        <h4>{title}</h4>
                    </div>
                    <div>
                       <span>
                        {   endMonth == "" ? (initialMonth + " - " + initialYear + " / " + "Present"):
                            (initialMonth + " - " + initialYear + " / ") + (endMonth + " - " + endYear)
                        }
                       </span>
                    </div>
                </div>
                <div>
                    <span>
                        {
                            (course + " / " + city + " - " + state + " / " + country)     
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