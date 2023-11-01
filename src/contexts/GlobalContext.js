import { createContext, useEffect, useState } from "react";
import { obterItensDoCarrinho, removerLocalmente, salvarLocalmente } from "../services/local";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState();
    const [items, setItems] = useState([]);

    useEffect(() => {
        obterItensDoCarrinho(setItems);
    }, []);

    const adicionarItemNoCarrinho = async (item) => {
        setItems([...items, item]); // destruct

        await salvarLocalmente([...items, item]);
    }

    const removerItemDoCarrinho = async (item) => {
        const listaItens = items.filter((element) => element.id !== item.id);

        setItems(listaItens);

        await salvarLocalmente(listaItens);
    }

    const esvaziarCarrinho = async () => {
        setItems([]);

        await removerLocalmente();
    }

    return (
        <GlobalContext.Provider
            value={{
                loggedUser,
                setLoggedUser,
                items,
                setItems,
                adicionarItemNoCarrinho,
                removerItemDoCarrinho,
                esvaziarCarrinho
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}