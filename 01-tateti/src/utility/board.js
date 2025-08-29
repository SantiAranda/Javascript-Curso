import { winner_combinations } from "../constants/constants";

export const checkWinner = (boardToCheck) => {
  for (const combo of winner_combinations) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};

export const saveGameState = (newBoard, newTurn) => {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", JSON.stringify(newTurn));
};

export const resetGameStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}
