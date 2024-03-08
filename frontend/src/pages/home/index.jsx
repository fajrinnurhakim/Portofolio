import EducationSection from "../../components/educationSection";
import ExperienceSection from "../../components/experienceSection";
import Footer from "../../components/footer";
import HomeSection from "../../components/homeSection";
import NavbarHome from "../../components/navbarHome";
import PortofolioSection from "../../components/portofolioSection";
import ProfileSection from "../../components/profileSection";
import TechToolSection from "../../components/techToolSection";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Fajrin Nurhakim</title>
            </Helmet>
            <NavbarHome />
            <section id="home">
                <HomeSection />
            </section>
            <section id="profiles" className="bg-base-300">
                <ProfileSection />
            </section>
            <section id="skills">
                <TechToolSection />
            </section>
            <section id="educations" className="bg-base-300">
                <EducationSection />
            </section>
            <section id="experiences">
                <ExperienceSection />
            </section>
            <section id="portofolios" className="bg-base-300">
                <PortofolioSection />
            </section>
            <Footer/>
        </div>
    );
}

export default Home;
