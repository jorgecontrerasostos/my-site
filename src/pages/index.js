import React from "react"
import "../../static/css/global.css"
import Layout from "../components/Layout"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Me from "../../static/svg/me.svg"

export default () => {
  return (
    <>
      <Layout>
        <section className="presentation" id="presentation">
          <div className="mt-56 px-56 text-center">
            <h1 className="font-extrabold text-6xl">
              Hello! My name is Jorge,<br></br> and this is my website!
            </h1>
            <button className="get-started-button text-white font-bold py-2 px-4 rounded-full">
              <AnchorLink href="#aboutme">Get Started!</AnchorLink>
            </button>
          </div>
        </section>
        <section className="aboutme mt-24" id="aboutme">
          <h1 className="font-extrabold text-6xl text-center">This is me</h1>
          <div>
            <div className="px-64 pt-10">
              <img className="w-full" src={Me} alt="Me"></img>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
