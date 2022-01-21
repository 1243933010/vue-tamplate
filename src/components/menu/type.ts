 interface Item{
    name:string,
    index:string,
    icon:string,
    list:Index
}
export interface Index{
    [index:number]:Item
}
export interface RefIndex{
    value:Index
}

 