// Interface inventory movement for save in db
export interface IInvMovData {
    movementType: string;
    articleId: any;
    originLocationId: any;
    destinationLocationId: any;
    quantity: any;
}


// Interface inventory movement from db
export interface IInvMovFormDB {
    id: any;
    movementType: string;
    articleId: any;
    originLocationId: any;
    destinationLocationId: any;
    quantity: any;
}