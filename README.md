## [front/react] Checkboxes

## Instructions

Build a simple **React** application to handle multiple selection in lists.

### The subject

1. Display 5 checkboxes
2. The first one will select/unselect every checkboxes
3. The others will select themselves
4. Checking all items will select the "select all" checkbox automatically

**Some possible cases:**

```m
[ ] Select all

[ ] Item 1
[ ] Item 2
[ ] Item 3
[ ] Item 4
```

```m
[x] Select all

[x] Item 1
[x] Item 2
[x] Item 3
[x] Item 4
```

```m
[ ] Select all

[x] Item 1
[ ] Item 2
[x] Item 3
[x] Item 4
```

### Guidelines

- Use React.js to render the view
- Push your code to a Github repository
- Document what you've done

### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern javascript





## [front/react] Github user search

## Instructions

Create an input text in which as the user types in, launch a search against
Github users and return a result list.

### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [create react app](https://github.com/facebook/create-react-app).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Bonus: manage edge cases (no results, github api rate limit)

### Guidelines

- Use React.js to render the view
- Push your code to a Github repository
- Document what you've done

### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern javascript
