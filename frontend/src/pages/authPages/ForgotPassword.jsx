import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../components/auth-components/Auth';
import AlternativeAuth from '../../components/auth-components/AlternativeAuth';
import Input from '../../utils/Input';
import Button from '../../utils/Button';
import { isValidEmail } from '../../validators';
import axios from 'axios';

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();

    async function handleSubmitEmail(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/quiz/app/api/v1/users/password/reset',
                data
            );
            navigate('/users/password/reset/code');
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
    }

    let disabledButton = false;
    if (!email || !isValidEmail(email)) {
        disabledButton = true;
    }

    const description =
        "Don't worry, enter your email below to reset your password.";

    return (
        <Auth
            title="Forgot your password?"
            description={description}
            backTitle="Back to login"
        >
            <form onSubmit={handleSubmitEmail}>
                <div className="input-container column">
                    <Input
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <Button disabledButton={disabledButton}>Submit</Button>
            </form>
            <AlternativeAuth alt="Login" />
        </Auth>
    );
}
