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

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
