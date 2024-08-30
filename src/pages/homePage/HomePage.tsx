import NavBarLayout from "../../layouts/navBarLayout/NavBarLayout"
import PresentationComp from "../../components/presentationComp/PresentationComp"
import FooterComp from "../../components/footerComp/FooterComp"
import ArticleCardsComp from "../../components/articleCardsComp/ArticleCardsComp"

const HomePage = () => {
  return (
    <div>
      <NavBarLayout/>
      <PresentationComp/>
      <ArticleCardsComp/>
      <FooterComp/>
    </div>
  )
}

export default HomePage
