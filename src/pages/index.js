import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            一个让React学习者能听懂、学的会、感觉好玩的网站
          </p>
          <h2>学习，什么时候都不晚，学点什么都有用！</h2>
          <br/>
          <Link to="/react-tutorial/get-started/introduction">
            <Button type="primary" size="large" style={{marginRight: 10}}>马上入门！</Button>
          </Link>
          <Button type="primary" size="large" href="https://github.com/leolau2012">Github</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage