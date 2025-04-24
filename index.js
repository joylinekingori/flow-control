const getInventory=(inventory)=>{
    for (let i=0;i<inventory.length; i++){
        if (inventory[i]==0){
            console.log("Item not found");
        }else{
            console.log("Item found");
        }
}
}
const inventory=[20,30,0,60,59,0]
getInventory(inventory)


function getMarks(scores){

   for(let i = 0;i< scores.length; i++){
    let score;
    if (scores[i] >= 85){
        score="A"
        console.log(`Your score is ${scores[i]}, and your is ${score}`)
    }
    else if(scores[i] >= 70 && scores[i] <85){
        score="B"
        console.log(`Your score is ${scores[i]}, and your is ${score}`)

    }
    else if (scores[i] >=65 && scores[i] <70){
        score="C"
        console.log(`Your score is ${scores[i]}, and your is ${score}`)
    }
    else if (scores[i] >=50 && scores[i] <=65){
        score="D"
        console.log(`Your score is ${scores[i]}, and your is ${score}`)
    }
    else{
    score="E"
    console.log(`Your score is ${scores[i]}, and your is ${score}`)
    }
   }
        
}
    const gradesto=[85,95,25,50,40,60,70]
    getMarks(gradesto)


    const loginAttempts =()=>{
        let attempts = 1
        while(attempts<=3){
            console.log(`login attempt ${attempts}`)
            attempts++
        }
        }   
    loginAttempts() 

    const loginAttemptsWithDowhile =()=>{
        let attempts=1
        do{
            console.log(`Login attempt with do...while ${attempts}`)
            attempts++
        }while(attempts<=3)
    }
    loginAttemptsWithDowhile()

    const getNotifications=(notifications)=>{
     notifications.forEach((notification) => {
        switch(notification){
            case "sms":
                console.log("Send sms");
                break;
            case "email":
                    console.log("Send email");
                break;
            case "push":
                    console.log("Send push notification");
                    break;
            default:
                console.log("not supported")
                break;
            }
               
        })
    }
    const notifications=['sms','email','push']
    getNotifications(notifications)

//1
    const getDeliveryDay=(days)=>{
     days.forEach((day)=>{
            switch(day){
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
    const days=["Monday","Tuesday","Friday","Thursday"]
    getDeliveryDay(days)
    //2
    const getBookStatus=(responses)=>{
       responses.forEach((response)=>{
               switch(response){
                   case "available":
                       console.log("Ready to lend");
                       break;
                  default:
                       console.log("Checked Out");
                       break
       
                   }
           
               })
       }
       const responses=["available","available","available","borrowed","available"]
       getBookStatus(responses)
//3
       const getages=(age=>{;
            for (let i=0;i<age.length;i++){
                if (age[i]>=18){
                    console.log("Adult");
                }else if(age[i]<18){
                    console.log("Minor");
                }
            }
               
        })
        const age=[20,16,15,25]
        console.log(getages(age))
//4
        const liveGames=()=>{
            let games = 5
            while(games>0){
                console.log(`You have ${games} lives left`)
                games--;
            }
            }   
        liveGames()
//5
//6
const loginStatus=(logins)=>{
    logins.forEach((login)=>{
            switch(login){
                case "logged in":
                    console.log("Welcome back!");
                    break;
               default:
                    console.log("Please log in");
                    break
    
                }
        
            })
    }
    const logins=["logged in","not logged","logged in","logged in","logged in"]
    loginStatus(logins)
    //7

    //8
    const quizCount =()=>{
        let seconds = 10
        while(seconds>=0){
            console.log(`You have ${seconds} seconds left`)
            seconds--;
        }
        }   
    quizCount()


        
   
        
    

//     const getAccessToRoles=(roles)=>{
//         roles.forEach(role=>{
//             switch(role){
//                 case "admin":
//                     case "commenter":
//                         case "viewer":
//                     console.log(`${role} role access`)
//                     break;
//                 default:
//                     console.log(`${role} role not  supported`);
//                     break;
//             }
//         })
        
//     }
// const roles = ["admin", "editor","commentor"]
// getAccessToRoles(roles)







