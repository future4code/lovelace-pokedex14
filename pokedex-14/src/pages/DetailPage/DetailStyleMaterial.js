import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
 
export const ContainerOfInitialButtons = styled(CardActionArea)({
    display: 'flex',
    alignItems:'center',  
    marginBottom:'4vh',
});


export const GoToPokedexButton = styled(Button)({
    backgroundColor:'tomato',
    margin: 'auto'
});

 
export const ComeBackButton = styled(Button)({

    margin: 'auto'
});