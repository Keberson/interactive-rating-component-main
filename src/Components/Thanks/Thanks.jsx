import styles from './styles.module.css'
import illustration from './illustration-thank-you.svg'
import {TextThanks} from "./TextThanks";

export const Thanks = ({ feedback }) => {
    return (
        <div className={`${styles.thanks} wrapper`}>
            <img src={illustration} alt="Icon: Thanks" className={styles.thanks_img}/>
            <span className={styles.thanks_rating}>You selected {feedback} out of 5</span>
            <TextThanks />
        </div>
    );
};