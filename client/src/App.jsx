/*
  DOCUMENTATION:

  In this file the different components that are defined in the "index.js" file that is in the "Components" folder are called.
*/
import {Navbar, Welcome, AboutUs, Technology, CodeModalComponent, Footer} from './Views';

const App = () => {
  return (
    <div className="">
       <Navbar/>
       <Welcome/>
       <AboutUs/>
       <Technology/>
       <CodeModalComponent/>
       <Footer/>
    </div>
  )
}

export default App
