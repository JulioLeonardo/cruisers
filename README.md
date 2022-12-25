<h1 align="center">Cruisers - Your home at sea</h1>

<h2 align="center">
 <a href="#requisites">Prerequisites</a> • 
 <a href="#running">Running the project</a> • 
 <a href="#tech">Tech</a> • 
 <a href="#scripts">Scripts</a> • 
 <a href="#disclaimer">Disclaimer</a> • 
 <a href="#author">Author</a> • 
 <a href="#licence">Licence</a>
</h2>

## Features

- [x] Ships List
- [x] Alternative gallery view
- [x] Switch between list and gallery view at any given time
- [x] Infinite scroll
- [x] Ships filter by type
- [x] Page is interactive


<h2 id="requisites">
	Prerequisites
</h2>

<p>
Before starting, please install the following tools:
<a href="https://git-scm.com" target="_blank">Git</a>, <a href="https://nodejs.org/en/" target="_blank">Node.js</a> <br>
Besides that, it is always good to have a nice IDE such as <a href="https://code.visualstudio.com/" target="_blank">VScode</a>
</p>

<h2 id="running">
	Rodando o projeto
</h2>

```bash
# Clone the repo
$ git clone https://github.com/JulioLeonardo/cruisers

# Access the project's folder
$ cd cruisers

# Open it on vsCode
$ code .

# Use the terminal to install the deps
$ yarn

# Execute it on dev mode 
 
$ yarn start

# App will run on port :3000 - access <http://localhost:3000>
```
<h2 id="disclaimer">
	Disclaimer
</h2>

**If you get stuck on loading, uncommenting React strict mode will fix it. 
When developing, there is a issue that sometimes locks Apollo GraphQLs useQuery loading into true, 
when using strict mode.**

More info can be found here:
[`apollographql/apollo-client#9602`](https://github.com/apollographql/apollo-client/issues/9602/)
[`reactjs/reactjs.org#4534 (comment)`](https://github.com/reactjs/reactjs.org/issues/4534#issuecomment-1085358976/)

<h2 id="tech">
	Tech
</h2>

Following tech was used on building this app:

- [Typesctipt](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Apollo GraphQL](https://www.apollographql.com/docs/react/)
- [MaterialUI](https://mui.com/material-ui/getting-started/overview/)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

<h2 id="scripts">
	Scripts
</h2>

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<h2 id="author">
	Author
</h2>

<a href="https://github.com/JulioLeonardo">
 <img style="border-radius: 50%;" src="https://i.imgur.com/5HQ9tWb.png?1" width="100px;" alt=""/>
 <br />
 <sub><b>Julio Leonardo</b></sub></a> <a href="https://github.com/JulioLeonardo" title="Julio">🚀
</a>


Built with ❤️ by Julio Leonardo 👋🏽 

[![Linkedin Badge](https://img.shields.io/badge/-Julio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/JulioLeonardoCarvalho/)](https://www.linkedin.com/in/JulioLeonardoCarvalho/) 
[![Gmail Badge](https://img.shields.io/badge/-juleolica@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:juleolica@gmail.com)](mailto:juleolica@gmail.com)

<h2 id="licence">
	Licence
</h2>

<img src="https://img.shields.io/badge/license-MIT-green" alt="license"/>
