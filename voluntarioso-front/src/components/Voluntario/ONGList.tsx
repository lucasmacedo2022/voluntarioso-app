import { Box } from '@mui/material';
import { ONG } from '../../models/ONG';
import ONGSingle from './ONGSingle';

interface IVoluntarioList {
    ongList: ONG[];
    voluntarioId: number;
}

const ONGList = ({ ongList, voluntarioId }: IVoluntarioList) => {
    return (
        <Box paddingBottom={5}>
            {ongList?.map((ong) => (
                <ONGSingle key={ong.id} ong={ong} voluntarioId={voluntarioId} />
            ))}
        </Box>
    );
};

export default ONGList;
