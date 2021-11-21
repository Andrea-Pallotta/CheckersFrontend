import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import * as subscriptions from "../../graphql/subscriptions";
import { API } from "aws-amplify";

const getUser = async (username) => {
  await API.graphql({
    query: queries.getUserByUsername,
    variables: { username },
  });
};

const graphql = {
  queries,
  mutations,
  subscriptions,
  getUser,
};
export default graphql;
