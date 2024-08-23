import phone from "..//..//icons/phone.png";
import './call.css';


const Call = () => {
    return (
        <a href="tel:+737-347-3983"><img src={phone} alt='icon' width={70} height={70} className="form-toggle"/></a>
    );
}

export default Call;