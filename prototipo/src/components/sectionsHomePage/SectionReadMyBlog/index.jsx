import { Button } from '../../fragments/Button'
import { SlArrowRight } from 'react-icons/sl'

export const SectionReadMyBlogHomePage = () => {
    return(
        <div>
            <h3>
                Let's read <br />
                my <span>blog!</span>
            </h3>
            <p>
                Welcome to my blog, where I'll share with 
                you some of the knowledge I've acquired
                during my journey.
            </p>
            <Button>
                <span>
                    READ MY ARTICLES
                </span>
                <samp>
                    <SlArrowRight
                        size={20}
                        color='#e8e9ea' 
                    />
                </samp>
            </Button>
        </div>
    )
}