/**
 * @openapi
 * components:
 *  schemas:
 *    Message:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The id is assigned by the entity responsible for storing the data.
 *          example: 62c1627b7682ba00c96af0e3
 *        userId:
 *          type: string
 *          description: Id of whoever sent the message
 *          example: 15c1627b7682ba00c96af0e5
 *        text:
 *          type: string
 *          description: Message text
 *          example: Come here asap.
 *        createdAt:
 *          type: string
 *          format: date
 *          description: Date when the message was sent
 *          example: 2024-02-05T22:30:19.053+00:00
 *      required:
 *          - userId
 *          - text
 *      example:
 *          id: 98a1627b7682ba00c96af0e3
 *          userId: 62c1627b7682ba00c96af0e3
 *          text: come here asap.
 *          createdAt: 2024-02-05T22:30:19.053+00:00
 */

import { v4 as uuidv4 } from "uuid"

export class Message {
    constructor(text, userId) {
        this.id = uuidv4()
        this.userId = userId
        this.text = text
        this.createdAt = new Date()
    }

}
