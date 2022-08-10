import {useState} from "react";
import styles from './styles.module.css'
import star from './icon-star.svg'
import {Buttons} from "../Buttons/Buttons";
import {TextRating} from "./TextRating";

export const Rating = ({ setIsNeedRerender, setFeedback }) => {
    const [feedbackRating, setFeedbackRating] = useState(0);

    return (
        <div className={`${styles.rating} wrapper`}>
            <img src={star} alt="Icon: Star" className={styles.rating_logo} />
            <TextRating />
            <Buttons classes={styles.rating_buttons}
                     values={[ 1, 2, 3, 4, 5 ]}
                     value={feedbackRating}
                     setValue={setFeedbackRating}
                     activeClass={styles.active}
            />
            <button
                className={styles.rating_submit}
                onClick={() => {
                    if (feedbackRating !== 0) {
                        setFeedback(feedbackRating);
                        setIsNeedRerender(true);
                    }
                }}
            >
                Submit
            </button>
        </div>
    );
};