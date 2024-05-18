import { Link } from "react-router-dom"
import { useContext } from "react"

import { SlArrowRight } from "react-icons/sl"
import { IoIosArrowDown } from "react-icons/io"

import { Button } from "../../../fragments"
import { AppBehaviorContext, UserAdmContext } from "../../../../providers"
import {  useScreenWidth } from "../../../../hooks"
import { smallResolution } from "../../../../config"

import styles from "./styles.module.scss"

export const SectionAboutHomePage = () => {
    const {

        setCurrentCard, 
        screenWidth,

    } = useContext(AppBehaviorContext)

    const { profile } = useContext(UserAdmContext)

    useScreenWidth()
    
    const handleClick = () => {
        setCurrentCard(2)
    }

    return(
        <div className={`${styles.aboutHomeContainer} container`}>
            <div className={`${styles.flexBox}`}>
                <div>
                    <h2 className="title1">
                        Hello <span className="title1 yellow">!</span> <br />
                        My name is Jonas
                    </h2>
                    <p className="parapraph home">
                        {profile.bio}
                    </p>
                </div>

                <div className="marginTop bntAboutHome">

                    <Link
                        onClick={handleClick}
                        to={"/curriculum"}
                    >
                        <span>CURRICULUM</span>
                        <div>
                            <SlArrowRight
                                className="icon"
                            />
                        </div>
                    </Link>

                </div>
            </div>
            <div>
                {
                    screenWidth >= smallResolution ?
                    <Button
                        id="button"
                        onClick={ handleClick }
                    >
                        <IoIosArrowDown 
                            size={120} color="#1b1f24"
                        />
                    </Button> :
                    null
                }
            </div>
        </div>
    )
}