
import React from 'react'
import styled from 'styled-components/macro'

interface IMenuItemProps {
    active?: boolean;
    title?: string;
    icon?: string;
    //children: React.ReactNode
}

const Container = styled.div<IMenuItemProps>`
border-left: 5px solid ${props => props.active ? props.theme.activeMenu : 'transparent'};
width: 100%;
padding: 0.3rem;
padding-left: 2rem;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 1rem;
transition: 0.2s all ease-in-out;  

&:hover{
    background-color: rgba(0,0,0,0.1);
}
`

const Icon = styled.span<IMenuItemProps>`
color: ${props => props.active ? props.theme.activeMenu : '#aaa5a5'};
font-size: 1rem;
margin-right: 1rem;
`

const Title = styled.h1<IMenuItemProps>`
color: ${props => props.active ? props.theme.activeMenu : '#aaa5a5'};
font-size: 1rem;
font-weight: 400;
margin-right: 1rem;
`

export default function MenuItem(props: IMenuItemProps) {
    return (
        <Container active={props.active}>
            <Icon active={props.active} className="iconify" data-icon={`mdi-light:${props.icon}`}></Icon>
            <Title active={props.active}>{props.title}</Title>
        </Container>
    );
}






