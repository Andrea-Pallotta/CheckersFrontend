export const getUserByUsername = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
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
