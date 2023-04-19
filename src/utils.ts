const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

const displayReviewCount = (count: number, lastReviewer: string, isLastReviewerLoyalty: boolean) => {
    reviewTotalDisplay.innerHTML = `Reviews: ${count.toString()} | last reviewed by ${lastReviewer} ${isLastReviewerLoyalty ? '&#11088;' : ''}`
}

const displayUser = (isReturning: boolean, userName: string) => {
    if(isReturning) returningUserDisplay.innerHTML = ' back'
    userNameDisplay.innerHTML = `, ${userName}`
}

export { displayReviewCount, displayUser }