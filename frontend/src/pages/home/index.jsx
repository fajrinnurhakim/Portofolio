import HomeSection from "../../components/homeSection";
import NavbarHome from "../../components/navbarHome";

function Home() {
    return (
        <div>
            <NavbarHome />
            <section id="home">
                <HomeSection />
            </section>
        </div>
    );
}

export default Home;
