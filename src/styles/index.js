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
:hover {
    cursor: pointer;
    color: ${yellow}    
}
`

export const HeaderWrapper = styled.article`
background-color: ${gray};
.nav-link {
 color: ${platinum}
}
`
export const LargeElementWrapper = styled.article`
margin: 0;
position: absolute;
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);

`