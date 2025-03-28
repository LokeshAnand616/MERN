"use client"; // Ensure it's a Client Component

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";

export default function ApolloProviderWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
