import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contacts() {
    return (
        <div className="bg-dark text-light">
            <p className="display-1 d-flex justify-content-center">Contacts</p>
            <p className="display-5 d-flex justify-content-center"><FontAwesomeIcon icon="fa-envelope" />&nbsp;petar@petartotev.net</p>
        </div>
    )
}