import logo from './logo.svg';
import './App.css';
import HOme from './Component/Home/HOme';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Tables1 from './Component/allTables/Tables1';
import SideNavbar from './Component/Header/SideNavbar';
import SrcByRange from './Component/SerachByRange/SrcByRange';
import Srcview from './Component/SerachByRange/Srcview';
import Capacity from './Component/StudentEnrollment/Capacity';
import Unusedchart from './Component/allTables/Unused/Unusedchart';
import ClassRoom from './Component/allTables/Classroomsize/ClassRoom';
import ChartTable from './Component/StudentEnrollment/ChartTable';


function App() {
  return (
    <div className="App ">
     
        <SideNavbar></SideNavbar>

      <div className=''>
        <Routes>
          <Route path='/Table1' element={<Tables1></Tables1>}></Route>
          <Route path='/' element={<HOme></HOme>}></Route>
          <Route path='/input1'element={<SrcByRange></SrcByRange>}></Route>
          <Route path='/srcview'element={<Srcview></Srcview>}></Route>
          <Route path='/mincap'element={<Capacity></Capacity>}></Route>
          <Route path='/unused'element={<Unusedchart></Unusedchart>}></Route>
          <Route path='/ClassRoom'element={<ClassRoom></ClassRoom>}></Route>
          <Route path='/mincaptable'element={<ChartTable></ChartTable>}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
