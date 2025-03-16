import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PlaceDetailPage from "./pages/PlaceDetailPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place/:id" element={<PlaceDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App

