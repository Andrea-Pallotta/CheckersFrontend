/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      players
      state
      turn
      roomId
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      players
      state
      turn
      roomId
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      players
      state
      turn
      roomId
      messages {
        items {
          id
          message
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
      type
      createdAt
      updatedAt
    }
  }
`;
