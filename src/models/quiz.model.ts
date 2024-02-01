import { Decimal } from "@prisma/client/runtime/library.js"

export type Quiz = {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    passingPercentage: Decimal
}