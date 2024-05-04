import { useDateFormatEduIsJobExp } from "../../../../../../hooks"

export const CardEducation = ({school}) => {

    const initialDate = useDateFormatEduIsJobExp(school.initialDate)
    const endDate = useDateFormatEduIsJobExp(school.endDate)

    const test  = school.title

    const country = school.address.country
    const state = school.address.state
    const city = school.address.city

    const description = school.description

    

    const title = school.title
    const course = school.couser


    return(
        <li>
            <div>
                <div>
                    <div>
                        <h4>{title}</h4>
                    </div>
                    <div>
                       <span>
                        {   (initialDate + " - ") + (endDate === "" ? "current" : endDate) }
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