import React from 'react';
//import logo from './logo.svg';
import './style/css/App.css';
import Appcontent from './componets/app_content';
import Headers from './componets/app_header';

class App extends React.Component {


//function App() {
render(){

return (
    <div className="">
          <Headers/>
          <Appcontent/>
    </div>
  );
}
}
export default App;
