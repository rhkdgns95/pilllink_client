import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

const cache = new InMemoryCache();
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
    // uri: "https://pilllink.herokuapp.com/graphql"
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
            UserLoggedIn: (_, { token }, { cache }) => {
                localStorage.setItem('x-jwt', token);
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
            UserLoggedOut: (_, __, { cache, client}) => {
                
                localStorage.removeItem('x-jwt');
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