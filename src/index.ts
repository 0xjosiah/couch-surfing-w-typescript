// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
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

const displayReviewCount = (count: number, lastReviewer: string, isLastReviewerLoyalty: boolean) => {
    reviewTotalDisplay.innerHTML = `Reviews: ${count.toString()} | last reviewed by ${lastReviewer} ${isLastReviewerLoyalty ? '⭐️' : ''}`
}

displayReviewCount(reviews.length, reviews[0].name, reviews[0].loyaltyUser)