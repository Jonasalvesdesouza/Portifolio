import ImageJonas from '../../../assets/JonasImage.svg'

export const SectionBannerHomePage = () => {
    return(
        <div>
            <div>
                <h1>
                    Devoloper <br />
                    <span>Full</span> 
                    Stack
                    <span>.</span>
                </h1>
                <p>
                    During my professional journey, I realized my aptitude in programming. On yet another ordinary day in front of an Excel spreadsheet, I noticed that I was performing repetitive processes. I asked myself if it was possible \to eliminate the tedious tasks, and voilà, I started programming.
                </p>
            </div>
            <div>
                <img src={ImageJonas} alt='Image Jonas' />
            </div>
        </div>
    )
}