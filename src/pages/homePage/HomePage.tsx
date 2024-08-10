import NavBarLayout from "../../layouts/navBarLayout/NavBarLayout"
import PresentationComp from "../../components/presentationComp/PresentationComp"
import FooterComp from "../../components/footerComp/FooterComp"
import CatalogComp from "../../components/catalogComp/CatalogComp"

const HomePage = () => {
  return (
    <div>
      <NavBarLayout/>
      <PresentationComp/>
      <CatalogComp/>
      <FooterComp/>
    </div>
  )
}

export default HomePage
