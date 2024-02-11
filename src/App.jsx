import "./App.css"
import companiesData from './companies.json'
import technologiesData from './technologies.json'

import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import CompanyPage from "./pages/CompanyPage"
import TechnologyPage from "./pages/TechnologyPage"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/" element={<TechnologyPage />} />


      </Routes>
    </div>
  )
}

export default App

