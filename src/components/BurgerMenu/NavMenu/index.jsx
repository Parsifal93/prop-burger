import PropTypes from 'prop-types';

function NavMenu (props) {
    // console.log(props.links);
    const arrayJSX = props.links.map((value) => {
    const jsx =(
    <div key={value}>
    <a href="//http:www.google.com">{value}</a>
    </div>
    );
    return jsx;
    })
return(
     <nav>
       {arrayJSX}
    </nav>
);
}


NavMenu.propTypes = {
    links: PropTypes.array.isRequired
}

export default NavMenu;