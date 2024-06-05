import "./main.css";

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label className="checkbox-container">
            <input
                className="checkbox-input"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="checkbox-custom"></span>
            {label}
        </label>
    );
}

export default Checkbox;
