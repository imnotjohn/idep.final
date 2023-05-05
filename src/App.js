/*
npm run deploy
via
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
*/

// import KnowledgeGraph from './components/KnowledgeGraph';
import BookGraph from './components/BookGraph';
// import WordGraph from './components/WordGraph'; // Working Prototype of WordVec + Edge Visualizations from Midterms
// import Example from './components/Example'; // Example Component
import ImagePlayground from './components/ImagePlayground';

function App() {

  // const style = {background: `radial-gradient(ellipse at ' + ${50} + '% ' + ${50} + '%, #ee8d76, #FFFFFF), radial-gradient(ellipse at top, #9b59b6, transparent)`};
  return (
    <div id="App">
      {/* <KnowledgeGraph /> */}
      {/* <ImagePlayground /> */}
      <BookGraph />
    </div>
  );
}

export default App;
