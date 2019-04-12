import React from "react"

import { Area } from "salad-ui.chart"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.css"

const chartData = [
  { time: new Date("2019-04-12"), value: 2 },
  { time: new Date("2019-04-13"), value: 4 },
  { time: new Date("2019-04-14"), value: 8 },
  { time: new Date("2019-04-15"), value: 16 },
  { time: new Date("2019-04-16"), value: 32 },
  { time: new Date("2019-04-17"), value: 64 },
  { time: new Date("2019-04-18"), value: 128 },
  { time: new Date("2019-04-19"), value: 264 },
]

const IndexPage = () => {
  return (
    <Layout>
      <Area width={900} height={300} data={chartData} />
      <SEO title="Home" keywords={[`optimal`, `moment`, `gaming`]} />
    </Layout>
  )
}

export default IndexPage
