import { SlArrowRight } from 'react-icons/sl'
import { Button } from '../../fragments'

export const SectionMyLatestProjectsHomePage = () => {
    return(
        <div>
            <h3>
                My latest <br />
                <span>Projects.</span>
            </h3>
            <p>
                Check out some freelance projects and work 
                completed during my learning journey as a 
                full stack developer.
            </p>
            <Button>
                <span>
                    SEE MY LATEST WORK
                </span>
                <span>
                    <SlArrowRight
                        size={20}
                        color='#e8e9ea' 
                    />
                </span>
            </Button>
        </div>
    )
}