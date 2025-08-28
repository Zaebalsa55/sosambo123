import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = ({ customItems = null }) => {
  const router = useRouter()
  const pathname = router.pathname

  // Определяем breadcrumbs на основе маршрута
  const getBreadcrumbs = () => {
    if (customItems) {
      return customItems
    }

    const breadcrumbs = [{ name: 'Главная', href: '/' }]

    // Статьи
    if (pathname === '/articles') {
      breadcrumbs.push({ name: 'Статьи', href: '/articles' })
    }

    // Выкуп б/у машин
    if (pathname === '/vikup') {
      breadcrumbs.push({ name: 'Выкуп б/у машин', href: '/vikup' })
    }

    // Проблемы стиральных машин
    const problemPages = {
      '/neslivaetvodu': 'Стиральная машина не сливает воду',
      '/negreetvodu': 'Стиральная машина не греет воду',
      '/protekaet': 'Стиральная машина протекает',
      '/silnoshumit': 'Стиральная машина шумит при отжиме',
      '/nevkluchaetsa': 'Стиральная машина не включается',
      '/zavisaetnaprogramme': 'Стиральная машина зависает на программе',
      '/neotjimaet': 'Стиральная машина не отжимает',
      '/nenabiraetvodu': 'Стиральная машина не набирает воду',
      '/neotkrivaetsadverca': 'У стиральной машины не открывается дверца',
      '/nekrutitbaraban': 'Стиральная машина не крутит барабан'
    }

    if (problemPages[pathname]) {
      breadcrumbs.push({ name: 'Проблемы', href: '/articles' })
      breadcrumbs.push({ name: problemPages[pathname], href: pathname })
    }

    // Обычные статьи
    const generalArticles = {
      '/jirniepyatna': 'Как избавиться от жирных пятен на одежде',
      '/jvachka': 'Как самостоятельно удалить жвачку с одежды',
      '/vlapalisvkrov': 'Как удалить пятна крови с одежды',
      '/puhovik': 'Как правильно стирать пуховик'
    }

    if (generalArticles[pathname]) {
      breadcrumbs.push({ name: 'Статьи', href: '/articles' })
      breadcrumbs.push({ name: generalArticles[pathname], href: pathname })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  // Не показываем breadcrumbs на главной странице если там только один элемент
  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav className="breadcrumbs-container">
      <div className="breadcrumbs-wrapper">
        <ol className="breadcrumbs-list">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link href={item.href}>
                    <a className="breadcrumb-link">{item.name}</a>
                  </Link>
                  <span className="breadcrumb-separator">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </>
              ) : (
                <span className="breadcrumb-current">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>

      <style jsx>
        {`
          .breadcrumbs-container {
            background-color: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
            padding: 12px 0;
          }

          .breadcrumbs-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .breadcrumbs-list {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
            flex-wrap: wrap;
            gap: 4px;
          }

          .breadcrumb-item {
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            font-family: 'Roboto', sans-serif;
          }

          .breadcrumb-link {
            color: #4EC8ED;
            text-decoration: none;
            transition: color 0.2s ease;
            padding: 4px 8px;
            border-radius: 4px;
            transition: all 0.2s ease;
          }

          .breadcrumb-link:hover {
            color: #87ceeb;
            background-color: rgba(78, 200, 237, 0.1);
          }

          .breadcrumb-separator {
            color: #6c757d;
            margin: 0 8px;
            display: flex;
            align-items: center;
          }

          .breadcrumb-current {
            color: #495057;
            font-weight: 500;
            padding: 4px 8px;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          /* Адаптивность */
          @media (max-width: 768px) {
            .breadcrumbs-wrapper {
              padding: 0 15px;
            }

            .breadcrumb-item {
              font-size: 0.85rem;
            }

            .breadcrumb-current {
              max-width: 200px;
            }

            .breadcrumb-separator {
              margin: 0 6px;
            }
          }

          @media (max-width: 480px) {
            .breadcrumbs-container {
              padding: 8px 0;
            }

            .breadcrumbs-wrapper {
              padding: 0 15px;
            }

            .breadcrumb-item {
              font-size: 0.8rem;
            }

            .breadcrumb-current {
              max-width: 150px;
            }

            .breadcrumb-separator {
              margin: 0 4px;
            }

            .breadcrumb-link {
              padding: 2px 6px;
            }
          }
        `}
      </style>
    </nav>
  )
}

export default Breadcrumbs
