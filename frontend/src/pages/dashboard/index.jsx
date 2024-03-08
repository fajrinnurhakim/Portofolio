import { Helmet } from "react-helmet";
import NavbarDashboard from "../../components/navbarDashboard";
import Footer from "../../components/footer";

function Dashboard() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Fajrin Nurhakim</title>
            </Helmet>
            <div>
                <NavbarDashboard />
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;
