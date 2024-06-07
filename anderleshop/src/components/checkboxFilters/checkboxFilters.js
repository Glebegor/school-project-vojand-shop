import Checkbox from "../../ui/checkbox/checkbox";


const CheckboxFilters = ({ label }) => {
    return (
        <div className={"filter-checkBox"}>
            <Checkbox label={label}/>
        </div>
    )
}


export default CheckboxFilters;