import Header from './Header.jsx';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';

export default function App() {
  return (
    <div className="app h-[100vh] bg-black">
      <div className="app__wrapper grid grid-cols-5 grid-row-auto gap-2.5 px-2 max-w-2k font-bold mx-auto overflow-hidden">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
