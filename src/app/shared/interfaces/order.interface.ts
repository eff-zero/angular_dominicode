export interface IOrder {
  id: number
  name: string
  date: string
  shippingAddress?: string
  city?: string
  pickup: boolean
  idStore?: number
}

export interface IOrderDetail {
  details: IDetails[]
  orderId: number
  id?: number
}

export interface IDetails {
  productId: number
  productName: string
  quantity: number
}
