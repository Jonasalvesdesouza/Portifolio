import { useContext } from "react";
import { Button } from "../Button";
import { AppBehaviorContext } from "../../../providers/ApplicationBehaviorContext";

import styles from "./styles.module.scss"

export const NavHomePage = () => {
    const { setCurrentCard } = useContext(AppBehaviorContext);

    const buttons = [
        { label: "Home", index: 0 },
        { label: "About", index: 1 },
        { label: "Workplace", index: 2 },
        { label: "Contact", index: 3 }
    ];

    return (
        <div>
            <nav>
                <ul>
                    {buttons.map(button => (
                        <li key={button.index}>
                            <Button
                                onClick={() => setCurrentCard(button.index)}
                            >
                                <span className={`${styles.test} btn`}>
                                    {button.label}
                                </span>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
