'use strict';


fetch('../index.json')
.then(response => response.json())
.then(addUsersToList())
.catch(console.error)

function addUsersToList(users){
    const userList = document.getElementById('userList');
    users.forEach(users => {
        userList.appendChild(createUserCardElem(users))
    });
}

function createUserCardElem(users){
    //creating li for items
    const listItem = document.createElement('li');
    
    listItem.classList.add('userListElem')
    
    listItem.appendChild(createUserImageElem(users));
    listItem.appendChild(createFullNameElem(users));
    
    return listItem;
}


function createUserImageElem(user){
    //creating image
    const image = document.createElement('img');
    //creating container for image
    const imageContainer = document.createElement('div');

    imageContainer.setAttribute('src' , user.imageSrc)
    imageContainer.appendChild(image);

    return imageContainer;
}

function createFullNameElem({name, surname}){
    //creating container for name & surname
    const fullNameContainer = document.createElement('h2');
    fullNameContainer.innerText = `${name} ${surname}`

    fullNameContainer.classList.add('fullnameContainer')

    return fullNameContainer;
}