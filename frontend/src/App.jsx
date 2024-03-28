import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Education from "./pages/dashboard/education";
import Experience from "./pages/dashboard/experience";
import Portofolio from "./pages/dashboard/portofolio";
import Profile from "./pages/dashboard/profile";
import Socmed from "./pages/dashboard/socmed";
import Tech from "./pages/dashboard/tech";
import Tool from "./pages/dashboard/tool";
import Award from "./pages/dashboard/award";
import PortofolioPage from "./pages/postofolioPage";
import ExperiencePage from "./pages/experiencePage";
import NotFound from "./components/notFound";
import { useEffect } from "react";
import Loading from "./components/loading";
import stateAward from "./hooks/award";
import stateEducation from "./hooks/education";
import stateExperience from "./hooks/experience";
import statePortofolio from "./hooks/portofolio";
import stateProfile from "./hooks/profile";
import stateSocmed from "./hooks/socmed";
import stateTech from "./hooks/tech";
import stateTool from "./hooks/tool";

function App() {
    const { loading: awardLoading, loadAwards } = stateAward();
    const { loading: educationLoading, loadEducations } = stateEducation();
    const { loading: experienceLoading, loadExperiences } = stateExperience();
    const { loading: portofolioLoading, loadPortofolios } = statePortofolio();
    const { loading: profileLoading, loadProfiles } = stateProfile();
    const { loading: socmedLoading, loadSocmeds } = stateSocmed();
    const { loading: techLoading, loadTeches } = stateTech();
    const { loading: toolLoading, loadTools } = stateTool();

    useEffect(() => {
        loadAwards();
        loadEducations();
        loadExperiences();
        loadPortofolios();
        loadProfiles();
        loadSocmeds();
        loadTeches();
        loadTools();
    }, []);

    return (
        <>
            {awardLoading ||
            educationLoading ||
            experienceLoading ||
            portofolioLoading ||
            profileLoading ||
            socmedLoading ||
            techLoading ||
            toolLoading ? (
                <Loading />
            ) : (
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home />
                                </>
                            }
                        />

                        <Route
                            path="/portofolio"
                            element={
                                <>
                                    <PortofolioPage />
                                </>
                            }
                        />

                        <Route
                            path="/experiences"
                            element={
                                <>
                                    <ExperiencePage />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard"
                            element={
                                <>
                                    <Dashboard />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/awards"
                            element={
                                <>
                                    <Award />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/educations"
                            element={
                                <>
                                    <Education />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/experiences"
                            element={
                                <>
                                    <Experience />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/portofolios"
                            element={
                                <>
                                    <Portofolio />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/profiles"
                            element={
                                <>
                                    <Profile />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/socmeds"
                            element={
                                <>
                                    <Socmed />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/teches"
                            element={
                                <>
                                    <Tech />
                                </>
                            }
                        />

                        <Route
                            path="/dashboard/tools"
                            element={
                                <>
                                    <Tool />
                                </>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <>
                                    <NotFound />
                                </>
                            }
                        />
                    </Routes>
                </Router>
            )}
        </>
    );
}

export default App;
