import NavBarLayout from "../../layouts/navBarLayout/NavBarLayout"
import HomeComp from "../../components/homeComp/HomeComp"
import FooterComp from "../../components/footerComp/FooterComp"
import CatalogComp from "../../components/catalogComp/CatalogComp"

const HomePage = () => {
  return (
    <div>
      <NavBarLayout/>
      <HomeComp/>
      <CatalogComp/>
      <FooterComp/>
    </div>
  )
}

export default HomePage
