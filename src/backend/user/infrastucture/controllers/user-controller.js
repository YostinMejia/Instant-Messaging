import { UserService } from "../../application/services/user-service.js";
import { User } from "../../domain/entities/user-entity.js";

export class UserController {
    constructor(userRepository, jwtRepository) {
        this.userService = new UserService(userRepository)
        this.jwtRepository = jwtRepository
    }

    async register(req, res) {
        const { name, email, password } = req.body
        const user = new User(name, email, password)
        const id = await this.userService.register(user)
        const token = await this.jwtRepository.signPayload({ id: id })
        res.status(201).json({ success: true, response: { token: token } })
    }

    async logIn(req, res) {
        const { email, password } = req.body
        const id = await this.userService.logIn(email, password)
        const token = await this.jwtRepository.signPayload({ id: id })
        res.status(200).json({ success: true, response: { token: token } })
    }

    async blockUser(req, res) {
        const { idUserToBlock } = req.body
        const { usersBlocked } = await this.userService.blockUser(req.user.id, idUserToBlock)
        res.status(200).json({ success: true, response: { usersBlocked: usersBlocked } })
    }

}