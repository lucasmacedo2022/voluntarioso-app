const defaultProxy = 'http://localhost:5094/api';

const apiRequestEnpoints = {
    ONGRegister: `${defaultProxy}/ContaONG/register`,
    ONGLogin: `${defaultProxy}/ContaONG/login`,
    VoluntarioRegister: `${defaultProxy}/ContaVoluntario/register`,
    VoluntarioLogin: `${defaultProxy}/ContaVoluntario/login`,
    ObterONGVoluntariosByOngId: `${defaultProxy}/ONG/ong-voluntario`,
    ObterONGById: `${defaultProxy}/ONG`,
    AceitarVoluntario: `${defaultProxy}/ONG`,
    RemoverVoluntario: `${defaultProxy}/ONG`,
    ObterListaONG: `${defaultProxy}/Voluntario`,
    CandidatarONG: `${defaultProxy}/Voluntario`,
};

export default apiRequestEnpoints;
