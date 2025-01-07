
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./insert";
import Display from "./Display";
import EditData from "./EditData";
import Update from "./Update";
import Search from "./Search";
const App=()=>{
  return(
    <>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="update" element={<Update/>}/>;
          <Route path="editdata/:id" element={<EditData/>}/>
          <Route path="search" element={<Search/>}/>
          
          </Route>
        </Routes>
        </BrowserRouter>
    
    </>
  )
}
export default App;