namespace Infra.DatabaseScripts
{
    internal class ONGScripts
    {
        public const string ObterONGVoluntarioInfo = @"    
            SELECT * FROM ONGs o
            INNER JOIN ONGVoluntarios ov
            ON o.Id == ov.OngId
            INNER JOIN Voluntarios v
            ON ov.VoluntarioId == v.VolunId
            WHERE o.Id == @ongId
        ";

        public const string ObterONGById = @"
            SELECT * FROM ONGs WHERE Id = @ongId
        ";

        public const string AceitarVoluntario = @"
            UPDATE ONGVoluntarios 
            SET VoluntarioAprovado = true
            WHERE OngId == @ongId AND VoluntarioId == @voluntarioId
        ";
        
        public const string RemoverVoluntario = @"
            DELETE FROM ONGVoluntarios 
            WHERE OngId == @ongId AND VoluntarioId == @voluntarioId
        ";
    }
}
