export const searchUsers = {
  query: ({ query }) => fetch(`https://api.github.com/search/users?q=${query}`),
};
