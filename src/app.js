import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import Landing from "./landing";
import Sectiontwo from "./sectiontwo";


const App=()=>{

return (
<div className="mainapp">
<Navbar></Navbar>
<Landing></Landing>
<Sectiontwo></Sectiontwo>
</div>
)
}


export default App;
