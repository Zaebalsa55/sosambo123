import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import SEOHead from '../components/SEOHead'
import PageNavigation from '../components/PageNavigation'
import OrderButton from '../components/OrderButton'
import OrderModal from '../components/OrderModal'
import Breadcrumbs from '../components/Breadcrumbs'
import RelatedArticles from '../components/RelatedArticles'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

const Page = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const seoData = getSEOData('/silnoshumit')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт шумной стиральной машины',
    'Професс��ональный ремонт стиральных машин которые шумят и вибрируют в Одессе. Замена подшипников, амортизаторов.',
    `${baseUrl}/silnoshumit`
  )

  return (
    <>
      <div className="page-container10">
        <SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={`${baseUrl}/silnoshumit`}
          structuredData={structuredData}
        />
        <Header />
        <main className="page-main">
          <div className="page-left-main-box">
            <div className="page-headertextwashermachine">
              <h1 className="page-text10">
                <span className="page-text11">
                  Стиральная машина сильно шумит  —
                </span>
                <span className="page-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="page-text13">что делать?</span>
              </h1>
              <Breadcrumbs style="white-left" className="breadcrumbs-after-title" />
            </div>
            <section className="page-container11">
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon10"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon12"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon14"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon16"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <strong className="page-text14">
                <span>Основные причины сильного шум��:</span>
                <br></br>
              </strong>
              <ul className="page-ul list">
                <li className="page-li2 list-item">
                  <img alt="image" src="/vector.svg" className="page-image2" />
                  <a href="#2" className="page-link2">
                    Неправильная подготовка и установка:
                  </a>
                </li>
                <li className="page-li1 list-item">
                  <img
                    alt="Vector8669"
                    src="/external/vector8669-r6fr.svg"
                    className="page-vector1"
                  />
                  <a href="#1" className="page-link1 ge">
                    1. Транспортировочные болты не сняты
                  </a>
                </li>
                <li className="page-li1 list-item">
                  <img
                    alt="Vector8669"
                    src="/external/vector8669-r6fr.svg"
                    className="page-vector1"
                  />
                  <a href="#3" className="page-link1 ge">
                    2. Неровный или скользкий пол
                  </a>
                </li>
                <li className="page-li2 list-item">
                  <img alt="image" src="/vector.svg" className="page-image2" />
                  <a href="#4" className="page-link2">
                    Износ и поломка деталей:
                  </a>
                </li>
                <li className="page-li3 list-item">
                  <img
                    alt="Vector8669"
                    src="/external/vector8669-r6fr.svg"
                    className="page-vector2"
                  />
                  <a href="#4" className="page-link3 ge">
                    1. Амортизаторы
                  </a>
                </li>
                <li className="page-li4 list-item ge">
                  <img
                    alt="Vector8669"
                    src="/external/vector8669-r6fr.svg"
                    className="page-vector3"
                  />
                  <a href="#5" className="page-link4">
                    2. Пружины подвески
                  </a>
                </li>
                <li className="page-li5 list-item">
                  <a href="#5-1" className="page-link5 ge">
                    <img
                      alt="Vector8669"
                      src="/external/vector8669-r6fr.svg"
                      className="page-vector4"
                    />
                    3. Противовесы
                  </a>
                </li>
                <li className="page-li6 list-item">
                  <a href="#5-2" className="page-link6 ge">
                    <img
                      alt="Vector8669"
                      src="/external/vector8669-r6fr.svg"
                      className="page-vector5"
                    />
                    4. Подшипники и сальник.
                  </a>
                </li>
              </ul>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page-icon18"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page-icon20"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="page-icon22"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="page-icon24"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
            </section>
            <div className="page-container15">
              <h2 className="page-text34">
                <span>Неп��авильная подготовка и установка:</span>
                <br></br>
              </h2>
            </div>
            <section id="2" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  1. Транспор��ировочные болты не сняты
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="транспортировочные болты"
                    src="/4/bolti.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text19">
                    <span>Транспортировочные болты</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  При первой установке нов��й стиральной машин�� многие удивляются сильной вибрации и шуму во ��ремя работы. Чащ�� всего это связано с тем, что ��стаются установочные транспортировочные болты, фиксирующие барабан для безопасной перево��ки. Если их не снять до запуска, барабан не сможет свободно вращаться, что вызывает громкий грохот, подпрыгивание машины и риск по��реждения деталей. Чтобы техника ра��отала корректно и служила долго, обязатель��о вы��рутите все транспор��ировочные болты и установите защитные заглушки.
                </p>
              </div>
            </section>
            <section id="3" className="page-thirdproblem2">
              <div className="page-container19 zagolovkiskorobkoy">
                <h3 className="zagolovki2">2. Неровный или скользкий пол</h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon30"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container20">
                <figure className="page-container21">
                  <img
                    alt="уровень"
                    src="/4/uroven.webp"
                    loading="lazy"
                    className="page-image38230523"
                  />
                  <span className="page-text40">
                    <span>Уровень ��ля выравнивания</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  ��тиральная машина очень требо��а��ельна к прочн��сти и горизонтальности места установки. Есл�� пол под ней н�� идеально ровный или сл��шком мягкий (нап��имер, с��арые деревянные доски), любая вибрация пр��ведёт к дополнительному «прыжку» техники. Аналогично, установка на оче��ь гл��дком покрытии (плитке или линолеуме) без фиксации позволит машинке подскальзывать.Совет: Проверьте положение машины уровнем – все ножки должны стоять устойчиво. Слегка раскачайте прибор руками, определите, какая опора «гуляет» ��ольше, и по��крутите её гайкой против часовой стрелки до упора. Можно привлечь помощника или приподнять стиралку на бок, чтоб�� повернуть ножку удобнее. После этого ещё раз проконтролируйте ровность с уров��ем. Для дополнительной устойчивости и защи��ы пола рекомендует��я установить резиновые антиск��льзящие накладки или антивибраци��нные подставки под ножки. Они гасить час��ь вибрации и не позволяют машине «ездить» по комнат��.
                </p>
              </div>
            </section>
            <div className="page-container15">
              <h2 className="page-text34">
                <span>Износ и поломка деталей</span>
                <br></br>
              </h2>
            </div>
            <section id="4" className="page-fiveproblem1">
              <div className="page-container22 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  1. Амортизаторы
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon32"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container23">
                <figure className="page-container24">
                  <img
                    alt="амортизаторы"
                    src="/4/amortizatori.webp"
                    loading="lazy"
                    className="page-image38230524"
                  />
                  <span className="page-text45">Амортизаторы</span>
                </figure>
                <p className="page-text46 vicetext">
                  {' '}
                  Это пары демпферов с поршнем внутри, ко��орые гасят колебания бака. Со старением уплотнители рассыхаются, по��шень начинает свободно «гулять» в цилиндре и уже не гасит удары. Стиралка при этом будет «скакать» и издавать металлический стук. Если затрону��ы амортиз��торы, их меняют обе сразу (иначе н����равномерное гашение усуг��бит проблему). Замена обычно выполняется с��изу, после пер��во��ота корпуса.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </section>
            <section id="5" className="page-fiveproblem2">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  2. Пружины подвески
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="блок уп��авления"
                    src="/image%203823045-900w.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">Блок управления</span>
                </figure>
                <p className="page-text49 vicetext">
                  {' '}
                  Пружины подвески играют ключевую роль в работе стиральной машины — они удерживают бак в подв��шенном состоянии и компенсируют вибрации при отжиме. Ког��а хотя бы одна пружина растянулась или сломала��ь, бак теряет устойчивость и начинает сильно раскачиваться. Из-за этого вы слышите громкий стук, глухие удары или даже металлический звон. Особенно ярко проблема проявляетс�� на высоких оборотах, когда бак с бельём вращается �� макси��альной скоростью.

                  Почему это происходит? Со временем пружины изнашиваются — металл теряет упругость, появляются микротрещины, а иногда пружина может и вовсе лопнуть. В результате на��рузка распределяется н���равномерно, бак смещается и начинает «бить» по корп��су. Это не только неприятный шум, но и риск повреждения других деталей — амортизаторов, противовесов, даже бака.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </section>
            <section id="5-1" className="page-fiveproblem2-duplicate1">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  3. Противовесы
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="противовес"
                    src="/4/protivoves.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">Противо��ес</span>
                </figure>
                <p className="page-text49 vicetext">
                  {' '}
                  Противовесы — это массивные блоки внутри стиральной машины, которые крепятся к баку и пом��гают ��асить вибрации при стирке и особенно при отжим��. Их задача — стабилизировать бак, чтобы он не раскачивался и не ударялся о кор��ус. Если один из противовесов ослаб, раскололся или открутился, баланс нарушается, и машина начинает сильно шуметь, греметь и «��рыгать» по пол��.Со временем крепёжные болты противовесов могут раскрутиться из-за постоянной вибрации. В некоторых случаях бетонный противовес трескается или крошится — это встречается ��а старых машинах или после сильных перегрузок бельём. Когда противовес не держи��ся плотно, при высоких оборотах бак с��ещается и начинает сильно стучать по корпусу.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </section>
            <section id="5-2" className="page-fiveproblem2-duplicate2">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  4. По����шипник�� и сальник
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="Сальник"
                    src="/3/salnik.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">Сальник</span>
                </figure>
                <p className="page-text49 vicetext">
                  {' '}
                  В барабан встроен подшипниковый узел – обычно два ��арикоподшипника, ��акрытые резиновым уплотнителем (сальником). При длительной эксплуатации сальник протирается, внутрь попадает вода, ��мазка вымывается и подшипники ржавеют. Это вызывает люфт барабана �� неравномерное вращение. В итоге при отжиме машина может сильно шуметь и «прыгать», а иногд�� барабан клинит. Признаки износа подшипников – топот под ��ашиной, подтеки ржавой воды и разболт����ность бака при ручном движении. Починка ����ребу��т замены подшипников (и сальника) – в б��льшинстве моделей это комплексная работа, выполняемая в сервисе.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </section>
            <section className="page-better-call-master">
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon36"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon38"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon40"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 0 10 20"
                preserveAspectRatio="none"
                className="page-icon42"
              >
                <circle
                  r="3.75"
                  cx="5"
                  cy="10"
                  fill="#606060"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page-icon44"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page-icon46"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="page-icon48"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="page-icon50"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <h2 className="page-text50">Ког��а вызывать мастера?</h2>
              <p className="page-text51">
                <span className="page-text52">
                  Если вы выполнили все рекомендации, но проблема осталась —
                  обра��итесь в сервис
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="page-text53">&quot;</span>
                <span className="page-text54">РемCтирМаш</span>
                <span className="page-text55">&quot;</span>
                <span className="page-text56">.</span>
                <span className="page-text57">
                  {' '}
                  Наши специалисты быс��ро прие��ут к вам в желаемое вами время в
                  любой район Одессы и выполнят качествен��ую диагностику и
                  ремонт.
                </span>
              </p>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page-icon52"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <strong className="page-text58">Работаем без выходных</strong>
              <div className="page-container28">
                <div className="page-container29">
                  <div className="page-container30">
                    <img
                      alt="image"
                      src="/image%203823106.svg"
                      className="page-image3"
                    />
                    <strong className="page-text59">+38 (048) 253-23-23</strong>
                  </div>
                  <div className="page-container31">
                    <img
                      alt="image"
                      src="/image%203823107.svg"
                      className="page-image4"
                    />
                    <strong className="page-text60">+38 (048) 123-35-21</strong>
                  </div>
                </div>
                <OrderButton onClick={openModal} text="Заказать мастера" />
              </div>
            </section>
            <PageNavigation
              prevPage={{
                href: '/protekaet',
                title: 'Стиральная машина протекает'
              }}
              nextPage={{
                href: '/nevkluchaetsa',
                title: 'Стиральна�� машина не включается'
              }}
            />
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="page-icon58"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
            <RelatedArticles />
          </div>
          <div className="page-dops-info">
            <section className="page-frame1299">
              <span className="page-text72">Вам будет интересно:</span>
              <div className="page-frame12981">
                <span className="page-text73">
                  Ошибки, которые приводят к дорогостоящему ремонту (и как их
                  избежать)
                </span>
                <div className="page-container45"></div>
              </div>
              <div className="page-frame12982">
                <span className="page-text74">
                  Как продлить жизнь машин�� на 3–5 лет — простые привычки,
                  которые сэкономят деньги
                </span>
                <div className="page-container46"></div>
              </div>
              <div className="page-frame12983">
                <span className="page-text75">
                  Почему ��тиралка воняет — 7 быст��ых причин и что сделать прям��
                  сейчас
                </span>
                <div className="page-container47"></div>
              </div>
              <div className="page-frame12984">
                <span className="page-text76">
                  Как сэ��ономить электричество и воду — реальные настройки и
                  лайфхаки
                </span>
                <div className="page-container48"></div>
              </div>
              <div className="page-frame12985">
                <span className="page-text77">
                  Как без��пасно перевозить и хранить стиральную машину
                </span>
                <div className="page-container49"></div>
              </div>
              <div className="page-frame12986">
                <span className="page-text78">
                  Мифы о стиралках: что правда, а что — вымысел?
                </span>
                <div className="page-container50"></div>
              </div>
            </section>
          </div>
        </main>
        <MainFooter />
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <style jsx>
        {`
          .page-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .page-header {
            gap: 361px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 97px;
            display: flex;
            padding: 20px 61px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: rgba(31, 37, 42, 1);
          }
          .page-main {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1471px;
            min-height: 711px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .page-left-main-box {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 846px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .page-headertextwashermachine {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-image1 {
            width: 50px;
            height: 50px;
            display: none;
            object-fit: cover;
          }
          .page-text10 {
            color: rgb(80, 80, 80);
            width: 100%;
            height: auto;
            font-size: 32px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text11 {
            color: var(--dl-color-theme-neutral-dark);
            font-style: normal;
          }
          .page-text12 {
            font-style: normal;
          }
          .page-text13 {
            color: #45c5ed;
            font-weight: 500;
          }
          .page-container11 {
            gap: 5px;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 586px;
            min-width: 290px;
            box-shadow: 0px 0px 20px 3px #d4d4d4;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #fdfdf0;
          }
          .page-icon10 {
            top: -19px;
            right: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page-icon12 {
            right: -13px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .page-icon14 {
            left: -14px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .page-icon16 {
            top: -19px;
            left: -14px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page-text14 {
            color: rgb(49, 49, 49);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: 'Roboto';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-unit);
            text-transform: none;
          }
          .page-ul {
            gap: 12px;
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            padding-top: 12px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .page-li1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector1 {
            width: 12px;
            height: 11px;
          }
          .page-link1 {
            fill: #2f2f2f;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .page-image2 {
            width: 13px;
            height: 13px;
            object-fit: cover;
          }
          .page-link2 {
            fill: rgb(69, 197, 237);
            color: rgb(69, 197, 237);
            font-size: 15px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 400;
            padding-left: 0px;
            letter-spacing: 0.5px;
            text-decoration: none;
          }
          .page-li3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector2 {
            width: 11px;
            height: 11px;
          }
          .page-link3 {
            fill: #444444;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector3 {
            width: 11px;
            height: 11px;
          }
          .page-link4 {
            fill: #444444;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li5 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
            flex-direction: row;
          }
          .page-vector4 {
            width: 11px;
            height: 11px;
          }
          .page-link5 {
            fill: #54c9ee;
            color: rgb(68, 68, 68);
            font-style: normal;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
          }
          .page-li6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector5 {
            width: 11px;
            height: 11px;
          }
          .page-link6 {
            fill: #54c9ee;
            color: rgb(68, 68, 68);
            font-style: normal;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
          }
          .page-icon18 {
            top: -12px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page-icon20 {
            left: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .page-icon22 {
            top: -2px;
            right: -11px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page-icon24 {
            left: -12px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page-firstproblem {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container12 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon26 {
            width: 100%;
            height: 5px;
          }
          .page-container13 {
            width: 100%;
            height: 100%;
            display: flow-root;
            max-width: 900px;
            min-width: 100%;
          }
          .page-container14 {
            gap: 5px;
            float: right;
            width: 346px;
            height: 250px;
            display: flex;
            max-width: 370px;
            min-width: auto;
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .page-image38230521 {
            float: right;
            width: 100%;
            height: auto;
            max-width: 100%;
            min-width: 100%;
            max-height: 240px;
            min-height: 219px;
          }
          .page-text19,
          .page-text20,
          .page-text21,
          .page-text22,
          .page-text23 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Roboto';
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
            padding: 5px;
          }
          .page-text24 {
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-text25 {
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-text27 {
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-text28 {
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-text30 {
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-text31 {
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 700;
          }
          .page-container15 {
            width: 400px;
            height: 70px;
            display: flex;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #58c3e8;
          }
          .page-text34 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 22px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-thirdproblem1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container16 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon28 {
            width: 100%;
            height: 5px;
          }
          .page-container17 {
            width: 100%;
            display: flow-root;
          }
          .page-container18 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230522 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
          }
          .page-thirdproblem2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon30 {
            width: 100%;
            height: 5px;
          }
          .page-container20 {
            width: 100%;
            display: flow-root;
          }
          .page-container21 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230523 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
          }
          .page-text40 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Roboto';
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .page-fiveproblem1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container22 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon32 {
            width: 100%;
            height: 5px;
          }
          .page-container23 {
            width: 100%;
            display: flow-root;
          }
          .page-container24 {
            gap: 5px;
            float: right;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 250px;
            min-width: auto;
            max-height: 200px;
            min-height: 100%;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230524 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 240px;
            min-height: 150px;
          }
          .page-text45 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 250px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Roboto';
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .page-text46 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            align-self: stretch;
            text-align: left;
            font-stretch: normal;
          }
          .page-fiveproblem2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-fiveproblem2-duplicate1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-fiveproblem2-duplicate2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .zagolovkiskorobkoy {
            gap: var(--dl-layout-space-halfunit);
            width: 330px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .zagolovki2 {
            color: var(--dl-color-theme-neutral-dark);
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            margin-bottom: 8px;
          }
          .page-container25 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon34 {
            width: 100%;
            height: 5px;
          }
          .page-container26 {
            width: 100%;
            display: flow-root;
          }
          .page-container27 {
            gap: 5px;
            float: right;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 250px;
            min-width: auto;
            max-height: 200px;
            min-height: 100%;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230525 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 240px;
            min-height: 150px;
          }
          .page-text48 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 250px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Roboto';
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .page-text49 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            align-self: stretch;
            text-align: left;
            font-stretch: normal;
          }
          .page-better-call-master {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            box-shadow: 0px 0px 20px 3px #d4d4d4;
            margin-top: var(--dl-layout-space-oneandhalfunits);
            min-height: 330px;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: #fdfdf0;
          }
          .page-icon36 {
            top: -21px;
            right: -14px;
            width: 11px;
            height: auto;
            position: absolute;
          }
          .page-icon38 {
            right: -15px;
            width: 11px;
            bottom: -20px;
            height: auto;
            position: absolute;
          }
          .page-icon40 {
            left: -15px;
            width: 11px;
            bottom: -20px;
            height: auto;
            position: absolute;
          }
          .page-icon42 {
            top: -21px;
            left: -14px;
            width: 11px;
            height: auto;
            position: absolute;
          }
          .page-icon44 {
            top: -12px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page-icon46 {
            left: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .page-icon48 {
            top: 0px;
            right: -12px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page-icon50 {
            left: -12px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page-text50 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: auto;
            height: auto;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text51 {
            color: rgba(39, 38, 38, 0.99);
            width: 100%;
            height: auto;
            font-size: 16px;
            max-width: 100%;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text52 {
            font-style: normal;
          }
          .page-text53 {
            color: #58c3e8;
            font-weight: 600;
          }
          .page-text54 {
            color: #58c3e8;
            font-weight: 600;
          }
          .page-text55 {
            color: #58c3e8;
            font-weight: 600;
          }
          .page-text56 {
            font-weight: 600;
          }
          .page-text57 {
            font-style: normal;
          }
          .page-icon52 {
            width: 100%;
            height: 5px;
            max-width: 600px;
          }
          .page-text58 {
            fill: #58c3e8;
            color: #58c3e8;
            width: auto;
            height: 100%;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: underline;
          }
          .page-container28 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-container29 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 250px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container30 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-image3 {
            width: 29px;
            height: 29px;
            object-fit: cover;
          }
          .page-text59 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: 100%;
            font-size: 19px;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container31 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .page-image4 {
            width: 29px;
            height: 28px;
            object-fit: cover;
          }
          .page-text60 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            font-size: 19px;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-button {
            fill: var(--dl-color-theme-secondary1);
            color: rgb(250, 248, 246);
            width: 279px;
            height: 52px;
            font-size: 15px;
            font-family: 'Spectral SC';
            border-radius: 8px;
            background-color: rgb(40, 40, 40);
          }
          .page-container32 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            padding-left: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .page-container33 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: 11px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .page-container34 {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            justify-content: center;
            background-color: #373737;
          }
          .page-icon54 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #58c3e8;
            width: 20px;
            height: 20px;
            max-width: auto;
          }
          .page-container35 {
            gap: var(--dl-layout-space-halfunit);
            width: 191px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text61 {
            color: rgba(55, 55, 55, 1);
            width: 100%;
            height: auto;
            font-size: 17px;
            max-width: 100%;
            align-self: flex-end;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text62 {
            fill: #58c3e8;
            color: #58c3e8;
            width: 100%;
            height: auto;
            font-size: 16px;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            letter-spacing: 0.5;
            text-transform: none;
            text-decoration: none;
          }
          .page-container36 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            align-items: center;
            padding-top: 11px;
            border-radius: var(--dl-layout-radius-imageradius);
            flex-direction: row-reverse;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .page-container37 {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            justify-content: center;
            background-color: #373737;
          }
          .page-icon56 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #58c3e8;
            width: 20px;
            height: 20px;
            max-width: auto;
            align-self: center;
          }
          .page-container38 {
            gap: var(--dl-layout-space-halfunit);
            width: 191px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text63 {
            color: rgba(55, 55, 55, 1);
            width: 100%;
            height: auto;
            font-size: 17px;
            max-width: 100%;
            align-self: flex-end;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text64 {
            fill: #58c3e8;
            color: rgb(88, 195, 232);
            width: 100%;
            height: auto;
            font-size: 16px;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            letter-spacing: 0.5px;
            text-transform: none;
            text-decoration: none;
          }
          .page-icon58 {
            width: 100%;
            height: 5px;
            max-width: 100%;
          }
          .page-container39 {
            width: 277px;
            height: 54px;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #58c3e8;
          }
          .page-text65 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 22px;
            align-self: center;
            font-style: italic;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container40 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: #rgba(131, 213, 242, 0.23);
          }
          .page-container41 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 120px;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230321 {
            width: 110px;
            height: 100px;
          }
          .page-text68 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container42 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230322 {
            width: 110px;
            height: 100px;
          }
          .page-text69 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container43 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230323 {
            width: 110px;
            height: 100px;
          }
          .page-text70 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container44 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230324 {
            width: 110px;
            height: 100px;
          }
          .page-text71 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-dops-info {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 417px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-frame1299 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 31px 34px;
            position: sticky;
            align-self: center;
            box-shadow: 5px 5px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: #faf8f6;
          }
          .page-text72 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 17px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: 'Roboto Serif';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-frame12981 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text73 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container45 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823137-200h.webp');
          }
          .page-frame12982 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text74 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container46 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823133-200h.webp');
          }
          .page-frame12983 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text75 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container47 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823132-200h.webp');
          }
          .page-frame12984 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text76 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container48 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823134-200h.webp');
          }
          .page-frame12985 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text77 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container49 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823136-200w.webp');
          }
          .page-frame12986 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text78 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: 'Nunito';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container50 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823142-200h.webp');
          }
          @media (max-width: 991px) {
            .page-left-main-box {
              align-items: center;
              justify-content: center;
            }
            .page-container14 {
              min-width: 45px;
            }
            .page-container15 {
              align-self: center;
            }
            .page-container18 {
              min-width: 45px;
            }
            .page-container21 {
              min-width: 45px;
            }
            .page-container24 {
              min-width: 45px;
            }
            .page-container27 {
              min-width: 45px;
            }
            .page-container35 {
              gap: var(--dl-layout-space-unit);
            }
            .page-container38 {
              gap: var(--dl-layout-space-unit);
            }
            .page-icon58 {
              max-width: 500px;
            }
            .page-text69 {
              width: auto;
            }
            .page-text70 {
              width: auto;
            }
            .page-text71 {
              width: auto;
            }
            .page-frame1299 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .page-left-main-box {
              align-items: center;
            }
            .page-text10 {
              text-align: center;
            }
            .page-container11 {
              max-width: 350px;
            }
            .page-link2 {
              font-size: 14px;
            }
            .page-link3 {
              font-size: 14px;
            }
            .page-link4 {
              font-size: 14px;
            }
            .page-container13 {
              min-width: 100%;
            }
            .page-better-call-master {
              max-width: 400px;
            }
            .page-container32 {
              gap: var(--dl-layout-space-twounits);
              flex-wrap: wrap;
              align-self: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .page-header {
              height: 84px;
            }
            .page-left-main-box {
              width: 100%;
              align-self: flex-start;
              align-items: center;
              justify-content: center;
            }
            .page-headertextwashermachine {
              position: relative;
              margin-top: 85px;
            }
            .page-image1 {
              top: -149px;
              left: 0px;
              right: 0px;
              width: 140px;
              height: 140px;
              margin: auto;
              display: flex;
              position: absolute;
              align-items: center;
              justify-content: center;
            }
            .page-text10 {
              fill: #373333;
              color: rgb(55, 51, 51);
              font-size: 25px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .page-container11 {
              width: auto;
              max-width: 305px;
              min-width: 290px;
            }
            .page-icon10 {
              top: -21px;
              right: -11px;
            }
            .page-icon12 {
              right: -12px;
              bottom: -20px;
            }
            .page-icon14 {
              left: -13px;
              bottom: -20px;
            }
            .page-icon16 {
              top: -21px;
              left: -12px;
            }
            .page-text14 {
              font-size: 14px;
            }
            .page-ul {
              padding-left: 19px;
            }
            .page-icon22 {
              top: -3px;
              right: -9px;
            }
            .page-icon24 {
              top: 0px;
              left: -10px;
            }
            .page-container13 {
              width: auto;
              min-width: 100%;
            }
            .page-container14 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              height: 100%;
              max-width: 100%;
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230521 {
              width: auto;
              max-width: auto;
              min-width: auto;
              min-height: 50px;
            }
            .page-text18 {
              width: 100%;
            }
            .page-container15 {
              width: 100%;
            }
            .page-text34 {
              width: 100%;
              font-size: 18px;
              text-align: center;
            }
            .page-container18 {
              gap: var(--dl-layout-space-halfunit);
              height: 100%;
              max-width: var(--dl-layout-size-xxlarge);
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230522 {
              width: 100%;
              min-width: 50%;
              min-height: 50px;
            }
            .page-container21 {
              gap: var(--dl-layout-space-halfunit);
              height: 100%;
              max-width: var(--dl-layout-size-xxlarge);
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230523 {
              width: 100%;
              min-width: 50%;
              min-height: 50px;
            }
            .page-text40 {
              font-size: 13px;
            }
            .page-container24 {
              gap: var(--dl-layout-space-halfunit);
              height: 100%;
              max-width: 100%;
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230524 {
              width: 100%;
              min-width: 50%;
              min-height: 50px;
            }
            .page-text45 {
              font-size: 13px;
              font-style: normal;
              font-family: Roboto;
              font-weight: 400;
            }
            .page-container27 {
              gap: var(--dl-layout-space-halfunit);
              height: 100%;
              max-width: 100%;
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230525 {
              width: 100%;
              min-width: 50%;
              min-height: 50px;
            }
            .page-text48 {
              font-size: 13px;
              font-style: normal;
              font-family: Roboto;
              font-weight: 400;
            }
            .page-better-call-master {
              max-width: 290px;
              padding-left: 15px;
              padding-right: 15px;
            }
            .page-text50 {
              color: rgb(49, 49, 49);
              font-size: 19px;
              font-family: Roboto Serif;
              font-weight: 500;
              line-height: normal;
              text-decoration: none;
            }
            .page-text51 {
              font-size: 15px;
              font-family: Noto Serif SC;
            }
            .page-text58 {
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .page-container28 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              height: 100%;
            }
            .page-container29 {
              align-items: center;
              justify-content: center;
            }
            .page-text59 {
              font-style: normal;
              text-align: left;
              font-weight: 500;
            }
            .page-text60 {
              font-style: normal;
              text-align: left;
              font-weight: 500;
            }
            .page-button {
              color: #ffffff;
              width: 100%;
              font-size: 15px;
              font-family: Roboto Serif;
              border-color: #ffffff;
              background-color: rgb(40, 40, 40);
            }
            .page-container32 {
              gap: var(--dl-layout-space-twounits);
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .page-icon54 {
              width: 17px;
              height: 17px;
            }
            .page-container35 {
              gap: var(--dl-layout-space-halfunit);
            }
            .page-text61 {
              font-size: 16px;
            }
            .page-icon56 {
              width: 17px;
              height: 17px;
            }
            .page-container38 {
              gap: var(--dl-layout-space-halfunit);
            }
            .page-text63 {
              color: rgb(55, 55, 55);
              font-size: 16px;
              font-style: normal;
              font-family: Noto Serif SC;
              font-weight: 600;
              line-height: normal;
              text-decoration: none;
            }
            .page-text68 {
              font-size: 14px;
            }
            .page-text69 {
              font-size: 14px;
            }
            .page-text70 {
              font-size: 14px;
            }
            .page-text71 {
              font-size: 14px;
            }

          }
        `}
      </style>
    </>
  )
}

export default Page
