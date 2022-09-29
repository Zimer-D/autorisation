import { Contacts } from 'contact-list/types';
import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { Field, Form, Formik, FormikHelpers } from 'formik';
import './editContact.sass'
import axios from 'axios';
import * as Yup from 'yup';

interface ModalProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    item: Contacts | undefined
    onEdit: (Object: ContactFormValues) => void;
    newId: number
}

export interface ContactFormValues {
    name: string;
    phone: string;
    email: string;
    id: number
}
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!'),
    phone: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required!'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required!'),
        
});

const EditContact: FC<ModalProps> = ({ show, setShow, item, onEdit, newId }) => {

    const initialValues: ContactFormValues = {
        name: item?.name ?? '',
        phone: item?.phone ?? '',
        email: item?.email ?? '',
        id: item?.id ?? 0
    };
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-80w"
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    {!item ? <p>Add a new contact</p> : <p>Edit {item.name} info</p>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={(values: ContactFormValues, actions: FormikHelpers<ContactFormValues>) => {
                        if (!item) {
                            axios.post(`https://jsonplaceholder.typicode.com/users`,
                                {
                                    body: {
                                        name: values.name,
                                        phone: values.phone,
                                        email: values.email,
                                        id: newId
                                    }
                                }
                            )
                                .then(res => onEdit(res.data.body));
                            actions.setSubmitting(false);
                        } else {
                            axios.put(`https://jsonplaceholder.typicode.com/users/${item.id}`,
                                {
                                    body: {
                                        name: values.name,
                                        phone: values.phone,
                                        email: values.email,
                                        id: item.id
                                    }
                                }
                            )
                           
                                .then(res => onEdit(res.data.body));
                            actions.setSubmitting(false);
                        }
                    }}
                >
                    {({ errors, touched, dirty }) => (
                        <Form>
                            <div className='fieldItem'>
                                <label htmlFor="Name">Name</label>
                                <Field
                                    className='field'
                                    name="name"
                                />
                                {errors.name && touched.name ? (
                                    <div style={{ color: "red" }}>{errors.name}</div>
                                ) : null}
                            </div>
                            <div className='fieldItem'>
                                <label htmlFor="Phone">Phone</label>
                                <Field
                                    className='field'
                                    name="phone"
                                />
                                {errors.phone && touched.phone ? (
                                    <div style={{ color: "red" }}>{errors.phone}</div>
                                ) : null}
                            </div>
                            <div className='fieldItem'>
                                <label htmlFor="email">Email</label>
                                <Field
                                    className='field'
                                    name="email"
                                />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}
                               
                            </div>
                          
                            <Button 
                            disabled={!!Object.entries(errors).length || !dirty}
                            type="submit" 
                            onClick={() => { setShow(false);  }}
                            >Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default EditContact;