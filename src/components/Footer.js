import React from "react";
import { Row } from 'reactstrap';
import { FooterWrapper } from "../styles";
import { IconWrapper } from "../styles";


const Footer = props => {
    return (
        <FooterWrapper>
            <Row>
            <a href="https://github.com/iampopov" rel="noopener noreferrer" target="_blank">
            <IconWrapper>
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </IconWrapper>
            </a>
            <a href="https://www.linkedin.com/in/popdev/" rel="noopener noreferrer" target="_blank">
            <IconWrapper>
            <i className="fa fa-linkedin-square fa-3x ml-2 mr-2" aria-hidden="true"></i>
            </IconWrapper>
            </a>
            <a href="mailto:ivantsar@gmail.com?Subject=Hello%20again" target="_top" rel="noopener noreferrer" target="_blank">
            <IconWrapper>
            <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
            </IconWrapper>
            </a>
            </Row>
        </FooterWrapper>
        
    )
}

export default Footer;