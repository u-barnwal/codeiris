export const refresh = 'refresh-token';
console.log(process.env);
export const host = process.env.NEXT_PUBLIC_SERVER_PATH;
export const graphQLEndpoint = `${host}/graphql`;
export const refreshUrl = `${
  host ? host : 'https://dev.codeiris.dev'
}/auth/refresh-token`;
