import React, { Fragment } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Blue1 = (props) => {
  return (
    <>
      <div className={`blue1-blue ${props.rootClassName} `}>
        <div className="blue1-container1">
          <div className="blue1-container2">
            <span className="blue1-text1">
              {props.text2 ?? (
                <Fragment>
                  <span className="blue1-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '5',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          {props.clickableTitle && props.titleLink ? (
            <Link href={props.titleLink}>
              <strong className="blue1-text2 clickable-service-title">
                {props.text ?? (
                  <Fragment>
                    <span className="blue1-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Ремонт модуля управления',
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </strong>
            </Link>
          ) : (
            <strong className={`blue1-text2 ${!props.clickableTitle ? 'normal-service-title' : ''}`}>
              {props.text ?? (
                <Fragment>
                  <span className="blue1-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Ремонт модуля управления',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </strong>
          )}
        </div>
        <div className="blue1-container3">
          <p className="blue1-text3">
            {props.text1 ?? (
              <Fragment>
                <span className="blue1-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'от 1000 грн',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 110 20"
            preserveAspectRatio="none"
            className="blue1-icon1"
          >
            <defs>
              <linearGradient
                id="grad23"
                x1="0"
                x2="110"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#303030"></stop>
                <stop offset="100%" stopColor="#4EC8ED"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0 10 H110"
              fill="none"
              stroke="url(#grad23)"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          <div className="blue1-container4" onClick={props.onClick}>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="blue1-image"
            />
            <strong className="blue1-text4">
              {props.text3 ?? (
                <Fragment>
                  <span className="blue1-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Вызвать мастера',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </strong>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blue1-blue {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 8px;
            justify-content: center;
          }
          .blue1-container1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .blue1-container2 {
            max-width: 20px;
            min-width: 20px;
          }
          .blue1-text1 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: 'Roboto Serif';
            font-weight: 500;
          }
          .blue1-text2 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Noto Serif SC';
            font-weight: 300;
          }

          .clickable-service-title {
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .clickable-service-title:hover {
            opacity: 0.8;
          }

          .normal-service-title {
            color: var(--dl-color-theme-neutral-dark) !important;
          }
          .blue1-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .blue1-text3 {
            font-size: 15px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
          }
          .blue1-icon1 {
            display: none;
          }
          .blue1-container4 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .blue1-image {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
            transition: transform 0.2s ease, filter 0.2s ease;
          }
          .blue1-text4 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            text-decoration: underline;
          }
          .blue1-text5 {
            display: inline-block;
          }
          .blue1-text6 {
            display: inline-block;
          }
          .blue1-text7 {
            display: inline-block;
          }
          .blue1-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .blue1-blue {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 0px;
              justify-content: flex-end;
            }
            .blue1-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .blue1-text3 {
              align-self: center;
            }
            .blue1-icon1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .blue1-blue {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              border-color: rgba(25, 24, 24, 0.72);
              border-style: dashed;
              border-width: 0.5px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .blue1-container1 {
              max-width: 210px;
              min-width: 210px;
            }
            .blue1-container2 {
              align-self: center;
            }
            .blue1-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .blue1-text4 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .blue1-blue {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: 4px;
              padding-right: 6px;
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .blue1-container1 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .blue1-container2 {
              display: flex;
              align-self: center;
            }
            .blue1-text1 {
              width: 100%;
              height: 100%;
              font-size: 15px;
              text-align: center;
            }
            .blue1-text2 {
              width: 100%;
              font-size: 15px;
              font-style: normal;
              font-family: Noto Serif SC;
              font-weight: 400;
              overflow-wrap: break-word;
            }
            .blue1-container3 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blue1-text3 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 400;
              justify-content: center;
            }
            .blue1-icon1 {
              width: 60px;
              display: flex;
              max-height: 2px;
            }
            .blue1-container4 {
              max-width: var(--dl-layout-size-medium);
            }
            .blue1-text4 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: Noto Serif SC;
              justify-content: center;
              text-decoration: underline none;
              transition: color 0.3s ease, transform 0.2s ease;
            }

            /* Hover эффекты для кнопки "Вызвать мастера" */
            .blue1-container4 {
              cursor: pointer;
              transition: transform 0.2s ease, background-color 0.2s ease;
              border-radius: 4px;
              padding: 4px;
            }

            .blue1-container4:hover {
              transform: translateY(-2px);
            }

            .blue1-container4:hover .blue1-text4 {
              color: #3A9BC1 !important;
              fill: #3A9BC1 !important;
            }

            .blue1-container4:hover .blue1-image {
              transform: rotate(15deg);
              filter: brightness(1.2);
            }

            .blue1-container4:active {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}

Blue1.defaultProps = {
  rootClassName: '',
  text3: undefined,
  text: undefined,
  text2: undefined,
  imageSrc: '/ICONS/29.svg',
  imageAlt: 'image',
  text1: undefined,
  onClick: undefined,
  clickableTitle: false,
  titleLink: null,
}

Blue1.propTypes = {
  rootClassName: PropTypes.string,
  text3: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.element,
  onClick: PropTypes.func,
  clickableTitle: PropTypes.bool,
  titleLink: PropTypes.string,
}

export default Blue1
