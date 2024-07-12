
export interface IOrder {
    items: string[],
    totalAmount: number,
    orderDate: string,
    coupon?: string,
    status: string,

}