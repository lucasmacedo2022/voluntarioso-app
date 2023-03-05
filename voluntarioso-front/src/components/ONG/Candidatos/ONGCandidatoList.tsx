import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiRequestEnpoints from '../../../apiRequests';
import { ONG } from '../../../models/ONG';
import { Voluntario } from '../../../models/Voluntario';
import Colors from '../../../shared/colors';
import CustomButton from '../../shared/CustomButton';
import MainActions from '../../shared/MainActions';
import ONGCandidatoSingle from './ONGCandidatoSingle';

const ONGCandidatoList = () => {
    const { id } = useParams();
    const [volunId, setVolunId] = useState<number>(0);
    const [ongCandidatos, setOngCandidatos] = useState<Voluntario[]>();

    useEffect(() => {
        axios
            .get<ONG[]>(
                `${apiRequestEnpoints.ObterONGVoluntariosByOngId}/${id}`
            )
            .then(({ data }) => {
                const result = data[0].voluntarios.filter((x) =>
                    data[0].ongVoluntarios.some(
                        (y) =>
                            y.voluntarioId === x.volunId &&
                            !y.voluntarioAprovado
                    )
                );

                setOngCandidatos([...result]);
            });
    }, [id]);

    const handleAceitar = async () => {
        const result = await axios.put(
            `${apiRequestEnpoints.AceitarVoluntario}?voluntarioId=${volunId}&ongId=${id}`
        );

        if (result) {
            const updatedOngCandidatos = ongCandidatos?.filter(
                (x) => x.volunId !== volunId
            );

            setOngCandidatos(updatedOngCandidatos);
        }
    };

    const handleSelectCandidatoId = (volId: number) => {
        setVolunId(volId);

        alert(`Candidato com id ${volId} selecionado com sucesso`);
    };

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <MainActions />
            <Typography variant='h5' color={Colors.purple} fontWeight='bold'>
                Candidatos
            </Typography>
            <Box paddingY={2} />
            {ongCandidatos ? (
                ongCandidatos.map((candidato) => (
                    <ONGCandidatoSingle
                        key={candidato.volunId}
                        candidato={candidato}
                        selectCandidatoId={handleSelectCandidatoId}
                    />
                ))
            ) : (
                <Typography color='red'>
                    Nenhum Candidato até o momento
                </Typography>
            )}
            {ongCandidatos && (
                <>
                    <Box paddingY={1} />
                    <Box display='flex' justifyContent='center'>
                        <CustomButton
                            handle={handleAceitar}
                            fullWidth={false}
                            size='large'
                            type='contained'
                            name='Aceitar?'
                        />
                    </Box>
                </>
            )}
        </div>
    );
};

export default ONGCandidatoList;
