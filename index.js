//1
const getDeliveryDay = (days) => {
    days.forEach((day) => {
        switch (day) {
            case "Monday":
                console.log("Fashion delivery");
                break;
            case "Tuesday":
                console.log("Bakery delivery");
                break;
            case "Friday":
                console.log("Shoes delivery");
                break;
            default:
                console.log("not supported");
                break

        }

    })
}
const days = ["Monday", "Tuesday", "Friday", "Thursday"]
getDeliveryDay(days)
//2
const getBookStatus = (responses) => {
    responses.forEach((response) => {
        switch (response) {
            case "available":
                console.log("Ready to lend");
                break;
            default:
                console.log("Checked Out");
                break

        }

    })
}
const responses = ["available", "available", "available", "borrowed", "available"]
getBookStatus(responses)
//3
const getages = (age => {
    ;
    for (let i = 0; i < age.length; i++) {
        if (age[i] >= 18) {
            console.log("Adult");
        } else if (age[i] < 18) {
            console.log("Minor");
        }
    }

})
const age = [20, 16, 15, 25]
console.log(getages(age))
//4
const liveGames = () => {
    let games = 5
    while (games > 0) {
        console.log(`You have ${games} lives left`)
        games--;
    }
}
liveGames()
//5
const feedback=["Good","Loved it","Could be better","Great service"]
let i=0;
if (feedback.length>0){
    do{
        console.log(feedback[i])
        i++
    }while(i<feedback.length)
    }else{
        console.log("No feedback available")
    }



//6
const loginStatus = (logins) => {
    logins.forEach((login) => {
        switch (login) {
            case "logged in":
                console.log("Welcome back!");
                break;
            default:
                console.log("Please log in");
                break

        }

    })
}
const logins = ["logged in", "not logged", "logged in", "logged in", "logged in"]
loginStatus(logins)
//7

//8
const quizCount = () => {
    let seconds = 10
    while (seconds >= 0) {
        console.log(`You have ${seconds} seconds left`)
        seconds--;
    }
}
quizCount()
 






