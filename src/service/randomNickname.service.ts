import { Injectable } from "@nestjs/common";
import { firstNames, secondNames } from "../nicknames";

@Injectable()
export class RandomNicknameService {
  async generateRandomNickname(): Promise<string> {
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomSecondName =
      secondNames[Math.floor(Math.random() * secondNames.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    const randomNickname =
      randomFirstName + " " + randomSecondName + " " + randomNum;
    return randomNickname;
  }
}
