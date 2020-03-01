import React from "react";
import { Row } from 'reactstrap';
import { FooterWrapper } from "../styles";
import { IconWrapper } from "../styles";


const Footer = props => {
    return (
        <FooterWrapper>
            <Row>
            <IconWrapper>
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </IconWrapper>
            <IconWrapper>
            <i className="fa fa-linkedin-square fa-3x ml-2 mr-2" aria-hidden="true"></i>
            </IconWrapper>
            <IconWrapper>
            <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
            </IconWrapper>
            </Row>
        </FooterWrapper>
        
    )
}

export default Footer;