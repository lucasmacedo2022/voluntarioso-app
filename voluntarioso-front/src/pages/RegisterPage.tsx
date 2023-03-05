import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequestEnpoints from '../apiRequests';
import CustomButton from '../components/shared/CustomButton';
import CustomInput from '../components/shared/CustomInput';
import CustomSelect from '../components/shared/CustomSelect';
import MainActions from '../components/shared/MainActions';
import Colors from '../shared/colors';

interface IRegisterPage {
    type: 'Voluntário' | 'ONG';
}

const RegisterPage = ({ type }: IRegisterPage) => {
    const navigate = useNavigate();
    const [registerONG, setRegisterONG] = useState({
        nome: '',
        cnpj: '',
        categoria: '',
        email: '',
        senha: '',
        missao: '',
        acoes: '',
        causa: '',
    });
    const [registerVoluntario, setRegisterVoluntario] = useState({
        volunNome: '',
        volunCPF: '',
        volunDataNascimento: '',
        volunEmail: '',
        volunSenha: '',
    });

    const handleBack = () => {
        navigate(-1);
    };

    const handleRegister = async () => {
        if (type === 'ONG') {
            const resultRegister = await axios.post<boolean>(
                `${apiRequestEnpoints.ONGRegister}`,
                registerONG
            );

            if (resultRegister) {
                const loginONG = {
                    email: registerONG.email,
                    senha: registerONG.senha,
                };

                const resultLogin = await axios.post(
                    `${apiRequestEnpoints.ONGLogin}`,
                    loginONG
                );

                if (resultLogin.status === 200) {
                    navigate('/ong/home', { state: resultLogin.data });
                }
            }
        } else {
            const resultRegister = await axios.post<boolean>(
                `${apiRequestEnpoints.VoluntarioRegister}`,
                registerVoluntario
            );

            if (resultRegister) {
                const loginVoluntario = {
                    email: registerVoluntario.volunEmail,
                    senha: registerVoluntario.volunSenha,
                };

                const resultLogin = await axios.post(
                    `${apiRequestEnpoints.VoluntarioLogin}`,
                    loginVoluntario
                );

                if (resultLogin.status === 200) {
                    navigate('/voluntario/home', { state: resultLogin.data });
                }
            }
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        if (type === 'ONG') {
            setRegisterONG((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        } else {
            setRegisterVoluntario((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        }
    };

    return (
        <div>
            <Box paddingTop={4} />
            <MainActions />
            <Typography variant='h3' color={Colors.purple} fontWeight='bold'>
                Cadastro {type}
            </Typography>
            <Box paddingY={5} />
            {type === 'ONG' ? (
                <>
                    <CustomInput
                        labelName='nome da instituição'
                        placeholder='digite o nome da instituição'
                        type='text'
                        onChange={handleChange}
                        value={registerONG.nome}
                        name='nome'
                    />
                    <CustomInput
                        labelName='cnpj'
                        type='text'
                        name='cnpj'
                        onChange={handleChange}
                        value={cnpj.format(registerONG.cnpj)}
                        placeholder='00.000.000/0000-00'
                    />
                    <CustomSelect
                        labelName='categoria'
                        placeholder='categoria'
                        name='categoria'
                        onChange={handleChange}
                        value={registerONG.categoria}
                    />
                    <CustomInput
                        labelName='Missão'
                        placeholder='digite a missão da ONG'
                        type='text'
                        onChange={handleChange}
                        value={registerONG.missao}
                        name='missao'
                    />
                    <CustomInput
                        labelName='Ações'
                        placeholder='digite as ações da ONG'
                        type='text'
                        onChange={handleChange}
                        value={registerONG.acoes}
                        name='acoes'
                    />
                    <CustomInput
                        labelName='Causa'
                        placeholder='digite a causa da ONG'
                        type='text'
                        onChange={handleChange}
                        value={registerONG.causa}
                        name='causa'
                    />
                </>
            ) : (
                <>
                    <CustomInput
                        labelName='nome completo'
                        placeholder='digite o seu nome completo'
                        name='volunNome'
                        type='text'
                        onChange={handleChange}
                        value={registerVoluntario.volunNome}
                    />
                    <CustomInput
                        labelName='data de nascimento'
                        placeholder='00/00/0000'
                        name='volunDataNascimento'
                        type='date'
                        onChange={handleChange}
                        value={registerVoluntario.volunDataNascimento}
                    />
                    <CustomInput
                        labelName='cpf'
                        placeholder='000.000.000-00'
                        name='volunCPF'
                        type='text'
                        onChange={handleChange}
                        value={cpf.format(registerVoluntario.volunCPF)}
                    />
                </>
            )}
            <CustomInput
                labelName='email'
                placeholder={
                    type === 'ONG' ? 'emailONG@gmail.com' : 'email@gmail.com'
                }
                type='email'
                name={type === 'ONG' ? 'email' : 'volunEmail'}
                value={
                    type === 'ONG'
                        ? registerONG.email
                        : registerVoluntario.volunEmail
                }
                onChange={handleChange}
            />
            <CustomInput
                labelName='senha'
                placeholder='digite sua senha'
                type='password'
                name={type === 'ONG' ? 'senha' : 'volunSenha'}
                value={
                    type === 'ONG'
                        ? registerONG.senha
                        : registerVoluntario.volunSenha
                }
                onChange={handleChange}
            />
            <Box paddingY={2} />
            <Box paddingBottom={2} />
            <CustomButton
                fullWidth
                handle={handleRegister}
                type='contained'
                name='cadastrar'
            />
            <Box paddingBottom={2} />
            <CustomButton
                fullWidth
                handle={handleBack}
                type='outlined'
                name='voltar'
            />
            <Box paddingBottom={5} />
        </div>
    );
};

export default RegisterPage;
