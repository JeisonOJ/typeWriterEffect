const textMachine = document.querySelector("#effect_text");

const words = ["JAVASCRIPT", "FRONTEND", "BACKEND", "JAVA", "JEISON"];

let currentIndex = 0;

function typeWriter() {
    textMachine.textContent = "";
    let textArr = words[currentIndex];
    textArr = textArr.split("");

    let i = 0;

    const renderString = setInterval(() => {
        textMachine.textContent += textArr[i];
        i++;
        if (i == textArr.length) {
            clearInterval(renderString);
            setTimeout(() => {
                deleteWord()
            }, 1000); //time to delete
        }
    }, 200); //Time to type
}

function deleteWord() {
    let texto = textMachine.textContent;

    const deleteString = setInterval(() => {
        texto = texto.slice(0, -1);
        textMachine.textContent = texto;
        if (texto == "") {
            clearInterval(deleteString);
            currentIndex = (currentIndex + 1) % words.length; //change word
            setTimeout(() => {
                typeWriter()
            }, 500)
        }
    }, 100) //change letter

}

typeWriter()

let textoAnimado = document.querySelector(".text");

textoAnimado.innerHTML = textoAnimado.innerHTML
    .split("")
    .map((letra, index) =>
        `<span 
        style="transition-delay: ${index * 40}ms; filter: hue-rotate(${index * 30}deg);">
          ${letra}
        </span>`)
    .join("")

