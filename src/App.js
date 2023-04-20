/*
npm run deploy
via
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
*/

import KnowledgeGraph from './components/KnowledgeGraph';
// import WordGraph from './components/WordGraph'; // Working Prototype of WordVec + Edge Visualizations from Midterms
// import Example from './components/Example'; // Example Component

function App() {
  return (
    <div id="App">
      <KnowledgeGraph />
    </div>
  );
}

export default App;
