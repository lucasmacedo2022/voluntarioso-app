import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiRequestEnpoints from '../../../apiRequests';
import CustomButton from '../../shared/CustomButton';
import { ONG } from '../../../models/ONG';
import { Voluntario } from '../../../models/Voluntario';
import Colors from '../../../shared/colors';
import VoluntarioSingle from './ONGVoluntarioSingle';
import MainActions from '../../shared/MainActions';

const ONGVoluntarioList = () => {
    const { id } = useParams();
    const [volunNome, setVolunNome] = useState<string>('');
    const [volunId, setVolunId] = useState<number>(0);
    const [ongVoluntarios, setOngVoluntarios] = useState<Voluntario[]>([]);

    useEffect(() => {
        axios
            .get<ONG[]>(
                `${apiRequestEnpoints.ObterONGVoluntariosByOngId}/${id}`
            )
            .then(({ data }) => {
                const result = data[0].voluntarios.filter((x) =>
                    data[0].ongVoluntarios.some(
                        (y) =>
                            y.voluntarioId === x.volunId && y.voluntarioAprovado
                    )
                );

                setOngVoluntarios([...result]);
            });
    }, [id]);

    const handleSelecionar = () => {
        alert(`Simulando seleção do Voluntário com Nome: ${volunNome}`);
    };

    const handleEditar = () => {
        alert(`Simulando edição do Voluntário com Nome: ${volunNome}`);
    };

    const handleRemover = async () => {
        const result = await axios.delete(
            `${apiRequestEnpoints.RemoverVoluntario}?voluntarioId=${volunId}&ongId=${id}`
        );

        if (result) {
            const updatedOngVoluntarios = ongVoluntarios?.filter(
                (x) => x.volunId !== volunId
            );

            setOngVoluntarios(updatedOngVoluntarios);
        }
    };

    const handleSelectVoluntarioNome = (volNome: string) => {
        setVolunNome(volNome);
    };

    const handleSelectVoluntarioId = (volId: number) => {
        setVolunId(volId);

        alert(`Voluntário com id ${volId} selecionado com sucesso`);
    };

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <MainActions />
            <Typography variant='h5' color={Colors.purple} fontWeight='bold'>
                Nossos Voluntários
            </Typography>
            <Box paddingY={2} />
            {ongVoluntarios ? (
                ongVoluntarios.map((voluntario) => (
                    <VoluntarioSingle
                        key={voluntario.volunId}
                        voluntario={voluntario}
                        selectVoluntarioNome={handleSelectVoluntarioNome}
                        selectVoluntarioId={handleSelectVoluntarioId}
                    />
                ))
            ) : (
                <Typography color='red'>
                    Nenhum Voluntário até o momento
                </Typography>
            )}
            {ongVoluntarios && (
                <>
                    <Box paddingY={1} />
                    <Box display='flex' justifyContent='space-around'>
                        <CustomButton
                            handle={handleSelecionar}
                            fullWidth={false}
                            size='large'
                            type='contained'
                            name='Selecionar'
                        />
                        <CustomButton
                            handle={handleEditar}
                            fullWidth={false}
                            size='large'
                            type='contained'
                            name='Editar'
                        />
                        <CustomButton
                            handle={handleRemover}
                            fullWidth={false}
                            size='large'
                            type='contained'
                            name='Deletar'
                        />
                    </Box>
                </>
            )}
        </div>
    );
};

export default ONGVoluntarioList;
