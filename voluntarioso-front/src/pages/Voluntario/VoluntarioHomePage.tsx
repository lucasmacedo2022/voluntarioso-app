import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiRequestEnpoints from '../../apiRequests';
import CustomButton from '../../components/shared/CustomButton';
import CustomSelect from '../../components/shared/CustomSelect';
import MainActions from '../../components/shared/MainActions';
import ONGList from '../../components/Voluntario/ONGList';
import { ONG } from '../../models/ONG';
import Colors from '../../shared/colors';

const fetchONGs = async () => {
    const result = await axios.get<ONG[]>(
        `${apiRequestEnpoints.ObterListaONG}`
    );
    const data = result.data;

    return data;
};

const VoluntarioHomePage = () => {
    const navigate = useNavigate();
    const {
        state: { volunNome, volunId },
    } = useLocation();
    const [ongList, setOngList] = useState<ONG[]>([]);
    const [categoriaSelected, setCategoriaSelected] =
        useState<string>('default');

    useEffect(() => {
        fetchONGs().then((data) => setOngList(data));
    }, []);

    useEffect(() => {
        fetchONGs().then((data) => {
            if (categoriaSelected !== 'default') {
                const filteredONGs = data.filter(
                    (ong) => ong.categoria === categoriaSelected
                );

                setOngList(filteredONGs);
            } else {
                setOngList(data);
            }
        });
    }, [categoriaSelected]);

    const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        setCategoriaSelected(e.target.value);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div>
            <Box paddingTop={4} />
            <MainActions>
                <CustomButton
                    type='outlined'
                    name='Logout'
                    size='large'
                    fullWidth={false}
                    handle={handleLogout}
                />
            </MainActions>
            <Typography variant='h5' color={Colors.purple} fontWeight='bold'>
                Olá, {volunNome}! Selecione suas áreas de interesse!
            </Typography>
            <CustomSelect
                placeholder='categoria'
                name='categoria'
                onChange={handleChange}
                value={categoriaSelected}
            />
            <Box paddingTop={4} />
            {ongList !== null ? (
                <ONGList ongList={ongList} voluntarioId={volunId} />
            ) : (
                <Typography variant='body1' color='red'>
                    Nenhuma ONG até o momento
                </Typography>
            )}
        </div>
    );
};

export default VoluntarioHomePage;
