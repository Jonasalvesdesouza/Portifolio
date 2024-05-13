import { useLimitedDescription, useRenderImage } from "../../../../../../hooks"

export const CardArticleDatail = ({object}) => {
  
    const maxLength = 50
    
    const LimitedDescription = useLimitedDescription(object?.description, maxLength)

    const urlImage = useRenderImage(object)

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
                    <p dangerouslySetInnerHTML={{ __html: LimitedDescription }} />
                
                </div>
                <div>
                    <img src={urlImage} alt={object.name} />
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: object?.description }} />
                </div>
            </div>
        </li>
    )
}