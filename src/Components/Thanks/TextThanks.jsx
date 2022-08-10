import styles from './styles.module.css'

export const TextThanks = () => {
    return (
        <div className={styles.thanks_text}>
            <h1 className={styles.thanks_title}>Thank you!</h1>
            <p className={styles.thanks_subtitle}>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
};