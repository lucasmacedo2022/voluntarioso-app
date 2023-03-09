import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

interface IMainActions {
    children?: JSX.Element;
}

const MainActions = ({ children }: IMainActions) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Box paddingTop={4} />
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <CustomButton
                    type='outlined'
                    name='Voltar'
                    size='large'
                    fullWidth={false}
                    handle={handleBack}
                />
                {children}
            </Box>
            <Box paddingTop={4} />
        </div>
    );
};

export default MainActions;
