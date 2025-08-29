import React from 'react'
import Link from 'next/link'

const RELATED = [
  {
    href: '/jirniepyatna',
    title: 'Как избавиться от жирных пятен на одежде в домашних условиях?',
    image: '/ICONS/1.svg',
    alt: 'Как избавиться от жирных пятен на одежде'
  },
  {
    href: '/vlapalisvkrov',
    title: 'Как удалить пятна крови с одежды без следов?',
    image: '/ICONS/3.svg',
    alt: 'Как удалить пятна крови с одежды'
  },
  {
    href: '/jvachka',
    title: 'Как самостоятельно удалить жвачку с одежды?',
    image: '/ICONS/25.svg',
    alt: 'Как удалить жвачку с одежды'
  },
  {
    href: '/puhovik',
    title: 'Как правильно стирать пуховик в автоматической стиральной машине?',
    image: '/ICONS/28.svg',
    alt: 'Как правильно стирать пуховик'
  }
]

const RelatedArticles = () => {
  return (
    <section className="related-articles">
      <h4 className="related-title">Другие статьи</h4>
      <div className="related-list">
        {RELATED.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <a className="related-item">
              <img src={item.image} alt={item.alt} className="related-thumb" loading="lazy" />
              <span className="related-text">{item.title}</span>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .related-articles { margin-top: 20px; }
        .related-title { margin: 0 0 10px; font-size: 1.1rem; color: #232020; font-family: 'Noto Serif SC', serif; }
        .related-list { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .related-item { display: flex; align-items: center; text-decoration: none; color: inherit; gap: 10px; padding: 6px 0; }
        .related-item:hover .related-text { color: #4EC8ED; }
        .related-thumb { width: 60px; height: 60px; object-fit: contain; background: #f6f6f6; border-radius: 8px; }
        .related-text { font-size: 0.95rem; line-height: 1.3; font-family: 'Nunito', sans-serif; }
        @media (max-width: 480px) { .related-thumb { width: 48px; height: 48px; } .related-text { font-size: 0.9rem; } }
      `}</style>
    </section>
  )
}

export default RelatedArticles
