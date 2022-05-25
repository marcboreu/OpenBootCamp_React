import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';

const ContactMain = () => {

    const contact = new Contact('Marc', 'Boreu', 'marcboreu@gmail.com', false);
    
    return (
        <>
            <ContactComponent contact={contact}></ContactComponent>
        </>
    );
};



export default ContactMain;
