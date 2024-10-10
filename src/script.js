// function classificarHeroi(nome, xp) {
//     let nivel;
  
//     if (xp < 1000) {
//       nivel = "Ferro";
//     } else if (xp <= 2000) {
//       nivel = "Bronze";
//     } else if (xp <= 5000) {
//       nivel = "Prata";
//     } else if (xp <= 7000) {
//       nivel = "Ouro";
//     } else if (xp <= 8000) {
//       nivel = "Platina";
//     } else if (xp <= 9000) {
//       nivel = "Ascendente";
//     } else if (xp <= 10000) {
//       nivel = "Imortal";
//     } else   
//    {
//       nivel = "Radiante";
//     }
  
//     console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);   
  
//   }
  
//   // Exemplo de uso
//   classificarHeroi("Jhin", 8500);
const nomeHeroi = document.querySelector(".nome-heroi")
const xpInput = document.querySelector(".xp")
const resultado = document.querySelector(".resultado");
const classificarBtn = document.querySelector(".classificar");



function classificarHeroi(nome, xp){
    if (isNaN(xp)) {
        return "XP inválido. Por favor, insira um número.";
      }
    let nivel ;

    switch (true) {
        case xp < 1000:
            nivel = "Ferro"
            break;
        case xp >= 1001 && xp <= 2000:
            nivel = "bronze"
            break
        case xp >= 2001 && xp <= 5000:
            nivel = "Prata"    
            break
        case xp >= 5001 && xp <= 7000:
            nivel = "Ouro"
            break
        case xp >= 7001 && xp <= 8000:
            nivel = "Platina"
            break
        case xp >= 8001 && xp <= 9000:
            nivel = "Ascendente"
            break
        case xp >= 9001 && xp <= 10000:
            nivel = "Imortal"
            break
        
        default:
            nivel = "Radiante";
    }

    return nivel;
}   


    classificarBtn.addEventListener('click', () =>{
        const nome = nomeHeroi.value;
        const xp = parseInt( xpInput.value);
    
        const nivel = classificarHeroi("nome", xp);
        resultado.textContent = `O Herói de nome ${nome}  está no nivel de  ${nivel}`;
    });

    
    




