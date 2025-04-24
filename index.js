//1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.

const getDeliveryDay = (days) => {
    days.forEach((day) => {
        switch (day) {
            case "Monday":
                console.log("Express delivery");
                break;
            case "Tuesday":
                console.log("No delivery");
                break;
            case "Friday":
                console.log("Weekend delivery");
                break;
            default:
                console.log("not supported");
                break

        }

    })
}
const days = ["Monday", "Tuesday", "Friday", "Thursday"]
getDeliveryDay(days)
// 2. Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

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
//3. Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

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
//4. Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

const liveGames = () => {
    let games = 5;
    while (games > 0) {
        console.log(`You have ${games} lives left`);
        games--;
    }
}
liveGames()
//5. Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.

const feedback = ["Good", "Loved it", "Could be better", "Great service"];
let i = 0;
if (feedback.length > 0) {
    do {
        console.log(feedback[i]);
        i++
    } while (i < feedback.length);
} else {
    console.log("No feedback available");
}



//6. Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

const loginStatus = (logins) => {;
    logins.forEach((login) => {;
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
//7. Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

const priorityTicket = (tickets) => {
    tickets.forEach((ticket) => {
        switch (ticket) {
            case "Low":
                console.log("Address in 7 days");
                break;
            case "Medium":
                console.log("Address in 4 days");
                break;
            case "High":
                console.log("Address in 24 hours");
                break;
            default:
                console.log("Priority not known");
                break

        }

    })
}
const tickets = ["Low", "High", "Medium", "Low"]
priorityTicket(tickets)




//8. Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.

const quizCount = () => {
    let seconds = 10;
    while (seconds >= 0) {
        console.log(`You have ${seconds} seconds left`);
        seconds--;
    }
}
quizCount()







