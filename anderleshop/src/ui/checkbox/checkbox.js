
import "./main.css";

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label>
            <input
                type="checkbox"
            />
            {label}
        </label>
    );
}

export default Checkbox;