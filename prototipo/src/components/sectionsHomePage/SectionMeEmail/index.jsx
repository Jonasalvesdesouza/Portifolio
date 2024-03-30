import { Button } from '../../fragments'
import { FormSendMeEmail } from '../../fragments/forms'

export const SectionMeEmail = () => {
    return(
        <div>
            <div>
                <h4>
                    Send me a email<span>.</span>
                </h4>
                <p>
                    Are you in need of a project, 
                    or just say hello!
                </p>
            </div>
            <div>
                <FormSendMeEmail />
            </div>
        </div>
    )
}