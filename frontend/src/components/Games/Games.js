import React, { useState, useEffect } from "react";
import api from "../../api";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        // Vérif du headers
        // console.log("----->", api.defaults.headers);

        //Requête à l'API Twitch pour obtenir les top-games
        const response = await api.get("https://api.twitch.tv/helix/games/top");

        const dataArray = response.data.data;

        const finalData = dataArray.map((game) => {
          let newURL = game.box_art_url
            .replace("{width}", "250")
            .replace("{height}", "300");
          game.box_art_url = newURL;

          return game;
        });

        setGames(finalData);
        // console.log("FINAL DATA =====>", finalData);
        // console.log(games);
      } catch (error) {
        if (error.response) {
          // La requête a été faite et le serveur a répondu avec un statut différent de 2xx
          console.error("Erreur de la réponse :", error.response.data);
          console.error("Status :", error.response.status);
          console.error("Headers :", error.response.headers);
        } else if (error.request) {
          // La requête a été faite mais aucune réponse n'a été reçue
          console.error("Erreur de la requête :", error.request);
        } else {
          // Quelque chose s'est passé lors de la configuration de la requête
          console.error("Erreur :", error.message);
        }
      }
    };

    fetchGames();
  }, []);

  // console.log("----->", games);

  return (
    <div>
      <h1 className="titleGames">Jeux les plus populaires</h1>
      <div className="flexAccueil">
        {games.map((game, index) => {
          return (
            <div key={index} className="cardGames">
              <img
                src={game.box_art_url}
                alt="Game Poster"
                className="imgCard"
              />
              <div className="cardBodyGames">
                <h5 className="titleCardGame">{game.name}</h5>
                <div className="btnCard">Regarder {game.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
