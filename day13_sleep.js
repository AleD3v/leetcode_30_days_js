async function sleep(millis) {
    return new Promise (resolve => setTimeout(()=> resolve(), millis))
}

async function sendMessage(message, time){
    console.log("Sending message:", message)
    await sleep(time)
    console.log("Message sent:", message)
}

sendMessage("Olá, meu bombomzinho", 4000)

/* Outra solução
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
} 
*/