import { displayReviewCount, displayUser } from "./utils"

const reviews: {
    name: string
    stars: number
    loyaltyUser: boolean
    date: string
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const user: {
    userName: { first: string, last: string }
    isReturning: boolean
    age: number
    stayedAt: string[]
} = {
    userName: { first: 'Bobby', last: 'Brown' },
    isReturning: true,
    age: 29,
    stayedAt: [ 'florida-home', 'oman-flat', 'tokyo-bungalow' ]
}

displayReviewCount(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
displayUser(user.isReturning, user.userName.first)