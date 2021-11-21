/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      phone_number
      score
      games {
        id
        players
        state
        turn
        roomId
        createdAt
        updatedAt
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      phone_number
      score
      games {
        id
        players
        state
        turn
        roomId
        createdAt
        updatedAt
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      phone_number
      score
      games {
        id
        players
        state
        turn
        roomId
        createdAt
        updatedAt
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      players
      state
      turn
      roomId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      players
      state
      turn
      roomId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      players
      state
      turn
      roomId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
      }
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
      }
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
      }
      type
      createdAt
      updatedAt
    }
  }
`;
