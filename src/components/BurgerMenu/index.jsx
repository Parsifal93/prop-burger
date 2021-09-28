import React, { Component } from 'react';
import NavMenu from './NavMenu';

class BurgerMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
           isShown: false
        };
        

        this.toggleShown = () => {
            this.setState((prevState) => {
                return {
                  isShown: !prevState.isShown,
                    };
                }
            );

        };
    }
    render() {
        const Nav = ['Основы', 
        'Документация', 
        'Партнеры',
        'Обратная связь'];

        const styleDisplay = this.state.isShown ? 'block' : 'none';
        
    
        
        return (
            <div>
                <div onClick={this.toggleShown}>On/Off</div>
                <div style={{display:styleDisplay}}><NavMenu links={Nav}/></div>
                
            </div>
        );
        }
    }


export default BurgerMenu;
