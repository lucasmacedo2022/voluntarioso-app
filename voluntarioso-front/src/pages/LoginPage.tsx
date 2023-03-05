import { Alert, Box, Typography } from '@mui/material';
import CustomButton from '../components/shared/CustomButton';
import CustomInput from '../components/shared/CustomInput';
import Colors from '../shared/colors';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import apiRequestEnpoints from '../apiRequests';
import CustomAlertDialog from '../components/shared/CustomAlertDialog';
import MainActions from '../components/shared/MainActions';

interface IRegisterPage {
    type: 'Voluntário' | 'ONG';
}

const LoginPage = ({ type }: IRegisterPage) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [loginONG, setLoginONG] = useState({
        email: '',
        senha: '',
    });
    const [loginVoluntario, setLoginVoluntario] = useState({
        volunEmail: '',
        volunSenha: '',
    });
    const [errorValidation, setErrorValidation] = useState<any[]>([]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = async () => {
        try {
            if (type === 'ONG') {
                const result = await axios.post(
                    `${apiRequestEnpoints.ONGLogin}`,
                    loginONG
                );

                if (result.status === 200) {
                    navigate('home', { state: result.data });
                }
            } else {
                var loginVolunObj = {
                    email: loginVoluntario.volunEmail,
                    senha: loginVoluntario.volunSenha,
                };

                const result = await axios.post(
                    `${apiRequestEnpoints.VoluntarioLogin}`,
                    loginVolunObj
                );

                if (result.status === 200) {
                    navigate('home', { state: result.data });
                }
            }
        } catch (err: any) {
            if (err.response.status !== 200) {
                if (err.response.data !== 'Sequence contains no elements') {
                    setErrorValidation(err.response.data);
                } else {
                    setOpen(true);
                }
            }
        }
    };

    const handleRegister = () => {
        navigate('register');
    };

    const handleForgotPassword = () => {
        alert('Demonstração de esquecer senha');
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        if (type === 'ONG') {
            setLoginONG((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        } else {
            setLoginVoluntario((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        }
    };

    return (
        <div>
            <CustomAlertDialog
                open={open}
                type={type}
                handleClose={handleClose}
            />
            <MainActions />
            <Typography variant='h3' color={Colors.purple} fontWeight='bold'>
                Login {type}
            </Typography>
            <Box paddingY={8} />
            <CustomInput
                labelName='email'
                placeholder={
                    type === 'ONG' ? 'emailONG@gmail.com' : 'email@gmail.com'
                }
                type='email'
                value={
                    type === 'ONG' ? loginONG.email : loginVoluntario.volunEmail
                }
                name={type === 'ONG' ? 'email' : 'volunEmail'}
                onChange={handleChange}
            />
            <CustomInput
                labelName='senha'
                type='password'
                placeholder='digite sua senha'
                name={type === 'ONG' ? 'senha' : 'volunSenha'}
                value={
                    type === 'ONG' ? loginONG.senha : loginVoluntario.volunSenha
                }
                onChange={handleChange}
            />
            <Typography paddingTop={1} align='right' color={Colors.blue}>
                <span
                    onClick={handleForgotPassword}
                    style={{ cursor: 'pointer' }}
                >
                    esqueceu sua senha?
                </span>
            </Typography>
            <Box paddingBottom={2} />
            <CustomButton
                fullWidth
                handle={handleLogin}
                type='contained'
                name='LOGIN'
            />
            <Box paddingBottom={2} />
            <CustomButton
                fullWidth
                handle={handleRegister}
                type='outlined'
                name='não tenho cadastro'
            />
            {errorValidation &&
                errorValidation.map((errValidation) => (
                    <Alert
                        key={errValidation.errorMessage}
                        sx={{ marginY: '1rem', borderRadius: '1rem' }}
                        severity='error'
                    >
                        {errValidation.errorMessage}
                    </Alert>
                ))}
        </div>
    );
};

export default LoginPage;
