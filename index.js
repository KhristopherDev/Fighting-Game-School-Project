//iniciando a tela do jogo

const canvas = document.querySelector('canvas'); //Esta variável procura o primeiro elemento (tag) com o nome de canvas. Já que só há um, ela vai pegar o elemento que desejamos.

const c = canvas.getContext('2d') //Essa variável facilita o trabalho de escrever " canvas.getContext('2d') ". Normalmente, não é nada recomendável utilizar nomes curtos para variáveis ou nomes que não são autoexplicativos, mas esta será uma excessão pois será uma variável muito utilizada.

//iniciando a tela do jogo


canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height) //Este comando faz parte da biblioteca do canvas. Ele pega dois pontos inicias, o X e o Y, e depois dois pontos finais, novamente o X e o Y. Neste caso ele pegou X 0 e Y 0 para começar a desenhar da ponta esquerda superior da tela, e depois ele pegou o ponto máximo da tela, que é a largura (1024) e a altura (576), e terminou de desenhar na ponta direita inferior da tela, assim criando um Background.


//Contrutor para criar sprites

//TODO COMANDO THIS UTILIZADO NESTE MOMENTO ESTÁ REFERENCIANDO O OBJETO QUE ESTÁ !!UTILIZANDO!! ESTA CLASSE. Ou seja, já que o player está utilizando está classe, no momento que ele definiu o x e o y, esse x e y foi armazenado no POSITION do CONSTRUCTOR e DEPOIS foi armazenado no position DO PLAYER. Quando ele utilizou a função sprite, foi criado um valor position pra ele, que estava vazio, até definir que a posição do constructor é a mesma do player.

class Sprite {
    constructor(position) {
        this.position = position
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 80, 160)
    }
}

//Contrutor para criar sprites

const player = new Sprite(
    {
        x: 0,
        y: 0
    }
)

player.draw()

console.log(player)