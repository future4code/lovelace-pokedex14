import styled from "styled-components";

export const ImagesDiv = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 300px;
        border: 1px solid black;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 30px;
    }
`

export const StatsDiv = styled.div`
    border: 1px solid black;
    position: relative;
    right: 70px;
    
`

export const ContainerTypeMoves = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-right: 20px;
    `


export const TypeDiv = styled.div`
    text-align: center;
    border: 1px solid black;
    padding: 20px;
    

`

export const MoveDiv = styled.div`
    border: 1px solid black;
    position: relative;
    top: 200px;
    text-align: center;
    padding: 100px;
    
`

export const ContainerDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`