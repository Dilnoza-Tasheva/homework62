import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import About from "./Containers/About/About.tsx";
import Contacts from "./Containers/Contacts/Contacts.tsx";
import ToolBar from "./Components/ToolBar/ToolBar.tsx";


const App = () => {

  return (
    <>
        <header>
        <ToolBar/>
        </header>
        <main className="container mt-4">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<h4>Not found</h4>}/>
            </Routes>
        </main>
    </>
  );
};

export default App;
