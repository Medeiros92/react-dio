import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [num, setNum] = useState(0)

    function Adicionar() {
        setNum(num + 1)
    }

    function Remover() {
        setNum(num - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                My first card
            </div>
            <div className="card-body">

                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>

                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                
                <p>{num}</p>
            </div>
        </div>
    )
}

export default Card;