import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { ButtonContainer, Container, Description, Title } from './styles';


export default function Home() {
  return (
    <Container>
      <Title>Sistema Cadastros</Title>
      <Description>Sistema para inserir cadastros. Clique em Clientes para adicionar clientes na base de dados ou acione o botão de para adicionar produtos na base de dados.</Description>
      <ButtonContainer>
        <NavLink to='/clientes'><Button backColor='#117BB0'>Clients</Button></NavLink>
        <NavLink to='/produtos'><Button backColor='#FD5A57'>Produts</Button></NavLink>
      </ButtonContainer>
      <Loader />
    </Container>
  )
  }