import { createRoot } from 'react-dom/client'
import Alert from '../Alert'
import './index.css'

export type AlertType = 'success' | 'warning' | 'error' | 'info'

//Finding the parent Container
const getContainer = () => {
  const container = document.querySelector('#popUpWrapper')
  if (!container) {
    const _container = document.createElement('div')
    _container.id = 'popUpWrapper'

    document.body.appendChild(_container)
    return _container
  }
  return container
}

const getRandom = () => {
  let randomNum = Math.floor(Math.random() * 2000) + 1
  return randomNum
}

/**
 * encapsulate the public popup method
 * @type AlertType Describes the types currently supported.
 * Currently supports four types of tips, success, info, error, and warning.
 * @props
 */
const _popup = (type: AlertType) => (content: string) => {
  const container = getContainer()

  const _dom = document.createElement('div')
  //Add a unique signature
  let key = `key-${getRandom()}`
  _dom.className = key
  container.appendChild(_dom)

  //Close the destruction layer
  const handleClose = () => {
    let _dom = document.querySelector(`.${key}`)

    if (!_dom) return
    container.removeChild(_dom)
  }

  createRoot(_dom).render(<Alert content={content} type={type} key={key} onClose={handleClose} />)
}

const success = _popup('success')
const warning = _popup('warning')
const info = _popup('info')
const error = _popup('error')
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  success,
  warning,
  info,
  error,
}
