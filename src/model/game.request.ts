import { Anuncio } from "./anuncio.request";

export interface GameRequest {
    idGame: number,
    nomeGame: string,
    image: string,
    anuncios: Anuncio[],
}