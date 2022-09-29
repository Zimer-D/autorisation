import axios from "axios";
import EditContact, { ContactFormValues } from "edit-contact";
import { Fragment, SetStateAction, useEffect, useMemo, useState } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import ContactItem from "./contactItem";
import { Contacts } from "./types";
import './contact-list.sass'



const ContactList = () => {
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState<Contacts[]>([])
    const [item, setItem] = useState<Contacts | undefined>()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalContacts, setTotalContacts] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const contactsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            try{
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setItems(result.data);
        } catch (error) { alert("Something went wrong, try again later")}
    }
        fetchData();
    }, []);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
        pageNumbers.push(i);
    }


    const contactsData = useMemo(() => {
        let filteredContacts = items;
        if (searchTerm) {
            filteredContacts = filteredContacts.filter(
                item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.phone.includes(searchTerm) ||
                    item.email.toLowerCase().includes(searchTerm.toLowerCase())

            )
        }
        setTotalContacts(filteredContacts.length);

        return filteredContacts.slice(
            (currentPage - 1) * contactsPerPage,
            (currentPage - 1) * contactsPerPage + contactsPerPage
        );
    }, [items, currentPage, searchTerm]);
    const paginate = (pageNumbers: number) => setCurrentPage(pageNumbers);

    const deleteContact = (item: Contacts) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`, {
            method: 'DELETE',
        });
        setItems(items.filter((q => {
            if (q.id !== item.id) {
                return q
            }
        })))
    }

    const editItem = (item: Contacts) => {
        setItem(item)
        setShowModal(true)
    }
    const newContact = (res: ContactFormValues) => {
        console.log(11, res)
        !item?
        setItems([res, ...items]) 
        :
        items.forEach((q, i) => {
          if (q.id === res.id) {
                items[i] = res
                setItems([...items])
            }

        })
    }
    return (
        <>

            <div className="filterItem">
                <Form.Group className="col-3" >
                    <Form.Control
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="me-auto"
                        placeholder="Type for searching..." />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={() => { setItem(undefined); setShowModal(true) }}>
                    Add new contact
                </Button>
            </div>
            {contactsData.map(item => (
                <Fragment key={item.id}>
                    <div className="contactItem" >
                        <ContactItem
                            item={item}
                            onEdit={() => editItem(item)}
                            deleteContact={() => deleteContact(item)}
                        />
                    </div>
                </Fragment>
            ))}
            <EditContact
                item={item}
                show={showModal}
                setShow={setShowModal}
                onEdit={(res: ContactFormValues) => newContact(res)}
                newId={items.length + 1}
            />
            <nav>
                <div style={{ display: "flex", justifyContent: 'center', cursor: 'pointer' }}>
                    {pageNumbers.map((number) => (
                        <div key={number} >
                            <Pagination onClick={() => paginate(number)} className="page-link">
                                {number}
                            </Pagination>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default ContactList;