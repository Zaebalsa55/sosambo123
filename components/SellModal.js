import React, { useState, useEffect } from 'react'

const SellModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeModal = () => {
    setFormData({ name: '', phone: '' })
    onClose()
  }

  const formatUaPhone = (input) => {
    const digits = (input || '').replace(/\D/g, '')
    let rest = digits
    if (rest.startsWith('380')) rest = rest.slice(3)
    else if (rest.startsWith('80')) rest = rest.slice(2)
    else if (rest.startsWith('0')) rest = rest.slice(1)
    return rest.slice(0, 9)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatUaPhone(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    const rest = (formData.phone || '').replace(/\D/g, '')
    const isValidPhone = rest.length === 9
    const fullPhone = `+380 ${rest}`
    if (formData.name.trim() && isValidPhone) {
      alert(`Заявка на выкуп принята! Наш менеджер свяжется с вами для уточнения деталей и оценки стиральной машины.\nИмя: ${formData.name}\nТелефон: ${fullPhone}`)
      closeModal()
    } else {
      alert('Пожалуйста, введите корректный номер в формате +380XXXXXXXXX и заполните все поля')
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Продать стиральную машину</h2>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body">
            <p className="modal-description">
              Выкуп б/у стиральных машин. Оцениваем справедливо, забираем сами. 
              Оставьте свои контактные данные и наш менеджер свяжется с вами для оценки вашей машины.
            </p>
            <form onSubmit={handleSubmit} className="sell-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group phone-input-group">
                <span className="phone-prefix">+380</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="\d{9}"
                  maxLength={9}
                  className="form-input"
                  required
                />
              </div>
              <div className="submit-wrapper">
                <button type="submit" className="sell-button">
                  <span>Продать</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Стили для модального окна */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          z-index: 1000;
          padding-left: 0;
        }

        .modal-content {
          background: white;
          width: 33.33%;
          height: 100%;
          padding: 40px;
          box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          animation: slideInLeft 0.3s ease-out;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
          color: #333;
          font-family: 'Nunito', sans-serif;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
          color: #999;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background-color: #f5f5f5;
          color: #333;
        }

        .modal-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-description {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 40px;
          font-family: 'Nunito', sans-serif;
        }

        .sell-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-input {
          padding: 20px;
          font-size: 18px;
          border: 2px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Nunito', sans-serif;
        }
        .phone-input-group { position: relative; }
        .phone-input-group .form-input { padding-left: 74px; }
        .phone-prefix {
          position: absolute;
          top: 50%;
          left: 18px;
          transform: translateY(-50%);
          color: #999;
          font-size: 18px;
          font-family: 'Nunito', sans-serif;
          pointer-events: none;
        }
        .phone-input-group:focus-within .phone-prefix { color: #000; }

        .form-input:focus {
          border-color: #4EC8ED;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(78, 200, 237, 0.1);
        }

        .form-input::placeholder {
          color: #999;
          font-size: 16px;
          font-family: 'Nunito', sans-serif;
        }

        .sell-button {
          color: rgb(255, 255, 255);
          font-size: 16px;
          font-style: normal;
          font-family: 'Spectral';
          font-weight: 500;
          border: none;
          border-radius: 8px;
          letter-spacing: 1px;
          background-color: rgb(40, 40, 40);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 60px;
          max-width: 350px;
          min-width: 180px;
          box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
        }

        .sell-button:hover {
          box-shadow: 5px 5px 15px 0px rgba(43, 43, 43, 0.8);
          transform: translateY(-2px);
          background-color: #87ceeb;
        }

        .sell-button:active {
          transform: translateY(0px);
          box-shadow: 0px 0px 8px 0px #87ceeb, 3px 3px 8px 0px rgba(43, 43, 43, 0.9);
        }

        .submit-wrapper {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        /* Адаптивность для мобильных устройств */
        @media (max-width: 768px) {
          .modal-content {
            width: 90%;
            height: auto;
            max-height: 90%;
            margin: 16px;
            border-radius: 12px;
            animation: slideInUp 0.3s ease-out;
          }

          @keyframes slideInUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          .modal-overlay {
            justify-content: center;
            padding: 16px;
          }

          .modal-header h2 {
            font-size: 23px;
          }

          .modal-description {
            font-size: 15px;
            margin-bottom: 36px;
          }

          .sell-form {
            gap: 21px;
          }

          .form-input {
            padding: 11px;
            font-size: 15px;
          }
          .phone-input-group .form-input { padding-left: 60px; }
          .phone-prefix { left: 14px; font-size: 15px; }

          .form-input::placeholder {
            font-size: 15px;
          }

          .sell-button {
            height: 50px;
            font-size: 15px;
          }

          .submit-wrapper {
            margin-top: 16px;
          }
        }
      `}</style>
    </>
  )
}

export default SellModal
