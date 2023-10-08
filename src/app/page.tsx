import Client from "./components/client/page";
import Help from "./components/help/page";
import Hero from "./components/hero/page";
import Manage from "./components/manage/page";
import Navbar from "./components/navbar/page";
import Tesla from "./components/tesla/page";
import UserLogin from "./components/userLogin/page";
import Caring from "./components/caring/page";
import FooterHead from "./components/footerHead/page";
import Footer from "./components/footer/page";
import { data, security } from "./data/dataFile";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Manage />
      <UserLogin data={data} />
      <Help />
      <UserLogin data={security} />
      <Tesla />
      <Caring/>
      <FooterHead />
      <Footer/>
    </>
  )
}
