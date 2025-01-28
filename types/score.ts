
import { Player } from './player';

// Surely not the best choice
export type Love = {
  kind: 'LOVE';
};

export type Fifteen = {
  kind: 'FIFTEEN';
};

export type Thirty = {
  kind: 'THIRTY';
};

export type Score = Points | Forty | Deuce | Advantage | Game;

export type Point = Love | Fifteen | Thirty;

export type PointsData = {
  PLAYER_ONE: Point;
  PLAYER_TWO: Point;
};

export type Points = {
  kind: 'POINTS';
  pointsData: PointsData;
};

export const points = (
  playerOnePoints: Point,
  playerTwoPoints: Point
): Points => ({
  kind: 'POINTS',
  pointsData: {
    PLAYER_ONE: playerOnePoints,
    PLAYER_TWO: playerTwoPoints,
  },
});

// Exerice 0: Write all type constructors of Points, Deuce, Forty and Advantage types.

export type Deuce = {
  kind: 'DEUCE';
};

export type Forty = {
  kind: 'FORTY';
  fortyData: FortyData;
};

export type Advantage = {
  kind: 'ADVANTAGE';
  player: Player;
};

export type FortyData = {
  player: Player; // The player who have forty points
  otherPoint: Point; // Points of the other player
};


export const advantage: (player: Player) => Advantage = (player) => ({
  kind: 'ADVANTAGE',
  player,
});

export const forty: (player: Player, otherPoint: Point) => Forty = (player, otherPoint) => ({
  kind: 'FORTY',
  fortyData: {
    player,
    otherPoint
  },
});

export const thirty:() => Thirty = () => ({
  kind: 'THIRTY',
});

export const deuce: () => Deuce = () => ({
  kind: 'DEUCE',
});

export type Game = {
  kind: 'GAME';
  player: Player;
};

export const game = (winner: Player): Game => ({
  kind: 'GAME',
  player: winner,
});

