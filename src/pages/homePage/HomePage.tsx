import NavBarLayout from "../../layouts/navBarLayout/NavBarLayout"
import HomeComp from "../../components/homeComp/HomeComp"
import FooterComp from "../../components/footerComp/FooterComp"
import ClientsComp from "../../components/clientsComp/ClientsComp"

const HomePage = () => {
  return (
    <div>
      <NavBarLayout/>
      <HomeComp/>
      <ClientsComp/>
      <FooterComp/>
    </div>
  )
}

export default HomePage
