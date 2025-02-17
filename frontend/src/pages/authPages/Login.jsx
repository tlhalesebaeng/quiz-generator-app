import AlternativeAuth from '../../components/auth-components/AlternativeAuth';
import Auth from '../../components/auth-components/Auth';
import RememberMe from '../../components/auth-components/RememberMe';
import Button from '../../utils/Button';
import Input from '../../utils/Input';

export default function Login() {
    return (
        <Auth title="Login">
            <form>
                <div className="input-container column">
                    <Input type="email" placeholder="Email" />
                    <Input type="email" placeholder="Email" />
                </div>
                <RememberMe type="Login" checkboxText="Remember me" />
                <div className="question-container column">
                    <Button title="Login" />
                    <p>
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </div>
            </form>
            <AlternativeAuth alt="Login" />
        </Auth>
    );
}
