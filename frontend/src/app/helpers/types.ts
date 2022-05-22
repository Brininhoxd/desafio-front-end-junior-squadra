export interface Oferta {
    id: number,
    titulo: string,
    descricaoBreve: string,
    valor: number,
    categoria: { id: number, nome: string },
    detalhes: string[],
    destaques: string[],
    img: string
}


