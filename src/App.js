import './App.css';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <>
      <header className="header ">
        <div className="header-top bg-dark"></div>
        <div className="header-bottom"></div>
        <UserList />
      </header>
    </>
  );
}

export default App;
