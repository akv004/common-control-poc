import React, {FC} from "react"
import styled, {css} from "styled-components";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";


interface BaseTemplateProps {
    className?: string;
    children?: React.ReactChild|React.ReactChild[]|undefined;
}

export const ChildWrapper = styled.div`
  min-height: 10em;

`;


export const BaseTemplate: FC<BaseTemplateProps> = (
    {
        className,
        children
    }) => {

    return (
        <>
            <Header headerText="MyOrg"/>
            <ChildWrapper>{children}</ChildWrapper>
            <Footer/>
        </>
    );
}