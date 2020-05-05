import React from 'react';
import logo from './logo.svg';
import './App.css';
import index from './views/index';
import login from './views/login';
import router from "./router"
import FoodInfo from "./views/n_three/primaryRoute/FoodInfo";
import Message from "./views/n_three/primaryRoute/Message";
import SearchWenda from "./views/n_three/primaryRoute/SearchWenda";
import UpAnswer from "./views/n_three/primaryRoute/UpAnswer";
import UpQuestion from "./views/n_three/primaryRoute/UpQuestion";
import WendaInfo from "./views/n_three/primaryRoute/WendaInfo";
import Daren from "./views/n_two/components/Daren";
import Details from './views/n_one/components/details';
import Messageone from './views/n_one/components/message';
import Middlebox from './views/n_one/components/middlebox';
import More from "./views/n_one/components/more";
import Msearch from './views/n_one/components/msearch';
import Plus from './views/n_one/components/plus';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/FoodInfo"} component={FoodInfo}></Route>
          <Route path={"/Message"} component={Message}></Route>
          <Route path={"/SearchWenda"} component={SearchWenda}></Route>
          <Route path={"/UpAnswer"} component={UpAnswer}></Route>
          <Route path={"/UpQuestion"} component={UpQuestion}></Route>
          <Route path={"/WendaInfo"} component={WendaInfo}></Route>
          <Route path={"/odetails"} component={Details}></Route>
          <Route path={"/omessage"} component={Messageone}></Route>
          <Route path={"/omiddlebox"} component={Middlebox}></Route>
          <Route path={"/omore"} component={More}></Route>
          <Route path={"/omsearch"} component={Msearch}></Route>
          <Route path={"/oplus"} component={Plus}></Route>

          {
            router.map(v => (
              <Route {...v} key={v.path}></Route>
            ))
          }
        </Switch>

      </Router>

    </div>
  );
}

export default App;
