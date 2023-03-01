import { useEffect } from 'react'
import { AlertType } from '../popup/index'
import './index.css'

interface AlertProps {
  content: string
  type: AlertType
  onClose: () => void
}

const Alert = ({ content, type = 'info', onClose }: AlertProps) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => {
      t && clearTimeout(t)
    }
  }, [])

  return (
    <div className={`alert alert-${type}`} onClick={onClose}>
      <div className="alert-content">
        <label>{content}</label>
      </div>
    </div>
  )
}

export default Alert
