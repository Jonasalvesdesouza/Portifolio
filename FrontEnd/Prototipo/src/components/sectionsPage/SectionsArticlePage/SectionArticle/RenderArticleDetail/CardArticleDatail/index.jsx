import React from "react";
import { useLimitedDescription, useRenderImage } from "../../../../../../hooks"
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

export const CardArticleDatail = ({object}) => {
  
    const maxLength = 50
    const LimitedDescription = useLimitedDescription(object?.description, maxLength)
    const urlImage = useRenderImage(object)

    const highlightCode = () => {
        document.querySelectorAll(".ql-syntax").forEach((block) => {
          hljs.highlightBlock(block);
        });
      };

      React.useEffect(() => {
        highlightCode(); 
      }, []);
    return(
        <li>
            <div>
                <div className = 'ql-snow'>
                    <span>
                        {object.category}
                    </span>                    
                    <h2>
                        {object.title}
                    </h2>
                    <p 
                        className = 'ql-editor'
                        dangerouslySetInnerHTML={{ __html: LimitedDescription }} 
                    />
                
                </div>
                <div>
                    <img src={urlImage} alt={object.name} />
                </div>
                <div className = 'ql-snow'>
                    <p
                        className = 'ql-editor' 
                        dangerouslySetInnerHTML={{ __html: object?.description }} 
                    />
                </div>
            </div>
        </li>
    )
}