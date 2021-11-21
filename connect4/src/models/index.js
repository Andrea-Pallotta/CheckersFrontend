// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageType = {
  "PRIVATE": "PRIVATE",
  "GAME": "GAME"
};

const { User, Game, Message } = initSchema(schema);

export {
  User,
  Game,
  Message,
  MessageType
};