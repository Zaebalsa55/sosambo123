import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import OrderModal from '../components/OrderModal'
import QuestionModal from '../components/QuestionModal'
import SEOHead from '../components/SEOHead'
import Breadcrumbs from '../components/Breadcrumbs'
import { getSEOData } from '../utils/seoConfig'

const Articles = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('care') // 'care' или 'problems'
  const router = useRouter()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openQuestionModal = () => {
    setIsQuestionModalOpen(true)
  }

  const closeQuestionModal = () => {
    setIsQuestionModalOpen(false)
  }

  // Данные статей о проблемах стиральных машин
  const problemArticles = [
    {
      title: "Стиральная машина не сливает воду",
      href: "/neslivaetvodu",
      image: "/problems 2/11-300h.webp",
      alt: "Стиральная машина не сливает воду"
    },
    {
      title: "Стиральная машина не греет воду", 
      href: "/negreetvodu",
      image: "/problems 2/21-300h.webp",
      alt: "Стиральная машина не нагревает воду"
    },
    {
      title: "Стира��ьная машина проте��ает",
      href: "/protekaet", 
      image: "/problems 2/31-300h.webp",
      alt: "Стиральная машина протекает"
    },
    {
      title: "Стиральная машина шумит при отжиме",
      href: "/silnoshumit",
      image: "/problems/4-300h.webp", 
      alt: "Стиральная машина шумит при отжиме"
    },
    {
      title: "Стиральная машина не включается",
      href: "/nevkluchaetsa",
      image: "/problems 2/51-300h.webp",
      alt: "Стиральная машина не включается"
    },
    {
      title: "Стиральная машина зависает на программе",
      href: "/zavisaetnaprogramme",
      image: "/problems 2/61-300h.webp", 
      alt: "Стиральная машина зависает на программе"
    },
    {
      title: "Стиральная машина не отжимает",
      href: "/neotjimaet",
      image: "/problems 2/71-300h.webp",
      alt: "Стиральная машина не отжимает"
    },
    {
      title: "Стиральна�� машина не набирает воду",
      href: "/nenabiraetvodu", 
      image: "/problems/8-300h.webp",
      alt: "Стиральная машина не набирает воду"
    },
    {
      title: "У стиральной машины не открывается дверца",
      href: "/neotkrivaetsadverca",
      image: "/problems 2/91-300h.webp",
      alt: "Не открывается дверца стиральной машины"
    },
    {
      title: "Стиральная машина не крутит барабан",
      href: "/nekrutitbaraban",
      image: "/problems/10-300h.webp", 
      alt: "Стиральная машина не крутит барабан"
    }
  ]

  // Данные обычных статей  
  const generalArticles = [
    {
      title: "Как избавиться от жирных пятен на одежде в домашних условиях?",
      href: "/jirniepyatna",
      description: "Практическая инструкция по удалению жирных пятен с разных тканей в домашних условиях",
      image: "/ICONS/1.svg" // временная заглушка, можно заменить на подходящую картинку
    },
    {
      title: "Как самостоятельно удалить жвачку с одежды?", 
      href: "/jvachka",
      description: "Пошаговые способы и лайфхаки удаления застывшей жвачки с ткани",
      image: "/ICONS/25.svg" // временная заглушка
    },
    {
      title: "Как удалить пятна крови с одежды без следов?",
      href: "/vlapalisvkrov", 
      description: "Советы по быстрому и безопасному выведению пятен крови",
      image: "/ICONS/3.svg" // временная заглушка
    },
    {
      title: "Как правильно стирать пуховик в автоматической стиральной машине?",
      href: "/puhovik",
      description: "Руководство по стирке пуховиков: подготовка, выбор режима и моющего средства",
      image: "/ICONS/28.svg" // временная заглушка
    }
  ]

  const seoData = getSEOData('/articles')
  const baseUrl = 'https://remstirmash.od.ua'

  return (
    <>
      <main className="articles-container">
        <SEOHead
          title="Статьи о ремонте стиральных машин и уходе за одеждой | РемСтирМаш Од��сса"
          description="Полезные статьи о ремонте стиральных машин и уходе за одеждой. Решения проблем, советы по стирке и выведению пятен."
          keywords="статьи, ремонт стиральных машин, уход за одеждой, пятна, стирка, Одесса"
          canonical={`${baseUrl}/articles`}
        />
        <Header />

        {/* Заголовок страницы */}
        <section className="articles-hero">
          <div className="articles-hero-content">
            <h1 className="articles-main-title">Полезные статьи</h1>
            <p className="articles-subtitle">
              Экспертные советы по ремонту стиральных машин и уходу за одеждой
            </p>
          </div>
        </section>

        <Breadcrumbs style="white-left" />

        {/* Переключатель типов статей */}
        <section className="articles-switcher-section">
          <div className="articles-tabs">
            <button
              className={`tab-button ${activeTab === 'care' ? 'active' : ''}`}
              onClick={() => setActiveTab('care')}
            >
              <div className="tab-content">
                <h3 className="tab-title">Уход за одеждой</h3>
                <p className="tab-subtitle">Практические советы по стирке и выведению различных пятен</p>
              </div>
            </button>
            <button
              className={`tab-button ${activeTab === 'problems' ? 'active' : ''}`}
              onClick={() => setActiveTab('problems')}
            >
              <div className="tab-content">
                <h3 className="tab-title">Проблемы стиральных машин</h3>
                <p className="tab-subtitle">Подробные руководства по диагностике и решению неисправностей</p>
              </div>
            </button>
          </div>
        </section>

        {/* Основной раздел статей */}
        <section className="articles-section">
          <div className="articles-cards-grid">
            {activeTab === 'care' ? (
              generalArticles.map((article, index) => (
                <Link href={article.href} key={index}>
                  <a className="floating-card general-card">
                    <div className="card-image-wrapper">
                      <img
                        alt={article.title}
                        src={article.image}
                        loading="lazy"
                        className="card-image"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{article.title}</h3>
                      <p className="card-description">{article.description}</p>
                      <div className="card-button">
                        <span className="button-text">Читать</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            ) : (
              problemArticles.map((article, index) => (
                <Link href={article.href} key={index}>
                  <a className="floating-card problem-card">
                    <div className="card-image-wrapper">
                      <img
                        alt={article.alt}
                        src={article.image}
                        loading="lazy"
                        className="card-image"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{article.title}</h3>
                      <div className="card-button">
                        <span className="button-text">Читать</span>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
            )}
          </div>
        </section>

        <MainFooter />
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
        <QuestionModal isOpen={isQuestionModalOpen} onClose={closeQuestionModal} />
      </main>

      <style jsx>
        {`
          :global(.breadcrumbs-container),
          :global(.breadcrumbs-container.white-left) {
            margin-top: 0 !important;
          }
          .articles-container {
            width: 100%;
            min-height: 100vh;
            background-color: #f8f9fa;
            font-family: 'Noto Serif SC', serif;
          }

          /* Hero секция */
          .articles-hero {
            background: linear-gradient(135deg, #232020 0%, #2e3337 100%);
            padding: 50px 20px 40px;
            text-align: center;
            color: white;
          }

          .articles-hero-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .articles-main-title {
            font-size: 35px;
            font-weight: 400;
            margin-bottom: 20px;
            font-family: 'Noto Serif SC', serif;
          }

          .articles-subtitle {
            font-size: 0.95rem;
            opacity: 0.9;
            font-family: 'Noto Serif SC', serif;
            line-height: 1.6;
          }

          /* Секция переключателя */
          .articles-switcher-section {
            padding: 40px 20px 20px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .articles-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .tab-button {
            background: white;
            border: 2px solid #e0e0e0;
            border-radius: 15px;
            padding: 22px 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
          }

          .tab-button:hover {
            border-color: #87ceeb;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .tab-button.active {
            border-color: #4EC8ED;
            background: linear-gradient(135deg, #4EC8ED 0%, #87ceeb 100%);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(78, 200, 237, 0.3);
          }

          .tab-content {
            position: relative;
            z-index: 2;
          }

          .tab-title {
            font-size: 1.4rem;
            font-weight: 500;
            margin-bottom: 8px;
            font-family: 'Nunito', sans-serif;
            font-style: normal;
            transition: color 0.3s ease;
          }

          .tab-button.active .tab-title {
            color: white;
          }

          .tab-subtitle {
            font-size: 0.95rem;
            line-height: 1.4;
            opacity: 0.8;
            font-family: 'Nunito', sans-serif;
            font-style: normal;
            transition: color 0.3s ease;
          }

          .tab-button.active .tab-subtitle {
            color: white;
            opacity: 0.9;
          }

          /* Секции статей */
          .articles-section {
            padding: 40px 20px 80px;
            max-width: 1400px;
            margin: 0 auto;
          }


          /* Сетка карточек */
          .articles-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px 25px;
            padding: 20px 0;
          }

          /* Висящие карточ��и с эффектом наклона */
          .floating-card {
            display: block;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: rotate(1deg) translateY(3px);
            text-decoration: none;
            color: inherit;
            position: relative;
            min-height: 320px;
          }

          .floating-card:hover {
            transform: rotate(0deg) translateY(-8px) scale(1.03);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
            z-index: 10;
          }

          /* Убираем разные повороты - все карточки одинаково */
          .floating-card:nth-child(even),
          .floating-card:nth-child(3n) {
            transform: rotate(1deg) translateY(3px);
          }

          .floating-card:nth-child(even):hover,
          .floating-card:nth-child(3n):hover {
            transform: rotate(0deg) translateY(-8px) scale(1.03);
          }

          /* Содержимое карточек */
          .card-image-wrapper {
            width: 100%;
            height: 160px;
            overflow: hidden;
            background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .floating-card:hover .card-image {
            transform: scale(1.08);
          }

          .card-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            height: calc(100% - 160px);
          }

          .card-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #232020;
            margin-bottom: 10px;
            line-height: 1.3;
            font-family: 'Nunito', sans-serif;
            flex-grow: 1;
          }

          .card-description {
            font-size: 0.95rem;
            color: #333333;
            line-height: 1.4;
            margin-bottom: 15px;
            font-family: 'Nunito', sans-serif;
            font-style: normal;
            font-weight: 300;
          }

          /* Стили кнопки */
          .card-button {
            align-self: flex-start;
            margin-top: auto;
            background: linear-gradient(45deg, #4EC8ED, #87ceeb);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(78, 200, 237, 0.3);
          }

          .floating-card:hover .card-button {
            background: linear-gradient(45deg, #87ceeb, #5bb8e8);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(78, 200, 237, 0.4);
          }

          .button-text {
            display: block;
          }

          /* Адаптивность */
          @media (max-width: 768px) {
            .articles-container {
              background-color: white;
            }

            .articles-hero {
              background: white;
              color: #232020;
              padding: 40px 15px 30px;
              margin-top: 90px;
            }

            .articles-main-title {
              font-size: 35px;
              color: #232020;
            }

            .articles-subtitle {
              color: #666;
              opacity: 1;
              font-size: 0.9rem;
            }

            .articles-tabs {
              grid-template-columns: 1fr;
              gap: 15px;
            }

            .tab-button {
              padding: 20px 16px;
            }

            .tab-title {
              font-size: 1.2rem;
              font-family: 'Nunito', sans-serif;
              font-style: normal;
              font-weight: 500;
            }

            .tab-subtitle {
              font-size: 0.9rem;
              font-family: 'Nunito', sans-serif;
              font-style: normal;
            }

            .articles-switcher-section {
              padding: 30px 15px 15px;
              background-color: white;
            }

            .articles-cards-grid {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            .articles-section {
              padding: 30px 15px 60px;
              background-color: white;
            }

            .floating-card {
              min-height: 280px;
            }
          }

          @media (max-width: 480px) {
            .articles-container {
              background-color: white;
            }

            .articles-hero {
              background: white;
              color: #232020;
              margin-top: 90px;
            }

            .articles-main-title {
              font-size: 24px;
              color: #232020;
            }

            .articles-subtitle {
              color: #666;
              opacity: 1;
              font-size: 0.85rem;
            }

            .tab-button {
              padding: 20px 15px;
            }

            .tab-title {
              font-size: 1.1rem;
            }

            .tab-subtitle {
              font-size: 0.85rem;
            }

            .articles-switcher-section {
              padding: 25px 15px 10px;
            }

            .floating-card {
              min-height: 260px;
              transform: rotate(1deg) translateY(2px);
            }

            .floating-card:hover {
              transform: rotate(0deg) translateY(-6px) scale(1.02);
            }

            .card-content {
              padding: 16px;
            }

            .card-image-wrapper {
              height: 140px;
            }

            .card-title {
              font-size: 1rem;
              font-family: 'Nunito', sans-serif;
            }

            .card-description {
              font-size: 0.9rem;
              font-family: 'Nunito', sans-serif;
              font-style: normal;
            }
          }
        `}
      </style>
    </>
  )
}

export default Articles
