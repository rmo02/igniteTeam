import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { ListEmpty } from '@components/ListEmpty';
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { Container} from './styles';
import { useNavigation } from '@react-navigation/native';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
       <Header />
       <Hightlight 
        title='Turmas'
        subtitle='Jogue com sua turma'
       />

       <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
          title={item}/>
        )}
        contentContainerStyle={groups.length === 0 && {flex:1 }}
        ListEmptyComponent={()=> (
          <ListEmpty message='Cadastre sua primeira turma'/>
        )}
       />

       <Button 
       title='Criar nova turma'
       onPress={handleNewGroup}
       />

    </Container>
  )
}

  