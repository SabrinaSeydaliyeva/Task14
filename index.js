// let box = document.querySelector('.box')


// function addUser(userName, userSurname, userPosition) {
//     let h1 = document.createElement('h1')
//     h1.innerText = userName

//     let h2 = document.createElement('h2')
//     h2.innerText = userSurname

//     if (userName == 'Aytac' && userSurname == 'Seferova') {
//         box.append(h1, h2)
//     }

//     else {
//         console.log('bu istifadeci elave oluna bilmez');
//     }


//     let p = document.createElement('p')
//     p.innerText = userPosition
//     if (userPosition.length > 5) {
//         box.append(p)
//     }
//     else {
//         console.log('yararsizdir');
//     }


//     console.log(userName, userSurname, userPosition);
// }

// addUser('Aytac', 'Seferova', 'Developer')
// addUser('Sabrina', 'Seydaliyeva', 'Telebe')


let box1=document.querySelector('.box-1')
let box2=document.querySelector('.box-2')

function findNumber(a) {
        let li = document.createElement('li')
        li.innerText = a

        if (a%2==0) {
            box2.append(li)
        }
        else {
            box1.append(li)
        }
}

findNumber ('10')
findNumber ('7')
    
       
