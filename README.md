# Udacity React Project: MyReads App

## About the Project

This is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server.

## File Structure

```bash
├── App component #  classifies each shelf as a property in an object, routes to books and search pages
    └──List Books Page  # given the bookshelves by the app component as a prop
    |   └── List Books Content Component # loops over the bookshelves object to list the 3 shelves
    |      └── Bookshelf Component # has its books
    |          └── Books Component
    |              └── Book Component
    └── Search Books Page
    |   └── Books Component
    |       └── Book Component

```

## App Component

The _App Component_ implements following:

- `updateShelf` which is a function that moves books from a shelf to another one or remove them from all shelves, and passes the `updateShelf` as a prop to both pages and eventually used by the last descendant which is the _Book Component_.
- Initializes two states, `books` and `bookshelves`, both have the same books but structured differently.
- Gets all books from the API, set to the `books` state.
- Classifies each book in their own shelf as a property in an object, set to the `bookshelves` state, the `bookshelves` is then passed to the main page as a prop.

## Books Component

The _Books Component_ was used in both the main page and the search page.

It has 3 props:

1. `books`: This _prop_ depends on each page:
   - The main page: the books on each shelf.
   - The search page: the books fetched by the search function.
2. `booksOnShelf`: This is mainly used in the search page to detect whether each book is on a shelf or not.
3. `onUpdateShelf`: This _prop_ is used in both pages to invoke the `updateShelf` function.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
