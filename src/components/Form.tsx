import { FC, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";


interface LoginFormProps {
    title: string;
    buttonText: string;
    handleClick: (email: string, pass: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ title,  buttonText, handleClick }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            onClick={() => handleClick(email, pass)}
                        >
                            {buttonText}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default LoginForm;