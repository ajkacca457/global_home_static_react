import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./navbar";
import Landing from "./landing";
import Sectiontwo from "./sectiontwo";
import Sectionthree from "./sectionthree";
import Sectionfour from "./sectionfour";
import Sectionfive from "./sectionfive";
import Footer from "./footer";


const App=()=>{

return (
<div className="mainapp">
<Navbar></Navbar>
<Landing></Landing>
<Sectiontwo></Sectiontwo>
<Sectionthree></Sectionthree>
<Sectionfour></Sectionfour>
<Sectionfive></Sectionfive>
<Footer></Footer>
</div>
)
}


export default App;
