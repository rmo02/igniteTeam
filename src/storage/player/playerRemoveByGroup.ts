import { PLAYER_COLLERCTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playerGetByGroup(group);

    const filtered = storage.filter((player) => player.name !== playerName);
    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLERCTION}-${group}`, players);
  } catch (error) {}
}
