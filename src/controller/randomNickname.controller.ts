import { ApiProperty } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { RandomNicknameService } from "../service/randomNickname.service";

@Controller("random-nickname")
export class RandomNicknameController {
  constructor(private randomNicknameService: RandomNicknameService) {}
  @ApiProperty({
    example: "행복한 빵 123",
    description: "랜덤 닉네임 생성",
  })
  @Get()
  async generateRandomNickname(): Promise<string> {
    return this.randomNicknameService.generateRandomNickname();
  }
}
