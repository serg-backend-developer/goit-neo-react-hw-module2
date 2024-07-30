import css from "./Options.module.css";

export const Options = ({
  options,
  total,
  onFdb,
  onReset,
}) => {
  return (
    <div className={css.buttons}>
      {Object.keys(options).map((option) => (
        <button
          key={option}
          type="button"
          className={css.clickBtn}
          onClick={() => onFdb(option)}>
          {option}
        </button>
      ))}
      {total != 0 && (
        <button
          type="button"
          className={css.resetBtn}
          onClick={() => onReset()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;