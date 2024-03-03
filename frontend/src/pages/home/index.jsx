import HomeSection from "../../components/homeSection";
import NavbarHome from "../../components/navbarHome";
import ProfileSection from "../../components/profileSection";
import TechToolSection from "../../components/techToolSection";

function Home() {
    return (
        <div>
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
        </div>
    );
}

export default Home;
