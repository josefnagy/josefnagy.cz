import classes from './notification.module.css'

interface Props {
  status: string | null
}

const Notification: React.FC<Props> = ({ status }) => {
  console.log(status)

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
  }

  return (
    <div className="absolute inline-block top-1/2 left-1/2 w-20 h-20 rounded bg-primary transform -translate-x-1/2 -translate-y-1/2 grid place-items-center">
      {renderStatus()}
    </div>
  )
}

export default Notification
