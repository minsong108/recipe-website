import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Sign_Up from './pages/sign-up';
import Search from './pages/search';
import Post from './pages/post';
import Account from './pages/MyAccount/MyAccount';
import fromOriginal from './pages/OriginalSearch';
import MyInformation from './pages/MyAccount/MyInformation';
import MyPost from './pages/MyAccount/MyPost';
import MyFavorite from './pages/MyAccount/MyFavorite';

import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {

      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }

      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      }
      else {
        setUser(null);
      }
    })
    return unsubscribe
  }, [])


  return (

    <div className="App">

      {/* {<Post user={user} />} */}
      {console.log(user)}

      <Router>

        <NavBar user={user}/>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-up' exact component={Sign_Up} />
          <Route path='/search' exact component={Search} />
          <Route path='/originalSearch' exact component={fromOriginal} />
          <Route path='/post' exact component={Post} />
          <Route path='/account' exact component={Account} />
          <Route path='/myInformation' exact component={MyInformation} />
          <Route path='/myPost' exact component={MyPost} />
          <Route path='/myFavorite' exact component={MyFavorite} />
        </Switch>

      </Router>
      {/* <h1>Welcome to Claire's Cooking class</h1> */}
    </div>
  );
}

export default App;
