import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Colors from '../../shared/colors';
import { cnpj as cnpjFormat } from 'cpf-cnpj-validator';
import CustomButton from '../../components/shared/CustomButton';
import MainActions from '../../components/shared/MainActions';

const ONGHomePage = () => {
    const {
        state: { id, nome, cnpj, missao, acoes, causa },
    } = useLocation();
    const navigate = useNavigate();

    const handleVoluntarios = () => {
        navigate(`${id}`);
    };

    const handleCandidatos = () => {
        navigate(`${id}/candidatos`);
    };

    return (
        <div>
            <MainActions />
            <Typography variant='h5' color={Colors.purple} fontWeight='bold'>
                Olá, {nome}!
            </Typography>
            <Box
                component='img'
                paddingY={4}
                sx={{
                    width: '100%',
                    height: '100%',
                }}
                src={`${process.env.PUBLIC_URL}/assets/image1.png`}
            />
            <Typography
                variant='h6'
                align='center'
                color={Colors.purple}
                fontWeight='bold'
            >
                {nome}
            </Typography>
            <Typography variant='body1' align='center' color={Colors.blue}>
                CNPJ: {cnpjFormat.format(cnpj)}
            </Typography>
            <Box paddingY={2} />
            <Box
                border={1}
                borderColor={Colors.blue}
                padding={2}
                color={Colors.blue}
                marginBottom={2}
            >
                <Typography variant='h6'>Nossa missão:</Typography>
                <Typography variant='body1'>{missao}</Typography>
            </Box>
            <Box
                border={1}
                borderColor={Colors.blue}
                padding={2}
                color={Colors.blue}
                marginBottom={2}
            >
                <Typography variant='h6'>Nossas Ações:</Typography>
                <Typography variant='body1'>{acoes}</Typography>
            </Box>
            <Box
                border={1}
                borderColor={Colors.blue}
                padding={2}
                color={Colors.blue}
                marginBottom={5}
            >
                <Typography variant='h6'>Nossa causa:</Typography>
                <Typography variant='body1'>{causa}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-evenly'>
                <CustomButton
                    fullWidth={false}
                    size='large'
                    handle={handleVoluntarios}
                    type='contained'
                    name='Voluntários'
                />
                <CustomButton
                    fullWidth={false}
                    size='large'
                    handle={handleCandidatos}
                    type='contained'
                    name='Candidatos'
                />
            </Box>
        </div>
    );
};

export default ONGHomePage;
