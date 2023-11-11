/*
npm run deploy
via
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
*/

// import KnowledgeGraph from './components/KnowledgeGraph';
import BookGraph from './components/BookGraph';
// import Example from './components/Example'; // Example Component

function App() {

  return (
    <div id="App">
      {/* <KnowledgeGraph /> */}
      <BookGraph />
    </div>
  );
}

export default App;
