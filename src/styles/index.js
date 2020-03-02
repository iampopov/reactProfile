import styled from "styled-components";

const umber = "#58504A";
const paleCyan = "#89DAFF";
const ceil = "#8F95D3";
const deepKoamaru = "#2B4570"
const yellow = "#EDDEA4"
const red = "#FC7753"
const platinum = "#E8EBE4"
const gray = "#738290"

export const FooterWrapper = styled.article`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: ${gray};
color: white;
text-align: center;
    .fa {
        margin: 0 2rem
    }
`
export const IconWrapper = styled.article`
 color: ${platinum};
 margin: 0 2rem; 
 :hover {
        cursor: pointer;
        color: ${red}; 
    }
:hover .tooltiptext {
    visibility: visible;
}

.tooltiptext {
    border-radius: 6px;
    background-color: ${red};
        bottom: 100%;
        //left: 5%;
        //margin-left: -40px;
    color: ${platinum};
    padding: 5px;
    position: absolute;
    text-align: center;
    visibility: hidden;
    width: auto;
    z-index: 1;
  }
  .tooltiptext::after {
    border-width: 5px;
    border-style: solid;
    border-color: ${red} transparent transparent transparent;
    content: " ";
    left: 50%;
    margin-left: -5px;
    position: absolute;
    top: 100%; 
  }
`

export const HeaderWrapper = styled.article`
position: fixed;
left: 0;
top: 0;
width: 100%;
background-color: ${gray};
.nav-link {
 color: ${platinum}
}
`
export const LargeElementWrapper = styled.article`
margin: 5rem 0 0;
width: 100%;

`
export const CardWrapper = styled.article`
z-index: 1000;
`