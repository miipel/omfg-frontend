import React from "react"

import { Area } from "salad-ui.chart"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as api from '../api'
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
  // const getData = () => {
  //   api.getUserData('2019-03-01 00:00:00', '2019-03-01 03:00:00', '7B8P5X', 10)
  // }
  // const userData = getData()
  // console.log(userData)
  return (
    <Layout>
      <SEO title="Home" keywords={[`optimal`, `moment`, `gaming`]} />
      <Area width={900} height={300} data={userData} />
    </Layout>
  )
}

export default IndexPage
