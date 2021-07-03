export interface Player {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  matchId: string;
  name: string;
  team: string;
  operator: string;
  kills: number;
  headshots: number;
  deaths: number;
  score: number;
  defuser: number;
}