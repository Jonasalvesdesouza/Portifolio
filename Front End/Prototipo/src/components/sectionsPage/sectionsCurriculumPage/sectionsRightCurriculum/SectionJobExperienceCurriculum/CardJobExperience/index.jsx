import { useDateFormatEduIsJobExp} from "../../../../../../hooks"

export const CardJobExperience = ({job}) => {

    const initialDate = useDateFormatEduIsJobExp(job.initialDate)
    const endDate = useDateFormatEduIsJobExp(job.endDate)

    const office  = job.title

    const country = job.address.country
    const state = job.address.state
    const city = job.address.city

    const description = job.description

    return(
        <li>
            <div>
                <div>
                    <div>
                        {<h4>{job.title}</h4>}
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
                            (office + " / " + city + " - " + state + " / " + country)     
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