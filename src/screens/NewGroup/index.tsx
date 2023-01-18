import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";


export function NewGroup(){
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
                <Hightlight 
                title="Nova turma"
                subtitle="crie ua turma para adicionar as pessoas"
                />

                <Input 
                placeholder="Nome da turma"
                />

                <Button 
                title="Criar"
                />
            </Content>
        </Container>
    )
}