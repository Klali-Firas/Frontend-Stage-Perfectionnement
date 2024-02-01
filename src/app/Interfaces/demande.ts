import { Statut } from "./statut";

export interface Demande {
    id_demande?: number;
    date_demande: Date;
    annee_demande: number;
    type_demande: string;
    num_demande: number;
    statut?: Statut;
    date_saisie?: Date;
    objet: string;
    id_agent: number;
    date_deliberation: Date;
    nature_demande: string;
    signature: string;
    date_signature: Date;
    remarque?: string;
    text: string;
}
