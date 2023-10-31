import classes from './IconSwitch.module.css';

export const IconSwitch = ({ icon, func }) => {
  return (
    <button onClick={func} className={`button ${classes[icon]}`}>Click
    </button>
  )
}
