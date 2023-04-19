const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

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

const displayReviewCount = (count: number, lastReviewer: string, isLastReviewerLoyalty: boolean) => {
    reviewTotalDisplay.innerHTML = `Reviews: ${count.toString()} | last reviewed by ${lastReviewer} ${isLastReviewerLoyalty ? '&#11088;' : ''}`
}

displayReviewCount(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const displayUser = (isReturning: boolean, userName: string) => {
    if(isReturning) returningUserDisplay.innerHTML = ' back'
    userNameDisplay.innerHTML = `, ${userName}`
}

displayUser(user.isReturning, user.userName.first)