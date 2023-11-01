import { useEffect, useState } from "react";
import { obterOfertas } from "../services/api";

export const useOfertas = () => {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        obterOfertas(setOfertas);
    }, []);

    return [ofertas, setOfertas];
}