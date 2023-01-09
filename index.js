function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)



// function newImage(){

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pinrTree = document.createElement('img')
// pinrTree.src = 'assets/pine-tree.png'
// pinrTree.style.position = 'fixed'
// pinrTree.style.left = '450px'
// pinrTree.style.bottom = '200px'
// document.body.append(pinrTree)

// let tree = document.createElement('img')
// tree.src = 'assets/tree.png'
// tree.style.position = 'fixed'
// tree.style.left = '200px'
// tree.style.bottom = '400px'
// document.body.append(tree)

// let pillar = document.createElement('img')
// pillar.src = 'assets/pillar.png'
// pillar.style.position = 'fixed'
// pillar.style.left = '350px'
// pillar.style.bottom = '100px'
// document.body.append(pillar)

// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)


// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)
// }

// function newItem(){
//     let object = newItem

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// let staff = document.createElement('img')
// staff.src = 'assets/staff.png'
// staff.style.position = 'fixed'
// staff.style.left = '600px'
// staff.style.bottom = '100px'
// document.body.append(staff)


// let sheild = document.createElement('img')
// sheild.src = 'assets/sheild.png'
// sheild.style.position = 'fixed'
// sheild.style.left = '165px'
// sheild.style.bottom = '185px'
// document.body.append(sheild)

//     object.addEventListener('dbclick', function() {
//         object.remove()
//     })
// }

