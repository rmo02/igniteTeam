import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";


export function NewGroup(){
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('players', {group})
    }

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
                onChangeText={setGroup}
                />

                <Button 
                title="Criar"
                onPress={handleNew}
                />
            </Content>
        </Container>
    )
}