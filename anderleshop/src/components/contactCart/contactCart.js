import "./main.css";

const ContactCart = ({place, img, name, position, email, tel, titul, link, animate}) => {
    return (
        <a href={link} className={"contacts-cart " + animate}>
            <div className="contacts-cart-profile">
                <h1>#{place}</h1>
                <img src={img} alt=""/>
                <h2>{name}</h2>
            </div>
            <div className="contacts-cart-desc">
                <div>{position}</div>
                <div>{email}</div>
                <div>{tel}</div>
                <div>{titul}</div>
            </div>
        </a>
    )
}

export default ContactCart;