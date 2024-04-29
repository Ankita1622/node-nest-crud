import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RequestUserDto } from './dto/request.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){
    }

   @Post()
    async createUser(@Body() requestDto:RequestUserDto)
    {
       return await this.userService.createUser(requestDto)
    }


    @Get()
    async GetAllUser()
    {
       return await this.userService.GetAllUser()
    }

    @Get(':id')
    async GetUser(@Param('id') id:number)
    {
       return await this.userService.GetUser(id)
    }

    @Patch(':id')
    async UpdateUser(@Param('id') id:number,@Body() requestDto:RequestUserDto)
    {
       return await this.userService.UpdateUser(id,requestDto)
    }

    @Delete(':id')
    async DeleteUser(@Param('id') id:number)
    {
       return await this.userService.DeleteUser(id)
    }
}
