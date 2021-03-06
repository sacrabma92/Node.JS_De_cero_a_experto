const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['1. Crear lista', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {
    // console.clear();

    console.log('========================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('=========================\n'.green);

    const opt = await inquirer.prompt(preguntas)

    return opt;
}


module.exports = {
    inquirerMenu
}