export interface IUserInput {
    SearchValue: (string | null);
    cardId: any;
    dbfId: number;
    name: any;
    cardSet: any;
    type: string;
    text: any;
    playerClass: string;
    locale: string;
}

export interface IContentCardProps {
    patch: string | null;
    ImageUrl: string | null;
    Description: string | null;
    cardsData: Array<any> | [] | null;
    Flavor: string | null;
}
