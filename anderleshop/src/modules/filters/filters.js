import "./main.css"
import SliderFilter from "../../components/rangesliderFilter/rangesliderFilter";
import RangeSlider from "../../components/rangesliderFilter/rangesliderFilter";
import Button from "../../ui/button/button";
import CheckboxFilters from "../../components/checkboxFilters/checkboxFilters";
const Filters = () => {
    return (
        <div className="filters">
            <h1 className={"filters-title"}>Filters</h1>
            <div className={"filters-price filters-el"}>
                <h2>Price</h2>
                <RangeSlider/>
            </div>
            <div className={"filters-delivery filters-el"}>
                <h2>Delivery</h2>
                <div className="filters-delivery-checkboxes">
                    <CheckboxFilters label={"AnderleHaus"}/>
                    <CheckboxFilters label={"AnderleShop"}/>
                    <CheckboxFilters label={"Monaco"}/>
                    <CheckboxFilters label={"Prague"}/>
                    <CheckboxFilters label={"Florida"}/>
                    <CheckboxFilters label={"Texas"}/>
                    <CheckboxFilters label={"San Francisco"}/>
                </div>
            </div>
            <div className={"filters-brand filters-el"}>
                <h2>Brand</h2>
                <div className="filters-brand-checkboxes">
                    <CheckboxFilters label={"Red Bull"}/>
                    <CheckboxFilters label={"Mercedes"}/>
                    <CheckboxFilters label={"McLaren"}/>
                    <CheckboxFilters label={"Audi"}/>
                    <CheckboxFilters label={"Fatpipe"}/>
                    <CheckboxFilters label={"Zona"}/>
                </div>

            </div>
            <Button title={"Apply"}/>
        </div>
    );
}

export default Filters;