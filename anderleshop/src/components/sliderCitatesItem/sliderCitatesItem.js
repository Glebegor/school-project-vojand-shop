


const SliderCitatesItem = ({citate, author}) => {
    return (
        <div className="slider-item">
            <div className="slider-item-text">
                "{citate}"<br/>©{author}
            </div>
        </div>
    )
}


export default SliderCitatesItem;