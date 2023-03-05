import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const MainActions = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Box paddingTop={4} />
            <CustomButton
                type='outlined'
                name='Voltar'
                size='large'
                fullWidth={false}
                handle={handleBack}
            />
            <Box paddingTop={4} />
        </div>
    );
};

export default MainActions;
