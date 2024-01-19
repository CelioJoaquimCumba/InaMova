import { Option } from "./option.model.js"


export type Question = {
    id: string
    content: string
    explanation: string
    image: string
    options: Array<Option>
}