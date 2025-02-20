import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../../components/auth-components/Auth';
import AuthQuestion from '../../components/auth-components/AuthQuestion';
import Input from '../../utils/Input';
import Button from '../../utils/Button';
import axios from 'axios';

export default function CodeVerification() {
    const navigate = useNavigate();
    const [code, setCode] = useState();

    async function handleSubmitCode(event) {
        event.preventDefault();
        //642267

        try {
            const response = await axios.get(
                `http://127.0.0.1:3000/quiz/app/api/v1/users/password/${code}`
            );
            console.log(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
        navigate('/users/password/reset/entry');
    }

    let disabledButton = false;
    if (!code) {
        disabledButton = true;
    }

    const description = 'Enter the one time code sent to your email.';

    return (
        <Auth
            title="Verify Code"
            description={description}
            backTitle="Back to login"
        >
            <form>
                <div className="input-container column">
                    <Input
                        onChange={(event) => {
                            setCode(event.target.value);
                        }}
                        type="text"
                        placeholder="Enter Code"
                    />
                </div>
                <AuthQuestion
                    question="Didn't receive the code?"
                    option="Resend"
                    name="other-question-container"
                ></AuthQuestion>
                <Button
                    disabledButton={disabledButton}
                    onClick={handleSubmitCode}
                >
                    Submit
                </Button>
            </form>
        </Auth>
    );
}
