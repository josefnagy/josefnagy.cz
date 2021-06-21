import classes from './button.module.css'

interface Props {
  className: string
  status: string | null
}

const Button: React.FC<Props> = ({ children, className, status }) => {
  function renderStatus() {
    if (status === 'pending')
      return (
        <div className={classes.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
    if (status === 'success')
      return (
        <span className={classes.checkmark}>
          <div className={classes.checkmark_stem}></div>
          <div className={classes.checkmark_kick}></div>
        </span>
      )
    if (status === 'error') return <div className={classes.close}></div>

    return children
  }

  return (
    <button type="submit" className={`${className} ${classes.sendBtn}`}>
      {renderStatus()}
    </button>
  )
}

export default Button
