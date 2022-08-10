export const Buttons = ({ classes, values, value, setValue, activeClass }) => {
    return (
        <div className={classes}>
            {values.map((elem) => {
                const classList = elem === value ? activeClass : "";

                return (
                    <button
                        className={classList}
                        key={elem}
                        onClick={() => setValue(elem)}
                    >
                        {elem}
                    </button>
                );
            })}
        </div>
    );
};