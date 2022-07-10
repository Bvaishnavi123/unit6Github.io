import './App.css';
import Comments from './Components/Comments';
import { Folder } from './Components/Folder';
import { Data } from './data/Data';
import {FolderData} from './data/FolderData';

function App() {
  return (
    <div className="App">
      <Comments data={Data}/>
      <br />
      <br />
      <hr />
      <Folder data = {FolderData}/>
    </div>
  );
}

export default App;