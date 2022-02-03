import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"

const Timeline = () => {
  return (
    <Layout>
      <Helmet>
        <title>Timeline</title>
      </Helmet>

      <header class="banner">
        <div class="container">
          <div class="col">
            <h1 class="banner__title">A Creative Timeline Animation</h1>
            <h2 class="banner__sub-title">With Pure CSS No Javascript</h2>
            <p class="banner__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus deleniti cum voluptatem illum animi dolor molestias necessitatibus a at laborum!</p>
          </div>
        </div>
      </header>

      <!-- Timeline Section -->
      <section class="timeline">
          <div class="container">
              <div class="timeline__wrapper">
                  <div class="timeline__progressbar"></div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">January 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">February 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">March 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
                  <div class="timeline__block">
                      <div class="timeline__block__bullet-point">
                          <span class="timeline__block__circle"></span>
                      </div>
                      <div class="timeline__block__head">
                          <h1 class="timeline__block__title">April 2020</h1>
                      </div>
                      <div class="timeline__block__body">
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      
    </Layout>
  )
}

export default Timeline