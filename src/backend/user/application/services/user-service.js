import bcrypt from "bcryptjs"
import { NotFound } from "../../../shared/application/errors/not-found.js"
import { InvalidCredentials } from "../errors/invalid-credentials.js"
import { Registered } from "../../../shared/application/errors/registered.js"

export class UserService {

    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async register(user) {
        const idFound = await this.userRepository.findIdByEmail(user.email)
        if (idFound) {
            throw new Registered("Email")
        }

        user.password = await this.hashPassword(user.password)
        const { id } = await this.userRepository.create(user)

        return id
    }

    async logIn(email, password) {
        const idFound = await this.userRepository.findIdByEmail(email)
        const userFound = await this.userRepository.findById(idFound)
        if (!idFound) {
            throw new NotFound("User")
        }
        const comparePasword = this.compareHashedPassword(password, userFound.password.toString())

        if (email !== userFound.email || !comparePasword) {
            throw new InvalidCredentials()
        }

        return idFound
    }

    async blockUser(userId, idUserToBlock) {
        const userFound = await this.userRepository.findById(userId)
        const userToBlock = await this.userRepository.findById(idUserToBlock)

        if (!userToBlock) {
            throw new NotFound("User to block")
        }

        if (!userFound.usersBlocked.includes(idUserToBlock)) {
            userFound.usersBlocked.push(idUserToBlock)
        }

        const newUser = await this.userRepository.update(userId,
            { usersBlocked: userFound.usersBlocked }
        )

        return newUser
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    async compareHashedPassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword)
    }

} 