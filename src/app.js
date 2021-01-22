import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import Landing from "./landing";
import Sectiontwo from "./sectiontwo";
import Sectionthree from "./sectionthree";

const App=()=>{

return (
<div className="mainapp">
<Navbar></Navbar>
<Landing></Landing>
<Sectiontwo></Sectiontwo>
<Sectionthree></Sectionthree>
</div>
)
}


export default App;
