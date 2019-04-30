const fs = require('fs');



let listarTabla = (base, limite) => {


    let data = '';

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i }\n`);
        //console.log(`${ base } * ${ i } = ${ base * i }`);

    }

    // if (!Number(base)) {
    //     reject(`El valor introducido = ${ base }, no es un numero`);
    //     return;

    // }


}


let creaArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido en base ${ base }, no es un numero, `);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
            //console.log(`${ base } * ${ i } = ${ base * i }`);

        }

        // para crear archivo 
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);


        });


    });


}


module.exports = {

    creaArchivo,
    listarTabla
}