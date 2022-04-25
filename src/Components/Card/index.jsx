import { Container } from "./styles"
import { FiClipboard, FiCalendar } from "react-icons/fi"

import Button from "../Button"

const Card = ({title, date, onClick }) => {

    return(
        <Container>
            <time>
                <FiCalendar/> {date}
            </time>
            <hr/>
            <span>
                <FiClipboard/> {title}
            </span>
            <Button onClick={onClick}>Concluir </Button>
        </Container>
    )
}

export default Card