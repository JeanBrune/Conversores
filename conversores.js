//função de resetar valor de input com o click
function apagar(id) {
    document.getElementById(id).value = ""
    console.log("campo " + id + " selecionado e apagado")
}

//converter celsius
function converter_celsius(inputes){
    //puxar o valor do input
    let celsius = parseFloat(document.getElementById("celsius_input").value)
    console.log("celsius para converter: " + celsius + "°C")

    //se valor menor que temperatura zero absoluto
    if(celsius < (-273.15) ){
        alert("ERRO. \nNão é possivel converter temperaturas menores do que o zero absoluto")
    } else{
        //aplicar a formula
        let farenheight = (celsius * 1.8) + 32
        console.log(farenheight + "°F")
        let kelvin = celsius + 273.15
        console.log(kelvin + "°K")
        
        // retornar o valor para o html
        //direto no valor dos inputs
        document.getElementById("farenheight_input").value = farenheight.toFixed(2)
        document.getElementById("kelvin_input").value = kelvin.toFixed(2)
        //retornar para a area de resultado
        document.getElementById("resultado_celsius").innerHTML= celsius.toFixed(2) 
        document.getElementById("resultado_farenheight").innerHTML = farenheight.toFixed(2)  
        document.getElementById("resultado_kelvin").innerHTML= kelvin.toFixed(2)
    }
}

// converter farenheight
function converter_farenheight(){
    //puxar o valor do input
    let farenheight = parseFloat(document.getElementById("farenheight_input").value)
    console.log("farenheight para converter: " + farenheight + "°F")

    //se valor menor que temperatura zero absoluto
    if(farenheight < (-459.67) ){
        alert("ERRO. \nNão é possivel converter temperaturas menores do que o zero absoluto")
    } else{
        //aplicar a formula
        let celsius = (farenheight - 32) / 1.8
        console.log(celsius + "°C")
        let kelvin = ( (farenheight - 32) / 1.8) + 273.15
        console.log(kelvin + "°K")
        
        // retornar o valor para o html
        //direto para os inputs
        document.getElementById("celsius_input").value = celsius.toFixed(2)
        document.getElementById("kelvin_input").value = kelvin.toFixed(2)
        //para o campo de resultado
        document.getElementById("resultado_celsius").innerHTML= celsius.toFixed(2)
        document.getElementById("resultado_farenheight").innerHTML = farenheight.toFixed(2)   
        document.getElementById("resultado_kelvin").innerHTML= kelvin.toFixed(2)
    }
}

//converter kelvin
function converter_kelvin(){
    //puxar o valor do input
    let kelvin = parseFloat(document.getElementById("kelvin_input").value)
    console.log("kelvin para converter: " + kelvin + "°k")

    //se valor menor que temperatura zero absoluto
    if(kelvin < 0 ){
        alert("ERRO. \nNão é possivel converter temperaturas menores do que o zero absoluto")
    } 
    else{
        //aplicar a formula
        let celsius = kelvin - 273.15
        console.log(celsius + "°C")
        let farenheight = (kelvin - 273.15) * (9/5) + 32
        console.log(kelvin + "°K")
        
        // retornar o valor para o html
        //direto para os inputs
        document.getElementById("celsius_input").value = celsius.toFixed(2)
        document.getElementById("farenheight_input").value = farenheight.toFixed(2)

        //exibir na area de resultados
        document.getElementById("resultado_celsius").innerHTML= celsius.toFixed(2)
        document.getElementById("resultado_farenheight").innerHTML = farenheight.toFixed(2) 
        document.getElementById("resultado_kelvin").innerHTML= kelvin.toFixed(2)
    }
}

//converter km
function converter_metros(){

    //puxar o valor do input
    let metros = parseFloat(document.getElementById("metros_input").value)
    console.log("metros para converter: " + metros)

    //se o valor for distancia negativa 
    if(metros <0){
        alert("ERRO. \n Por favor insira um comprimento positivo")
    }
    else{
        //aplicar a formula
    let quilometros = metros / 1000
    console.log(quilometros)

    let polegadas = metros * 39.37
    console.log(polegadas)

    let milhas = metros / 1609
    console.log(milhas)
    // retornar o valor para o html
        //direto para os inputs
    document.getElementById("quilometros_input").value = quilometros.toFixed(10)
    document.getElementById("polegadas_input").value = polegadas.toFixed(10)
    document.getElementById("milhas_input").value = milhas.toFixed(10)
        //exibir na area de resultados
    document.getElementById("resultado_metros").innerHTML=metros.toFixed(10)
    document.getElementById("resultado_quilometros").innerHTML= quilometros.toFixed(10)
    document.getElementById("resultado_polegadas").innerHTML=polegadas.toFixed(10)
    document.getElementById("resultado_milhas").innerHTML=milhas.toFixed(10)
    }
}
    
    //converter quilometros
    function converter_quilometros(){

        //puxar o valor do input
        let quilometros = parseFloat(document.getElementById("quilometros_input").value)
        console.log("quilometros para converter: " + quilometros)
    
        //se o valor for distancia negativa 
        if(quilometros <0){
            alert("ERRO. \n Por favor insira um comprimento positivo")
        }
        else{
            //aplicar a formula
        let metros = quilometros * 1000
        console.log(metros)
    
        let polegadas = quilometros * 39370
        console.log(polegadas)
    
        let milhas = quilometros / 1.609
        console.log(milhas)

        // retornar o valor para o html
        //direto para os inputs
        document.getElementById("metros_input").value = metros.toFixed(10)
        document.getElementById("polegadas_input").value = polegadas.toFixed(10)
        document.getElementById("milhas_input").value = milhas.toFixed(10)

        //exibir na area de resultados
        document.getElementById("resultado_metros").innerHTML=metros.toFixed(10)
        document.getElementById("resultado_quilometros").innerHTML= quilometros.toFixed(10)
        document.getElementById("resultado_polegadas").innerHTML=polegadas.toFixed(10)
        document.getElementById("resultado_milhas").innerHTML=milhas.toFixed(10)
        }
    }

//converter polegadas
function converter_polegadas(){

    //puxar o valor do input
    let polegadas = parseFloat(document.getElementById("polegadas_input").value)
    console.log("polegadas para converter: " + polegadas)

    //se o valor for distancia negativa 
    if(polegadas <0){
        alert("ERRO. \n Por favor insira um comprimento positivo")
    }
    else{
        //aplicar a formula
    let metros = polegadas / 39.37
    console.log(metros)

    let quilometros = polegadas / 39370
    console.log(quilometros)

    let milhas = polegadas / 63360
    console.log(milhas)

    // retornar o valor para o html
    //direto para os inputs
    document.getElementById("metros_input").value = metros.toFixed(10)
    document.getElementById("quilometros_input").value = quilometros.toFixed(10)
    document.getElementById("milhas_input").value = milhas.toFixed(10)

    //exibir na area de resultados
    document.getElementById("resultado_metros").innerHTML=metros.toFixed(10)
    document.getElementById("resultado_quilometros").innerHTML= quilometros.toFixed(10)
    document.getElementById("resultado_polegadas").innerHTML=polegadas.toFixed(10)
    document.getElementById("resultado_milhas").innerHTML=milhas.toFixed(10)
    }
}
    
//converter milhas
function converter_milhas(){

    //puxar o valor do input
    let milhas = parseFloat(document.getElementById("milhas_input").value)
    console.log("milhas para converter: " + milhas)

    //se o valor for distancia negativa 
    if(milhas <0){
        alert("ERRO. \n Por favor insira um comprimento positivo")
    }
    else{
        //aplicar a formula
    let metros = milhas * 1609
    console.log(metros)

    let quilometros = milhas * 1.609
    console.log(quilometros)

    let polegadas = milhas * 63360
    console.log(milhas)

    // retornar o valor para o html
    //direto para os inputs
    document.getElementById("metros_input").value = metros.toFixed(10)
    document.getElementById("quilometros_input").value = quilometros.toFixed(10)
    document.getElementById("polegadas_input").value = polegadas.toFixed(10)

    //exibir na area de resultados
    document.getElementById("resultado_metros").innerHTML=metros.toFixed(10)
    document.getElementById("resultado_quilometros").innerHTML= quilometros.toFixed(10)
    document.getElementById("resultado_polegadas").innerHTML=polegadas.toFixed(10)
    document.getElementById("resultado_milhas").innerHTML=milhas.toFixed(10)
    }
}

//converter segundos
function converter_segundos(){

    //puxar o valor do input
    let segundos = parseFloat(document.getElementById("segundos_input").value)
    console.log("segundos para converter: " + segundos)
    
    //se o valor for distancia negativa 
    if(segundos <0){
        alert("ERRO. \n Por favor insira um tempo maior do que zero")
    }
    else{
        //aplicar a formula
    let minutos = segundos / 60
    console.log(minutos)
    
    let horas = segundos / 3600
    console.log(horas)
    
    // retornar o valor para o html
    //direto para os inputs
    document.getElementById("minutos_input").value = minutos.toFixed(10)
    document.getElementById("horas_input").value =horas.toFixed(10)
    //exibir na area de resultados

    document.getElementById("resultado_segundos").innerHTML= segundos.toFixed(10)
    document.getElementById("resultado_minutos").innerHTML= minutos.toFixed(10)
    document.getElementById("resultado_horas").innerHTML=horas.toFixed(10)
    }
}

//converter minutos
function converter_minutos(){

    //puxar o valor do input
    let minutos = parseFloat(document.getElementById("minutos_input").value)
    console.log("minutos para converter: " + minutos)
    
    //se o valor for distancia negativa 
    if(minutos <0){
        alert("ERRO. \n Por favor insira um tempo maior do que zero")
    }
    else{
        //aplicar a formula
    let segundos = minutos * 60
    console.log(minutos)
    
    let horas = minutos / 60
    console.log(horas)
    
    // retornar o valor para o html
    //direto para os inputs
    document.getElementById("segundos_input").value = segundos.toFixed(10)
    document.getElementById("horas_input").value =horas.toFixed(10)

    //exibir na area de resultados
    document.getElementById("resultado_segundos").innerHTML= segundos.toFixed(10)
    document.getElementById("resultado_minutos").innerHTML= minutos.toFixed(10)
    document.getElementById("resultado_horas").innerHTML=horas.toFixed(10)
    }
}

//converter horas
function converter_horas(){

    //puxar o valor do input
    let horas = parseFloat(document.getElementById("horas_input").value)
    console.log("horas para converter: " + horas)
    
    //se o valor for distancia negativa 
    if(horas <0){
        alert("ERRO. \n Por favor insira um tempo maior do que zero")
    }
    else{
        //aplicar a formula
    let segundos = horas * 3600
    console.log(horas)
    
    let minutos = horas * 60
    console.log(horas)
    
    // retornar o valor para o html
    //direto para os inputs
    document.getElementById("segundos_input").value = segundos.toFixed(10)
    document.getElementById("minutos_input").value = minutos.toFixed(10)

    //exibir na area de resultados
    document.getElementById("resultado_segundos").innerHTML= segundos.toFixed(10)
    document.getElementById("resultado_minutos").innerHTML= minutos.toFixed(10)
    document.getElementById("resultado_horas").innerHTML=horas.toFixed(10)
    }
}
