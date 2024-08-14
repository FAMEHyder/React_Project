
import { useFormik } from 'formik';

const SecondStep = () => {
    const formik = useFormik({
        initialValues: { email: '' },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Email</label>
            <input 
                id="email" 
                name="email" 
                type="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
            />
            <button type="submit">Next</button>
        </form>
    );
};

export default SecondStep;
