
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Formik, Form } from 'formik';
import validationSchema from './Validation';

const Schema = ({ children, initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>{children}</Form>
        </Formik>
    );
};

// Define prop types for the component
Schema.propTypes = {
    children: PropTypes.node.isRequired,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

// Optional: Define default props if needed
Schema.defaultProps = {
    initialValues: {},
    onSubmit: () => {},
};

export default Schema;

