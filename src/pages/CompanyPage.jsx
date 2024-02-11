import { useParams } from "react-router-dom"
import companiesData from './../companies.json'
import './CompanyPage.css'

function CompanyPage() {

  const { companySlug } = useParams()

  const foundCompany = companiesData.find((elm) => {
    return elm.slug === companySlug
  })

  return (
    <div className="CompanyPage">
      <h2>Company Details</h2>
      <article className="card">
        <img src={foundCompany.logo} alt={foundCompany.name} />
        <section>
          <h4 className="cardName">{foundCompany.name}</h4>
          <p className="cardWebsite">{foundCompany.website}</p>
          <p className="cardDescription">{foundCompany.description}</p>
        </section>
      </article>
    </div>
  )
}

export default CompanyPage
