import { apiAxios } from "./interceptor";

export const gameService = () => {
  return apiAxios("/Game", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .catch((error) =>
    error.request.status === 403 ? (window.location.href = "/login") : null
  );
};

export const postGameService = (game: { nomeGame?: string; image?: string }) => {
  return apiAxios("/Game", {
    method: "POST",
    data: game,
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) =>
    error.request.status === 403 ? (window.location.href = "/login") : null
  );
};

export const getGameById = (gameId: number) => {
    return apiAxios(`/Game/${gameId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) =>
        error.request.status === 403 ? (window.location.href = "/login") : null
      );
}

export const saveAnuncio = (days: string[], idGame: number) => {
  return apiAxios(`/anuncio`, {
    method: "POST",
    data: {idGame, diasSemanas: days},
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) =>
    error.request.status === 403 ? (window.location.href = "/login") : null
  );
}