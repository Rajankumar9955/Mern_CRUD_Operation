
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./insert";
import Display from "./Display";
import Delete from "./Delete";
import EditData from "./EditData";
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
          <Route path="delete" element={<Delete/>}/>;
          <Route path="editdata" element={<EditData/>}/>

          </Route>
        </Routes>
        </BrowserRouter>
    
    </>
  )
}
export default App;