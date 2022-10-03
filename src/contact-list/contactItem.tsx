import { FC, Fragment } from "react";
import { Contacts } from "./types";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './contact-list.sass'
import { ButtonGroup } from "react-bootstrap";
import { ContactFormValues } from "./../edit-contact";

interface ContactItemProps {
    item: Contacts;
    onEdit:(Object: ContactFormValues) => void;
    deleteContact: (Object: ContactFormValues) => void;
}



const ContactItem: FC<ContactItemProps> = ({ item, onEdit, deleteContact }) => {
    return (
        <Card className="col-md-10 mx-auto" >
            <Card.Body style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                    <div>{item.name}</div>
                    <div>{item.phone}</div>
                    <div>{item.email}</div>
                <ButtonGroup >
                    <Button className="mb-2" variant="outline-danger" onClick={() => deleteContact(item)}>Delete</Button>
                    <Button className="mb-2" variant="outline-info" onClick={() => onEdit(item)}>Edit</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}

export default ContactItem;