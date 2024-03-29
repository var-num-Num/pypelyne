import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
import styles from "../assets/connect.module.scss";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";

const db = [
  {
    name: "Richard Hendricks",
    url: "./img/richard.jpg",
  },
  {
    name: "Erlich Bachman",
    url: "./img/erlich.jpg",
  },
  {
    name: "Monica Hall",
    url: "./img/monica.jpg",
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg",
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg",
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <>
      <style jsx>{`
        .root {
          text-align: center;
          display: flex;
          justify-content: center;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
          // /* background: linear-gradient(#fff, #999); */
          // background: linear-gradient(#e66465, #9198e5);
        }

        .root > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }

        .app > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .row {
          flex-direction: row !important;
        }

        .row > * {
          margin: 5px;
        }

        h1 {
          font-family: "Damion", cursive;
          // color: #fff;
          text-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
        }

        h2 {
          // color: #fff;
        }

        .swipe {
          position: absolute;
        }

        .cardContainer {
          width: 90vw;
          max-width: 260px;
          height: 300px;
        }

        .card {
          position: absolute;
          background-color: #fff;
          width: 80vw;
          max-width: 260px;
          height: 300px;
          box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          background-size: cover;
          background-position: center;
        }

        .cardContent {
          width: 100%;
          height: 100%;
        }

        .swipe:last-of-type {
        }

        .card h3 {
          position: absolute;
          bottom: 0;
          margin: 10px;
          color: #fff;
        }

        .infoText {
          width: 100%;
          height: 28px;
          justify-content: center;
          display: flex;
          // color: #fff;
          animation-name: popup;
          animation-duration: 800ms;
        }

        .buttons {
          margin: 20px;
          display: flex;
        }

        .buttons button {
          flex-shrink: 0;
          padding: 10px;
          // border-radius: 5px;
          // border: none;
          // color: #fff;
          font-size: 18px;
          // background-color: #9198e5;
          transition: 200ms;
          margin: 0 10px;
          font-weight: bolder;
          width: 160px;
          box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
        }

        .buttons button:hover {
          transform: scale(1.05);
        }

        @keyframes popup {
          0% {
            transform: scale(1, 1);
          }
          10% {
            transform: scale(1.1, 1.1);
          }
          30% {
            transform: scale(0.9, 0.9);
          }
          50% {
            transform: scale(1, 1);
          }
          57% {
            transform: scale(1, 1);
          }
          64% {
            transform: scale(1, 1);
          }
          100% {
            transform: scale(1, 1);
          }
        }
      `}</style>
      <>
        <Head>
          <title>Welecome to your Profile</title>
        </Head>

        <main className="min-h-screen bg-gradient-to-tr from-green-400 to-blue-500 custom-blur flex items-center justify-center flex-col">
          <section id="main" className="glass rounded-3xl m-2 root">
            <div>
              <div className="app">
                <div>
                  <link
                    href="https://fonts.googleapis.com/css?family=Damion&display=swap"
                    rel="stylesheet"
                  />
                  <link
                    href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
                    rel="stylesheet"
                  />
                  <div className="cardContainer">
                    {characters.map((character, index) => (
                      <TinderCard
                        ref={childRefs[index]}
                        className="swipe"
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                      >
                        <div
                          style={{
                            backgroundImage: "url(" + character.url + ")",
                          }}
                          className="card"
                        >
                          <h3>{character.name}</h3>
                        </div>
                      </TinderCard>
                    ))}
                  </div>
                  <div className="buttons">
                    <button
                      className="flex flex-col items-center glass rounded-3xl"
                      onClick={() => swipe("left")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Swipe left!
                    </button>

                    <button
                      className="flex flex-col items-center glass rounded-3xl"
                      onClick={() => swipe("right")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                      Swipe right!
                    </button>
                  </div>
                  {lastDirection ? (
                    <h2 key={lastDirection} className="infoText text-gray-900">
                      You swiped {lastDirection}
                    </h2>
                  ) : (
                    <h2 className="infoText text-gray-900">
                      Swipe a card or press a button to get started!
                    </h2>
                  )}
                </div>
              </div>
            </div>
          </section>
          <Navigation />
        </main>
      </>
    </>
  );
}

export default Advanced;
