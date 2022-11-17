import "./App.css";
import Announcement from "./Components/Announcement/Announcement";
import Banner from "./Components/Banner/Banner";
import Campus from "./Components/Campus/Campus";
import Card from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/Timeline/Timeline";
import Members from "./Components/Members/Members";

function App() {
  return (
    <>
      <Banner />
      <Timeline />
      <Card />
      <Announcement />
      <Campus />
      <Footer />
      {/* <Members/> */}
    </>
  );
}

export default App;
