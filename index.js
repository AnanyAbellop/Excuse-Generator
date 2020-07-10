window.onload=()=>{
    let excuse = "Hola";
    let nombres= ["Mi papa","Tu hermana","Maria","Mi vecino","Mi tortuga","Rapidin"];
    let verbos=["se enojo","mojó el router","desapareció la compu","olvidó buscarme","desecho las llaves del carro"];
    let tiempo=["en la mañana","en la tarde","hace una hora","ayer"];

    let na=Math.floor(Math.random() * ((5+1)-0)+0);
    let nb=Math.floor(Math.random() * ((5+1)-0)+0);
    let nc=Math.floor(Math.random() * ((4+1)-0)+0);

    excuse=nombres[na]+ " "+verbos[nb] +" "+tiempo[nc];
    console.log("¿Cuál es tu excusa ahora?");
    document.querySelector("#excuse").innerHTML=excuse;
}