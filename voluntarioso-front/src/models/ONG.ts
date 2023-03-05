import { ONGVoluntario } from './ONGVoluntario';
import { Voluntario } from './Voluntario';

export interface ONG {
    id: number;
    nome: string;
    email: string;
    cnpj: string;
    categoria: string;
    ongVoluntarios: ONGVoluntario[];
    voluntarios: Voluntario[];
    missao: string;
    acoes: string;
    causa: string;
}
