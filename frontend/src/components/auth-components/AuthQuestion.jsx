import { NavLink } from 'react-router-dom';
import './AuthQuestion.css';

export default function AuthQuestion({
    children,
    question,
    option,
    name,
    onClickOption,
}) {
    let optionUrl;
    if (option === 'Login') {
        optionUrl = '/';
    } else if (option === 'Sign up') {
        optionUrl = '/users/signup';
    }

    return (
        <div className={`${name} column`}>
            {children}
            <p>
                {question}{' '}
                <NavLink onClick={onClickOption} to={optionUrl}>
                    {option}
                </NavLink>
            </p>
        </div>
    );
}
