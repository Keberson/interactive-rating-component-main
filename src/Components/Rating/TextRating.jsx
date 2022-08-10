import styles from './styles.module.css'

export const TextRating = () => {
    return (
        <div className={styles.rating_text}>
            <h1 className={styles.rating_title}>How did we do?</h1>
            <p className={styles.rating_subtitle}>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
        </div>
    );
};