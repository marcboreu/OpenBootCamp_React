import React , { useState } from 'react';
import PropTypes from 'prop-types';


const ContactComponent = ({ contact }) => {

    const [online, setOnline] = useState(contact.online);
    
    const handleOnlineChange = () => {
        setOnline(!online);
    }
    
    return (
        <div>
            <h1>
                Name: { contact.name }
            </h1>
            <h1>
                Surname: { contact.surname }
            </h1>
            <h2>
                email: { contact.email }
            </h2>
            <h6>
                state: { online ? 'Online' : 'Not available'}
            </h6>
            <button onClick={handleOnlineChange}>{ online ? 'Disconnect' : 'Connect'}</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        email: PropTypes.string,
        online: PropTypes.bool,
    })
};


export default ContactComponent;
