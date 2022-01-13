const random = require('./model/random')

const gerarTime = (jogadores) => {
    let time1 = []
    let time2 = []
    let loop = [1,2,3,4,5]

    if (jogadores.length % 2 !== 0) {
        jogadores.push('E Deus!')
    }

    for (let i = 0; i < loop.length; i++) {

        let idx = random(0,jogadores.length -1)
        const maxTeam = jogadores.length / 2 
        // console.log('idx:' + idx, 'jogador:' + jogadores[idx])

        if (time2.every((value) => value !== jogadores[idx])) {
            if (!time1.some((el) => el == jogadores[idx])) {
                if (time1.length < maxTeam) {
                    time1.push(jogadores[idx])
                }
                idx = random(0,jogadores.length -1)
            }
            // console.log('Time1:'+ time1,'Count:' + time1.length)
        }
    
        if (time1.every((value) => value !== jogadores[idx])) {
            if (!time2.some((el) => el == jogadores[idx])) { 
                if (time2.length < maxTeam) {
                    time2.push(jogadores[idx])
                }
            }
            // console.log('Time2:'+ time2,'Count:' + time2.length)
        } 

        
        if (time2.length >= maxTeam && time1.length >= maxTeam) { 
            return  ` Time 1 serão: ${time1}! \n Time 2 serão: ${time2}!` 
        } else {
            loop.push(loop.length + i)
        }
    }

}
jogadores = ['Airton', 'Jonas', 'Cesar','Ariel', 'nicolas', 'frede','jean']

console.log(gerarTime(jogadores))