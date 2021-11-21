import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum MessageType {
  PRIVATE = "PRIVATE",
  GAME = "GAME"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly phone_number: string;
  readonly score?: number;
  readonly game?: Game;
  readonly messages?: Message[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Game {
  readonly id: string;
  readonly players: string[];
  readonly state?: number[];
  readonly turn?: number;
  readonly roomId: number;
  readonly messages?: Message[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

export declare class Message {
  readonly id: string;
  readonly message: string;
  readonly author: User;
  readonly type: MessageType | keyof typeof MessageType;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userMessagesId?: string;
  readonly gameMessagesId?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}