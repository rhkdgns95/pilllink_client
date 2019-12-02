import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

const cache: InMemoryCache = new InMemoryCache();
const getCacheData = () => localStorage.getItem('x-jwt') || "";

cache.writeData({
    data: {
        auth: {
            __typename: "Auth",
            loggedIn: Boolean(getCacheData())
        }
    }
});

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql"
});
const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            "X-JWT": localStorage.getItem("x-jwt") || ""
        }
    });
    return forward(operation);
});

const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
    cache,
    link,
    resolvers: {
        Mutation: {
            userLoggedIn: (_, args, cache: InMemoryCache) => {
                cache.writeData({
                    data: {
                        auth: {
                            __typename: "Auth",
                            loggedIn: true
                        }
                    }
                });
                return null;
            },
            userLoggedOut: (_, args, cache: InMemoryCache) => {
                cache.writeData({
                    data: {
                        auth: {
                            __typename: "Auth",
                            loggedIn: false
                        }
                    }
                });

                return null;
            }
        }
    }
});
export default client;