export type PostId = string;
export type UserId = number;
export type CommentId = string;

export type PostEntity = {
    id: PostId,
    title: string,
    userId: UserId,
    body: string
}

export type CommentEntity = {
    postId: PostId,
    id: CommentId,
    name: string,
    email: string,
    body: string,
}

export type GeoOfAddress = {
    lat: string,
    lng: string,   
}

export type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoOfAddress,
}

export type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
}

export type UserEntity = {
    id: UserId,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
}