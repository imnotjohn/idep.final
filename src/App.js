/*
npm run deploy
via
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
*/

import WordGraph from './components/WordGraph'; // Working Prototype of WordVec + Edge Visualizations
// import Example from './components/Example'; // Example Component

function App() {
  return (
    <div id="App">
      <WordGraph />
    </div>
  );
}

export default App;
