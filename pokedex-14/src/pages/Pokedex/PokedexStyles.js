import { createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
// import { styled } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';




export const theme = createTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: purple[500],
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      
      main: '#f44336',
      // dark: será calculada com base palette.secondary.main,
      
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

// export const ButtonDelete = styled(Button)({
//    margin: '15px'
//   });

// export const ButtonDetails = styled(Button)({
   
// });

// export const ButtonBack = styled(Button)({
//    margin:'1px'
// });

