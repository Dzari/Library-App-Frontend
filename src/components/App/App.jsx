import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function App() {
  return (
    <div className="app overflow-hidden">
      <div className="app__wrapper grid grid-cols-5 grid-row-auto gap-2.5 px-2 max-w-2k bg-black font-bold mx-auto">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
