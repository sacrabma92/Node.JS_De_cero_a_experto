require('colors');

const { inquirerMenu } = require('./helpers/inquirer.js')


console.clear();

const main = async () => {
    console.log('Hola Mundo')

    let opt = '';

    do {
        opt = await inquirerMenu();


    } while (opt !== '0')


    // pausa(); 
}


main();