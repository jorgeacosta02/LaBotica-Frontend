// Interface inquiry for save in db
export interface IInquiryData {
    movementType: string;
    articleId: any;
    originLocationId: any;
    destinationLocationId: any;
}


// Interface inquiry from db
export interface IInquiryFromDB {
    id: any;
    movementType: string;
    articleId: any;
    originLocationId: any;
    destinationLocationId: any;
}