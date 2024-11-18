
import Profiles from "./public/Profiles"
import StackPage from "./public/StackPage"
import AboutCarousel from './public/AboutCarousel'
import MyProject from "./public/ProjectPage";
import ExperiencePage from "./public/ExperiencePage";
import GithubRepository from "./component/home/github-repository";
import FirstView from "./component/home/FirstView";
import Preloader from "./component/common/Preloader";
import TextReveal from "./component/common/TextReveal";
import TextScroll from "./component/common/TextScroll";
import HoverImage from "./component/common/HoverImage";

export default function Home() {
  return (
    <main className="relative mx-auto w-screen items-center justify-center mb-auto bg-zinc-100">
      {/* <Preloader /> */}
      <Profiles />
      <HoverImage />
      {/* <TextReveal />       */}
      <ExperiencePage />
      <MyProject />
      {/* <AboutCarousel /> */}
      {/* <StackPage /> */}


      <GithubRepository />
    </main>
  );
}
