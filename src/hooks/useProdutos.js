import { useEffect, useState } from "react";
import { obterProdutos } from "../services/api";

export const useProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        obterProdutos(setProdutos);
    }, []);

    return [produtos, setProdutos];
}