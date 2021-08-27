import styled from "styled-components";

export const TitleContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
margin-bottom:7vh;
background-image: url(${"https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png"});
color:white;
`

export const ImagesDiv = styled.div`
     border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:40vw;
   

    img {
        height:50vh;
        width:30vw;
        border: 1px solid black;
        border-radius:30%;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 30px;
    }
`

export const StatsDiv = styled.div`
   text-align:center;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center; 
   border: 1px solid black;
   width:25vw;
   p{
       border:solid black 1px;
       width:22vw;
   }
   background-image: url(${"https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png"});
    color:white;
    
`

export const ContainerTypeMoves = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    /* margin-right: 20px; */
    width:25vw;
    background-image: url(${"https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png"});
    color:white;
    `


export const TypeDiv = styled.div`
    text-align: center;
    border: 1px solid black;
    padding: 110px;
    

`

export const MoveDiv = styled.div`
    border: 1px solid black;
    top: 10px;
    text-align: center;
     padding: 100px;
    
`

export const ContainerDetails = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
   display:flex;
   flex-direction: row;
   justify-content:space-between;

  
    
`