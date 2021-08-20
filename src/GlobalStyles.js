import {createGlobalStyle} from 'styled-components'

const GlobalStyles=createGlobalStyle`


body{
    margin:0%;
    padding:0%;
    text-decoration:none;
}
.homepage{
    display:flex;
}
#columna img{
    margin-right:-420px;
    display:flex;
    width:30%;
    height:auto;
}
#columna2{
    position:relative;
    margin-bottom:-30px;
    margin-left:-50px;
    padding:20px 15px 0px 10px;
    border-radius:20px 0px 0px 20px;
    background-color: beige;
}
#columna3{
    margin-bottom:-30px;
    padding:5px 5px 0px 0px;
    border-radius:20px 0px 0px 20px;
    background-color: #2B2E43;
}
#columna{
    position:relative;
    margin-bottom:-30px;
    padding:15px 10px 17px 5px;
    margin-left:-30px;
    background-color: #2B2E43;
}
#columna #new{
    padding-top:273px;
}
#usuario h6{
    background-color:white;
    font-size:10px;
    margin:20px 4px 0px -25px;
    border-radius:10px 10px 0px 0px;
}
#usuario h5{
    background-color:gray;
    margin: 0px 4px 50px -25px;
}
li{
    list-style: none;
    text-decoration: none;
}
#columna2 img{
    height:15px;
    width:auto;
    padding-left:10px;
}
#columna2 .buscador{
    background:white;
    border-radius: 20px 0px 0px 20px;
    padding:5px 0px 5px 10px;
    border:2px solid black;
}
/*-------------------------RESPONSIVE----------------------- */
@media only screen and (min-width: 400px) and (max-width:1080px){ {
    .homepage{
    display:flex;
}
#columna img{
    margin-right:-420px;
    display:flex;
    width:30%;
    height:auto;
}
#columna2{
    position:relative;
    margin-bottom:-30px;
    padding:15px 15px 0px 10px;
    margin-left:-60px;
    border-radius:20px 0px 0px 20px;
    background-color: beige;
}
#columna3{
    position:relative;
    margin-bottom:-30px;
    padding:5px 5px 0px 0px;
    border-radius:20px 0px 0px 20px;
    background-color: #2B2E43;
}
#columna{
    position:relative;
    margin-bottom:-30px;
    padding:5px 13px 18px 5px;
    background-color: #2B2E43;
}
#columna #new{
    padding-top:273px;
}
#usuario h6{
    background-color:white;
    font-size:10px;
    margin:20px 4px 0px -25px;
    border-radius:10px 10px 0px 0px;
}
#usuario h5{
    background-color:gray;
    margin: 0px 4px 50px -25px;
}
}
`;

export default GlobalStyles;