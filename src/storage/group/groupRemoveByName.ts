import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLERCTION, PLAYER_COLLERCTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoceByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLERCTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLERCTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
