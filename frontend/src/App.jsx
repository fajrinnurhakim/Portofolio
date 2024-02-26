import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import Award from "./pages/dashboard/awards";
import Education from "./pages/dashboard/educations";
import Experience from "./pages/dashboard/experiences";
import Portofolio from "./pages/dashboard/portofolios";
import Profile from "./pages/dashboard/profiles";
import Role from "./pages/dashboard/roles";
import Tech from "./pages/dashboard/teches";
import Tool from "./pages/dashboard/tools";

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
