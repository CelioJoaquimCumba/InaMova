import { Decimal } from "@prisma/client/runtime/library.js"

export type Lesson = {
    id: string
    title: string
    thumbnail: string
    time: Decimal
    subjectId:string
}