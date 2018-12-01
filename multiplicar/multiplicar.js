const fs = require('fs');
const colors = require('colors');


let ListarTabla = (base, limite) => {

    return new Promise((resolucion, error) => {
        if (!base == Number) {
            return error('Solo se aceptan numeros')
        } else {
            let tabla = [];
            for (let i = 0; i <= limite; i++) {
                tabla.push(`${base} * ${i} = ${base*i}`);
            }
            return resolucion(tabla);
        }
    });

}


let CrearArchivo = (base, limite) => {

    return new Promise((resolv, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';

        for (let i = 0; i < limite; i++) {;
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //xrea un archivo con el contenido del array y lo guarda dentro del proyecto

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolv(`tabla${base}.txt`)
        });
    })
}

module.exports = {
    CrearArchivo: CrearArchivo,
    ListarTabla: ListarTabla
}