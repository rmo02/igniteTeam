import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { ListEmpty } from '@components/ListEmpty';
import React, { useState, useEffect, useCallback } from 'react'
import { FlatList } from 'react-native';
import { Container} from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups(){
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      
    }
  } 

  function handleOpenGroup(group:string){
    navigation.navigate('players', {group});
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));
  

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
          title={item}
          onPress={()=> handleOpenGroup(item)}
          />
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

  