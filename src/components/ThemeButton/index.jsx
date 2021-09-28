// import style from'./ThemeButton.module.sass';
import styles from './../../App.module.sass';
import './ThemeButton.module.sass'
import PropTypes from 'prop-types'

console.log(styles);




function ThemeButton (props) {
  console.log(props);
  
    let themeClass = styles.lightTheme + ' bt';
    if(props.theme !== false) {
      themeClass = styles.darkTheme + ' bt';
    }
    return(
        <button onClick={props.toggle} className={themeClass}>
            Theme switch</button>
    )

}

ThemeButton.propTypes = {
  theme: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default ThemeButton