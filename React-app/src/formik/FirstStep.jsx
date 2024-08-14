
import { useFormik } from 'formik';

const FirstStep = () => {
    const formik = useFormik({
        initialValues: { name: '' },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Name</label>
            <input 
                id="name" 
                name="name" 
                type="text" 
                onChange={formik.handleChange} 
                value={formik.values.name}
            />
            <button type="submit">Next</button>
        </form>
    );
};

export default FirstStep;
