import { Injectable } from '@nestjs/common';
import { RequestUserDto } from './dto/request.dto';

@Injectable()
export class UserService {

    users:any[] = []
    async createUser(requestDto:RequestUserDto)
    {
        console.log('requestDto',requestDto)
        this.users.push(requestDto)
        //this.users.push(requestDto)
        console.log('users',this.users)
        return 'user added';
    }
    
    async GetAllUser()
    {
        return this.users;
    }

    async GetUser(id:number)
    {
       console.log(id)
       const userData = this.users.find((user) => user.id == id)
       console.log(userData)
       return userData
    }

    async UpdateUser(id:number,updateDto:RequestUserDto)
    {
        const userData = this.users.findIndex((user)=>user.id == id)

        if(!userData)
        {
            return "no data found";
        }

        return this.users[userData] = updateDto
    }

    async DeleteUser(id:number) {
       console.log(id)
       const userData = this.users.findIndex((user) => user.id == id)

       this.users.splice[userData]
       console.log(userData)
       return userData
    }
}
