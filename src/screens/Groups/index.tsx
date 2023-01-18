import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import React from 'react'
import { Container} from './styles';


export function Groups() {
  return (
    <Container>
       <Header />
       <Hightlight 
        title='Turmas'
        subtitle='Jogue com sua turma'
       />
    </Container>
  )
}

  