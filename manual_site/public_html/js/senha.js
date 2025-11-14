function pedirSenha() {
    
    // toca a música
    const audio = document.getElementById("som");
    audio.volume = 0.3; // volume
    audio.play();       // começa a tocar
    
    const senha = prompt("Digite a senha para continuar:");

    if (senha === "2025") {
        window.location.href = "index.html";
    } else {
        alert("Senha incorreta!");
    }
}
