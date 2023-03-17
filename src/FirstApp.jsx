// const newMessage = {
//     message: 'Hola Mundo', 
//     title: 'Roberto'
// }

// const getResult = (a,b) => {//Si no hay ninguna dependencia, siempre deben ir fuera del Functional Component
//     return a + b;
// }
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {

    // console.log(props);

  return (
    <>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{ subTitle }</p>
        <p>{ name }</p>

    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: "Pedro Weber",
    subTitle: 'No hay subtítulo',
    title: 'No hay título',
}