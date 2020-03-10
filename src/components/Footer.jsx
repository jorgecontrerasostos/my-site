import React from "react"
import "../../static/css/footer.css"

const Footer = () => {
  return (
    <footer className="container mx-auto py-16 px-3 mt-48 mb-8 footer">
      <div className="flex -mx-3 elements-container">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Contact Me!</h2>
          <ul className="mt-4 links">
            <li>Facebook</li>
            <li>
              <a href="https://twitter.com/contrerasostos">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jorge-contreras-ostos-66718a171/">
                Linked In
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Contributors</h2>
          <ul className="mt-4">
            <li>Positive Zero</li>
            <li>Freepik</li>
            <li>Favicon</li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Made by</h2>
          <h3 className="mt-4">Jorge Contreras Ostos 2020.</h3>
        </div>
      </div>
    </footer>
  )
}
export default Footer
