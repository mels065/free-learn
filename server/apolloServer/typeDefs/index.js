import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDefs from "./users";

const types = [
    userTypeDefs
];

export default mergeTypeDefs(types);
