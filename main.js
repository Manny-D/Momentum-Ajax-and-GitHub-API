console.log("Rocketship Ajax - Check in!")

document.body.style.backgroundImage = "url('https://images6.alphacoders.com/112/thumb-1920-1127012.jpg')";

let profileDiv1 = document.querySelector('#profile')

fetch ('https://api.github.com/users/Manny-D', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 10
        console.log('The response is', data)

        // test image - working
        let pImg = document.createElement('img')
        pImg.classList.add('image')
        pImg.src = `https://avatars.githubusercontent.com/u/99146530?v=4`
        profileDiv1.appendChild(pImg)

        let nameDiv = document.createElement('p')
        nameDiv.classList.add('name')
        nameDiv.innerText = data.name
        profileDiv1.appendChild(nameDiv)
    })


//Profile section part 2 - Location, GH URL and GH Username    
let profileDiv2 = document.querySelector('#profile2')

fetch ('https://api.github.com/users/Manny-D', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  
        return response.json()
    })
    .then (function (data) {  

        //test - GitHub Info
        let pGhloc = document.createElement('p')
        pGhloc.classList.add('ghLocation')
        pGhloc.innerText = `Location: ${data.location}`
        profileDiv2.appendChild(pGhloc)


        let pGhurl = document.createElement('p')
        // pGhurl.classList.add('url')
        let a = document.createElement('a')
        pGhurl.innerText = `GitHub URL:`
        // profileDiv2.appendChild()
        let link = document.createTextNode(`${data.login}`)
        a.appendChild(link)
        a.title = `${data.login}`
        a.href = `${data.url}`
        profileDiv2.appendChild(pGhurl)
        profileDiv2.appendChild(a)
        

        let pGhun = document.createElement('p')
        pGhun.classList.add('username')
        pGhun.innerText = `GitHub Username: ${data.login}`
        profileDiv2.appendChild(pGhun)

    })

// Test - Repo Header - working
let reposDiv = document.querySelector('#repoheader')
    let pGhRepoText = document.createElement('h2')
    // pGhRepoText.classList.add('repohead')
    pGhRepoText.innerText = `GitHub Repos`
    reposDiv.appendChild(pGhRepoText)


// Test - Repo body - working
let reposDiv2 = document.querySelector('#myrepos')
        fetch ('https://api.github.com/users/Manny-D/repos', {
            method: 'GET',
            headers: {},
        })
            .then(function(response) {  
                return response.json()
            })
            .then (function (data) {  
                console.log('The response is', data)
        
            //function myRepo (){
            let pRepoList = document.createElement('p');
                let a = document.createElement('a');
                //let link = document.createTextNode("Profile");
                let link = document.createTextNode(`${data[0].name}`);
                a.appendChild(link);
                a.title = `${data[0].name}`;
                a.href = `${data[0].html_url}`
                reposDiv2.appendChild(a);
        })