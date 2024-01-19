import { Option } from "./option.model.js"


export type Question = {
    id: string
    content: string
    image: string
    options: Array<Option>
}