import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { cnpj } from 'cpf-cnpj-validator';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import apiRequestEnpoints from '../../apiRequests';
import { ONG } from '../../models/ONG';
import Colors from '../../shared/colors';
import CustomButton from '../shared/CustomButton';
import MainActions from '../shared/MainActions';

const ONGDetail = () => {
    const {
        state: { voluntarioId },
    } = useLocation();
    const { ongId } = useParams();
    const navigate = useNavigate();
    const [ong, setOng] = useState<ONG>({
        id: 0,
        nome: '',
        cnpj: '',
        categoria: '',
        email: '',
        ongVoluntarios: [],
        voluntarios: [],
        missao: '',
        acoes: '',
        causa: '',
    });

    useEffect(() => {
        axios
            .get<ONG>(`${apiRequestEnpoints.ObterONGById}/${ongId}`)
            .then(({ data }) => {
                console.log(data);
                setOng(data);
            });
    }, [ongId]);

    const handleCandidatarONG = async () => {
        const result = await axios.post(
            `${apiRequestEnpoints.CandidatarONG}?voluntarioId=${voluntarioId}&ongId=${ongId}`
        );

        if (result.status === 204) {
            alert(`Você se candidatou a ONG com sucesso`);

            navigate(-1);
        }
    };

    return (
        <div>
            <MainActions />
            {ong.nome !== null && (
                <>
                    <Box
                        sx={{ backgroundColor: `${Colors.purple}` }}
                        paddingY={4}
                        paddingX={2}
                        borderRadius={5}
                    >
                        <Typography
                            variant='h5'
                            color='white'
                            fontWeight='bold'
                        >
                            {ong.nome}
                        </Typography>
                        <Typography variant='h6' color='white'>
                            {cnpj.format(ong.cnpj)}
                        </Typography>
                        <Typography variant='h6' color='white'>
                            Categoria: {ong.categoria}
                        </Typography>
                    </Box>
                    <Box
                        component='img'
                        paddingY={2}
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                        src={`${process.env.PUBLIC_URL}/assets/image1.png`}
                    />
                    <Box
                        border={1}
                        borderColor={Colors.blue}
                        padding={2}
                        color={Colors.blue}
                        marginBottom={2}
                    >
                        <Typography variant='h6'>Nossa missão:</Typography>
                        <Typography variant='body1'>{ong.missao}</Typography>
                    </Box>
                    <Box
                        border={1}
                        borderColor={Colors.blue}
                        padding={2}
                        color={Colors.blue}
                        marginBottom={2}
                    >
                        <Typography variant='h6'>Nossas Ações:</Typography>
                        <Typography variant='body1'>{ong.acoes}</Typography>
                    </Box>
                    <Box
                        border={1}
                        borderColor={Colors.blue}
                        padding={2}
                        color={Colors.blue}
                        marginBottom={2}
                    >
                        <Typography variant='h6'>Nossa causa:</Typography>
                        <Typography variant='body1'>{ong.causa}</Typography>
                    </Box>
                    <CustomButton
                        fullWidth
                        name='Quero me juntar a causa!'
                        type='contained'
                        handle={handleCandidatarONG}
                    />
                </>
            )}
        </div>
    );
};

export default ONGDetail;
