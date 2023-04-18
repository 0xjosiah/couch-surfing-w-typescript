const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const reviews = [
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

const user = {
    userName: { first: 'Bobby', last: 'Brown' },
    isReturning: false
}

const displayReviewCount = (count: number, lastReviewer: string, isLastReviewerLoyalty: boolean) => {
    reviewTotalDisplay.innerHTML = `Reviews: ${count.toString()} | last reviewed by ${lastReviewer} ${isLastReviewerLoyalty ? '&#11088;' : ''}`
}

displayReviewCount(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const displayUser = (isReturning: boolean, userInfo: object) => {
    const returnMsg = isReturning ? 'back ' : ''
    userNameDisplay.innerHTML = `${returnMsg}, ${userInfo.userName.first}`
}

displayUser(user.isReturning, user)