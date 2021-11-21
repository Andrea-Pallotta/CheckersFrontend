import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import * as subscriptions from "../../graphql/subscriptions";
import * as customQueries from "../../graphql/customQueries";
import { API, graphqlOperation } from "aws-amplify";
import { User } from "../../models";

const getUser = async (username) => {
  try {
    await API.graphql({
      query: customQueries.getUserByUsername,
      variables: { username },
    });
  } catch (err) {
    console.log(err);
  }
};

const insertUser = async (username, email, phone_number) => {
  try {
    return await API.graphql(
      graphqlOperation({
        query: mutations.createUser,
        variables: { input: new User(username, email, phone_number, 0) },
      })
    );
  } catch (err) {
    console.log(err);
  }

  return null;
};

const graphql = {
  queries,
  mutations,
  subscriptions,
  getUser,
  insertUser,
};
export default graphql;
