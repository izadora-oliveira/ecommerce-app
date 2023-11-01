import { useEffect, useState } from "react";
import { obterAnuncios } from "../services/api";

export const useAnuncios = () => {
    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        obterAnuncios(setAnuncios);
    }, []);

    return [anuncios, setAnuncios];
}