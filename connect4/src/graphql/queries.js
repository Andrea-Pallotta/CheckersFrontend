/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
      score
      games {
        id
        players {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        winner {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        state {
          id
        }
        turn
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      messages {
        id
        message
        author {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        type
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        score
        games {
          id
          turn
          createdAt
          updatedAt
          owner
        }
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      players {
        id
        username
        email
        phone_number
        score
        games {
          id
          turn
          createdAt
          updatedAt
          owner
        }
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      winner {
        id
        username
        email
        phone_number
        score
        games {
          id
          turn
          createdAt
          updatedAt
          owner
        }
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      state {
        id
        cells {
          id
          state
        }
      }
      turn
      messages {
        id
        message
        author {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        type
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        players {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        winner {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        state {
          id
        }
        turn
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      author {
        id
        username
        email
        phone_number
        score
        games {
          id
          turn
          createdAt
          updatedAt
          owner
        }
        messages {
          id
          message
          type
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        author {
          id
          username
          email
          phone_number
          score
          createdAt
          updatedAt
          owner
        }
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
