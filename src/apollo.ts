import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";

const cache: InMemoryCache = new InMemoryCache();
const link: HttpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const getCacheData = () => {
    const data = localStorage.getItem('x-jwt') || "";
    return data === "" ? false : true;
}

cache.writeData({
    data: {
        auth: {
            __typename: "Auth",
            loggedIn: getCacheData()
        }
    }
});
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