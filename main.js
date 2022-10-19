let abc = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
let guardar = []
let guardar_descifrado = []


    abc.forEach((element,index) => {
      console.log(`${index}-${element}`) 
    });


const cifrado = () =>{
        
    
        const x = document.getElementById('num_letra').value
        const n = document.getElementById('clave').value
        const suma = parseInt(x) + parseInt(n)

        const cesar = suma % 27

        console.log(cesar)
        guardar.push(abc[cesar])
    
    document.getElementById('texto_cifrado').innerHTML = guardar    
    
    
}
document.getElementById('btn').addEventListener('click',cifrado)

