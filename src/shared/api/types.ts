// Запросы
export interface AppInitRequest {
  data: string | null;
  query: string | null;
}

export interface AddTapModel {
  tapCounter: number;
  tapCreated: number;
}

// Ответы и модели
export interface AuthResultModel {
  token: string | null;
  userId: number;
}

export interface GetMyFriendsModel {
  inviteLink: string | null;
  invitedFriendCount: number;
  friends: Friend[] | null;
}

export interface Friend {
  avatar: string | null;
  league: Leagues;
  leagueText: string | null;
  name: string | null;
  balance: number;
}

export interface GetMyMissionDetailsModel {
  id: string;
  title: string | null;
  description: string | null;
  link: string | null;
  isComplitted: boolean;
  reward: number;
}

export interface GetMyMissionsModel {
  available: Mission[] | null;
  completed: Mission[] | null;
  completedCount: number;
  reward: number;
}

export interface GetPointModel {
  value: number;
  scalePoint: number;
  position: number;
  scaleZone: number;
  limit: number;
  lastClick: string;
  updateDate: string | null;
}

export interface Mission {
  id: string;
  title: string | null;
  description: string | null;
  imageLink: string | null;
  answer: string | null;
  type: MissionTaskType;
  twitterTaskType: TwitterTaskType;
  timeoutDate: string | null;
  reward: number;
}

// Перечисления
export enum Leagues {
  leagueBase = "leagueBase",
  league1 = "league1",
  league2 = "league2",
  league3 = "league3",
  league4 = "league4",
  league5 = "league5",
  league6 = "league6",
  league7 = "league7",
  league8 = "league8"
}

export enum MissionTaskType {
  none = "none",
  twitter = "twitter",
  telegram = "telegram",
  discord = "discord",
  question = "question",
  link = "link"
}

export enum TwitterTaskType {
  subscribe = "subscribe",
  like = "like",
  retweet = "retweet",
  createTweet = "createTweet"
}
