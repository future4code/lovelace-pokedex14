import React from 'react'
import { ButtonHome, Headers } from './HeaderStyles'
// import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
// import { useHistory } from 'react-router-dom';


function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  export function Header()  {
  // const histor = useHistory()

  // const goToHome = () => {
  //   histor.push('/')
  // }

      
    return (
        <Headers>
            <ButtonHome>
            <HomeIcon fontSize="large" />
            </ButtonHome>
        </Headers>
    )

}