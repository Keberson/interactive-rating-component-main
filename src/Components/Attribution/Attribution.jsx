import style from './styles.module.css'

export const Attribution = ({ styles }) => {
    return (
        <div className={style.attribution} style={styles}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/Keberson">Keberson</a>.
        </div>
    );
};
