namespace Infra.DatabaseScripts
{
    internal class VoluntarioScripts
    {
        public const string ObterONGS = "SELECT * FROM ONGs";
        public const string CandidatarONG = @"
            INSERT INTO ONGVoluntarios
                (OngId, VoluntarioId, VoluntarioAprovado)
            VALUES 
                (@ongId, @voluntarioId, @voluntarioAprovado)
        ";
    }
}
