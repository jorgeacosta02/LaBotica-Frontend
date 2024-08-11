

// Interface for save article in db
export interface IArticleData {
    name: '',
    description: '',
    unit: '',
    price: '',
    image: '',
}


// Interface article from db
export interface IArticleFormDB {
    id: any;
    name: '',
    description: '',
    unit: '',
    price: '',
    image: '',
}