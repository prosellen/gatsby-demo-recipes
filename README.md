# GATSBY DEMO RECIPES

A small Gatsby site that uses a public API to create a recipe page.

Created with the "Gatsby Minimal Starter" from the [Gatsby Starter library](https://www.gatsbyjs.com/starters/)

Feel free to contact me if you have any questions. Please create a pull request if you spot any mistakes or typos. Thanks.

## 🚀 Getting started

After cloning this repo, all you need to do is install and run the dev server

1. Install the necessary packages

   ```shell
   npm i
   ```

2. Set the environmental variables

   Just rename the `.env-template` to `.env`

3. Run the build-in development server and start hacking!

   ```shell
   # This runs "gatsby develop" in the background ... but with an ECMAScript module loader, because I'm fancy like that
   npm run start
   ```

   This will take a few seconds, after which the server should run under http://localhost:8000

4. (Optional) Once your happy with the result, build the HTML files

   ```shell
   # This runs "gatsby build" ... but with an ECMAScript module loader
   npm run build
   ```

   After that, you can find all the rendered and optimized file in `./public/`. Put them on a webserver somewhere or use

   ```shell
   # This runs "gatsby serve" ... but with an ECMAScript module loader
   npm run serve
   ```

   to view them locally

5. (Optional) If you experience problems, try purging the cache by running the `clean` script
   ```shell
   npm run clean
   ```

## 🎯 Play around with the code

Once the server is running on http://localhost:8000 try editing `src/pages/index.js` to see the changes in real time.

### 🤷‍♂️ What is where? This looks confusing!

Don't worry - here's a little tour through the project. Check out the official tutorials (see like below) to get an even better understanding

- Once you start the server, every `.js` file in `src/pages/` gets turned into its own page
- `gatsby-browser.js` (used in the browser) and `gatsby-ssr.js` (used during build) will use Gatsbys `wrapPageElement` API to wrap **all** pages in the `src/compoents/Layout.js` components, which adds the navigation (`src/components/Nav.js`), footer (`src/components/Footer.js`) and the basic CSS styles to all pages.
  - If you want a components that is used on every page, you can add it to `wrapPageElement` or to my `Layout.js`
  - Find the default styles in `src/styles/`
  - Components-specific styles are implemnted with [Styled Components](https://styled-components.com/)
- `gatsby-node.js` uses the Gatsby `sourceNodes` API on startup to create the data nodes which are later queried to create the pages. Look at the custom `fetchRecipesAndTurnIntoNodes` function to see how it's done
- the `createPages` in the same file then creates pages using the sourced node data. Look for the custom `turnRecipesIntoPages` function.
- you can look at **all** the sourced data in the [local GraphiQL explorer](http://localhost:8000/___graphql) and play around with it
  - `allRecipe` and `recipe` are created by the `fetchRecipesAndTurnIntoNodes` function in the line `type: 'Recipe',` and automatically added here
  - other entries like `allMarkdownRemark` and `allImageShap` are created by the plugins configured in `gatsby-config.js` - install more plugins to get more data to query! Yay!
  - don't worry if this looks strange at first. It's because it is. But once you've gotten a hang of it, it is really nice to use.

### 🤔 Where to go from here?

Fork the project and play around with it.
Or use a [Gatsby Starter](https://www.gatsbyjs.com/starters/) to create your own project - I'm not going to tell you how to live your life.

- create new pages by adding `.js` files to `src/pages/` (remember to add them to `src/components/Nav.js`, too)
- since the necessary plugins are already installed, you can additionally try to [add content using Markdown](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/) as a second source of data (Whooo! Multiple sources! Nice!)
- try using a different [Sample APIs](https://sampleapis.com/) (you will have to change the GraphQL queries, though)
- Gatsby has some handy [How-to Guides](https://www.gatsbyjs.com/docs/how-to/) where you can find solutions for common problems / tasks
- Important: if you make changes to the `gatsby-*.js` files in the root directory, you will have to restart the development server. All other pages are changed on the fly.

## 📚 Resources

Now that you have the project running, take a look at these fine resources to learn more:

- Start your Gatsby journey at the [Gatsby Homepage](https://www.gatsbyjs.com/)
- Look for [Gatsby Plugins](https://www.gatsbyjs.com/plugins) to see if it works with your favorite CMS/API/Content Source
- Take the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/) to get your feet wet with Static Site Generation ...
- ... or take the (highly recommended but paid) [Master Gatsby course](https://mastergatsby.com/) from Wes Bos
- Learn more about the [JAMStack](https://jamstack.org/) or find [Static Site Generators](https://jamstack.org/generators/) for other frameworks and languages
- Learn about [GraphQL](https://graphql.org/)
