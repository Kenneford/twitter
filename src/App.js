
import './App.css';
import LeftPane from './components/LeftPane';
import MainPane from './components/MainPane';
import RightPane from './components/RightPane';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from './components/Messages';
// import AllMessages from './components/AllMessages';

const users = [   
    {"_id": 101,
    "name": {
        "title": "Ms",
        "first": "Liesje",
        "last": "Smal"
      },
      "username":"smal42",
      "email": "liesje.smal@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 42,
      "City": "San Diego",
      "Description": "Liesje has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

      {"_id": 102,
        "name": {
        "title": "Mr",
        "first": "Leslie",
        "last": "Nielsen"
      },
      "username":"nielsen45",
      "email": "liesje.smal@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 45,
      "City": "Frankfurt",
      "Description": "Leslie has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

    {"_id": 103,
    "name": {
        "title": "Mr",
        "first": "Karl",
        "last": "Polanski"
      },
      "username":"polanski34",
      "email": "liesje.smal@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 34,
      "City": "Sant Petersburg",
      "Description": "Karl has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

      {"_id": 104,
        "name": {
        "title": "Mr",
        "first": "Peter",
        "last": "Griffin"
      },
      "username":"griffin54",
      "email": "peter.griffin@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 54,
      "City": "Quahog",
      "Description": "Liesje has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

    {"_id": 105,
    "name": {
        "title": "Ms",
        "first": "Won",
        "last": "Ja Xao"
      },
      "username":"jaxao33",
      "email": "won.jaxao@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 33,
      "City": "Pekin",
      "Description": "Won has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

      {"_id": 106,
        "name": {
        "title": "Mr",
        "first": "Clark",
        "last": "Ken"
      },
      "username":"ken38",
      "email": "clark.ken@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 38,
      "City": "Lhasa",
      "Description": "clark has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

    {"_id": 107,
    "name": {
        "title": "Ms",
        "first": "Kathy",
        "last": "Felps"
      },
      "username":"felpss22",
      "email": "kathy.felps@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 22,
      "City": "Atlanta",
      "Description": "Kathy has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    },

      {"_id": 108,
        "name": {
        "title": "Mr",
        "first": "Phao",
        "last": "Chen"
      },
      "username":"chen41",
      "email": "phao.chen@example.com",
      "picture":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "Age": 41,
      "City": "Nashville",
      "Description": "Phao has worked in the technology and association space for 15 years. He is the CEO and President of MemberClicks, an all-in-one membership management software company, and has helped them grow from just under 300 customers in 2004 to 3,000 today across North America"
    }
]      


function App() {
  return (
    <div className="App">
        <LeftPane />
        <MainPane 
        users={users} />
        <RightPane />
            {/* <Routes>
                <Route path='/messages'>
                    <LeftPane />
                </Route>
            </Routes> */}
    </div>
  );
}

export default App;
