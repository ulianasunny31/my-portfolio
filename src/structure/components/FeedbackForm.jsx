import { Field, Form, Formik } from 'formik';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa';

const FeedbackForm = ({ className }) => {
  const [state, handleSubmit] = useForm('mnnzplnw');

  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form className={className}>
        <h3>Write to me!</h3>
        <Field
          className="input"
          name="email"
          id="email"
          type="email"
          placeholder="Your email..."
        ></Field>
        <Field
          className="textarea"
          name="message"
          id="message"
          as="textarea"
          placeholder="Your feedback here..."
        />
        <button className="button">
          Send <FaPaperPlane className="form-icon" />
        </button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
