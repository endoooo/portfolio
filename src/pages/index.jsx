import React, { Component } from 'react'
import Helmet from 'react-helmet'

import './index.css'

class HomePage extends Component {
  render() {
    return (
      <main>
        <Helmet
          title="Eric Endo"
          meta={[
            { name: 'description', content: 'Eric Endo portfolio' },
            { name: 'keywords', content: 'eric endo, endoooo, design, ux, ui, front end' },
          ]}
        />
        <section className="home-hero">
          <div className="container">
            <p className="home-hero__text">
              <span className="home-hero__text-line">Olá! Meu nome é Eric Endo,</span>
              <span className="home-hero__text-line">designer e desenvolvedor front end</span>
            </p>
          </div>
        </section>
        <div className="container">
          <section className="home-section home-section--first">
            <div className="home-section__p5"></div>
            <div className="home-section__content home-section__content--first">
              <p className="home-section__content-text">Atualmente, estou buscando formas de contribuir com iniciativas de impacto social.</p>
              <a className="home-section__content-link" href="/2018">veja minhas metas p/ 2018</a>
            </div>
          </section>
          <section className="home-section">
            <div className="home-section__p5 home-section__p5--first"></div>
            <div className="home-section__content">
              <p className="home-section__content-text">Nos últimos anos, tenho ajudado a melhorar os negócios de empresas como Autopass, Azul, Luft e Repom através de tecnologia e experiência do usuário.</p>
              <a className="home-section__content-link" href="/profissional">saiba como</a>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default HomePage
