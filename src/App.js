import ThemeButton from './components/ThemeButton'
import styles from './App.module.sass';
import React from "react"
import BurgerMenu from './components/BurgerMenu';

console.log(styles);

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: true
    }
  }

  toggleTheme = () =>{
    this.setState((prevState) => {
        
       // let result;
        if(prevState.theme === true) {
         // result = true
         return{
         theme: false
        }
      }
        else {
          //result = false
        
        return {
        theme:true
      }
    }}

    )
  }
  render(){
     const test = "This is text"
  
     let themeClass = styles.lightTheme;
     if(this.state.theme === false) {
       themeClass = styles.darkTheme;
     }
  return (
    <div className={themeClass}> 
    <ThemeButton toggle={this.toggleTheme} theme={this.state.theme} />
    <BurgerMenu />
       <p> {test} </p>
    </div>
  )
}
}

export default App;
