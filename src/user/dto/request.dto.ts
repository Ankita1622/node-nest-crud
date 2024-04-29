import { IsNumber, IsString } from "class-validator";

export class RequestUserDto {
    @IsString()
    private readonly name!:string

    @IsNumber()
    private readonly id!:number

    @IsNumber()
    age:number
}