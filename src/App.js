import React from 'react';
//import logo from './logo.svg';
import './style/css/App.css';
import Appcontent from './componets/app_content';
import Headers from './componets/app_header';
import Footer from './componets/app_footer';

class App extends React.Component {


//function App() {
render(){

return (
    <div className="">
          <Headers/>
          <Appcontent/>
          <Footer/>
    </div>
  );
}
}
export default App;
