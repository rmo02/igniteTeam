import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLERCTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storagePlayer = await playerGetByGroup(group);

        const playerAlreadyExists = storagePlayer.filter(player => player.name === newPlayer.name);

        if(playerAlreadyExists.length > 0) {
            throw new AppError('Estápessoa já esta adicionada em um time aqui')
        }

        const storage = JSON.stringify([...storagePlayer, newPlayer]);


        await AsyncStorage.setItem(`${PLAYER_COLLERCTION}-${group}`, storage)
        
    } catch (error) {
        throw error;
    }
}

