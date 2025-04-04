import { Route, Routes } from "react-router-dom";
import Text1 from "./components/Text1";
import Text3 from "./components/Text3";

const Router1 =()=>{
    return (
     <Routes>
      <Route element={<Text3/>}  path="/"/>
     </Routes>
    )
}

export default Router1;