import { Commune } from "./commune";

export interface Utilisateur {
    nom: string;
    prenom: string;
    profile: string;
    login: string;
    id?: number;
    commune: Commune
}
