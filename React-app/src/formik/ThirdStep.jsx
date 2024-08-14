
import { useFormik } from 'formik';

const ThirdStep = () => {
    const formik = useFormik({
        initialValues: { password: '' },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Password</label>
            <input 
                id="password" 
                name="password" 
                type="password" 
                onChange={formik.handleChange} 
                value={formik.values.password}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ThirdStep;
