import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const searchHistoryAtom = atom<string[]>({
  key: "searchHistoryAtom",
  default: [],
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});
