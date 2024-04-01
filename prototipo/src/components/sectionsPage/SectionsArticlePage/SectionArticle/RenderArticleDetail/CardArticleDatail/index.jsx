import { useLimitedDescription } from "../../../../../../hooks"

export const CardArticleDatail = ({object}) => {
    const maxLength = 50
    const LimitedDescription = useLimitedDescription(object.text, maxLength)

    return(
        <li>
            <div>
                <div>
                    <span>
                        {object.category}
                    </span>                    
                    <h2>
                        {object.title}
                    </h2>
                    <p>
                        {LimitedDescription}
                    </p>                  
                </div>
                <div>
                    <img src={object.image} alt={object.name} />
                </div>
                <div>
                    <p>
                        {object.text}
                    </p>
                </div>
            </div>
        </li>
    )
}