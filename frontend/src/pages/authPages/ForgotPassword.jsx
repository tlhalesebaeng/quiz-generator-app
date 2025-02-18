import Auth from '../../components/auth-components/Auth';
import AlternativeAuth from '../../components/auth-components/AlternativeAuth';
import Input from '../../utils/Input';
import Button from '../../utils/Button';

export default function ForgotPassword() {
    const description =
        "Don't worry, enter your email below to reset your password.";

    function handleSubmitEmail(event) {
        event.preventDefault();
        console.log('Email submitted');
    }
    return (
        <Auth
            title="Forgot your password?"
            description={description}
            backTitle="Back to login"
        >
            <form>
                <div className="input-container column">
                    <Input type="email" placeholder="Email" />
                </div>
                <Button onClick={handleSubmitEmail}>Submit</Button>
            </form>
            <AlternativeAuth alt="Login" />
        </Auth>
    );
}
