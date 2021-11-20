/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($owner: String!) {
    onCreateGame(owner: $owner) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($owner: String!) {
    onUpdateGame(owner: $owner) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($owner: String!) {
    onDeleteGame(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String!) {
    onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String!) {
    onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String!) {
    onDeleteMessage(owner: $owner) {
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
