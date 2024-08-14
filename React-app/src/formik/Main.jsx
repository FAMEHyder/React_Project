import  { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Main = () => {
    const [activeStep, setActiveStep] = useState(0);
    const history = useHistory();

    const steps = ['First Step', 'Second Step', 'Third Step'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNavigation = (step) => {
        switch (step) {
            case 0:
                history.push('/first');
                break;
            case 1:
                history.push('/second');
                break;
            case 2:
                history.push('/third');
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 && <FirstStep />}
            {activeStep === 1 && <SecondStep />}
            {activeStep === 2 && <ThirdStep />}

            <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    handleNext();
                    handleNavigation(activeStep + 1);
                }}
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
};

export default Main;
