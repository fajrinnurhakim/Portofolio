import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Education from "./pages/dashboard/education";
import Experience from "./pages/dashboard/experience";
import Portofolio from "./pages/dashboard/portofolio";
import Profile from "./pages/dashboard/profile";
import Role from "./pages/dashboard/role";
import Tech from "./pages/dashboard/tech";
import Tool from "./pages/dashboard/tool";
import Award from "./pages/dashboard/award";

function App() {
    return (
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
                    path="/dashboard/roles"
                    element={
                        <>
                            <Role />
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
            </Routes>
        </Router>
    );
}

export default App;
