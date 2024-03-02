import HomeSection from "../../components/homeSection";
import NavbarHome from "../../components/navbarHome";
import ProfileSection from "../../components/profileSection";

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
        </div>
    );
}

export default Home;
