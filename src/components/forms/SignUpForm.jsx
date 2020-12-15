import { Input } from 'components/controls/Input';
import { SubmitButton } from 'components/controls/SubmitButton';
import { TermsCheckbox } from 'components/controls/TermsCheckbox';
import './SignUpForm.css';

export const SignUpForm = () => {
  return <form className="signup-form-container">
    <Input label="Name" />
    <Input label="Email" type="email" />
    <Input label="Password" type="password" />
    <Input label="Confirm password" type="password" />
    <SubmitButton>Submit</SubmitButton>
    <TermsCheckbox>
    I confirm that this website is fully accessible and easy-to-use for the people with all kinds of disabilities.
    </TermsCheckbox>
  </form>;
};
