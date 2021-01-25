const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client()

client.on("ready", () => {
    console.log("PsychHelp is online!")
})

client.on("message", message => {
    const text = message.content.toLowerCase()
    if(text.includes(`lobotomy`) || text.includes(`lobotomies`)){
        if(message.author.bot)return;
        if(text.includes(`lobotomy details`) || text.includes(`detailed lobotomy`)){
            message.reply("The original lobotomy, once it was officially recognized, Freeman and his associate James W. Watts would travel the country performing lobotomies. As time went on, it came out that lobotomies were more harmful then helpful. After this happened nearly everyone lost faith in lobotomies, except for Dr.Freeman who continued to perform lobotmies after inventing the 'transorbital lobotomy' which was performed with an icepick like instrument. This instrument would be inserted just above the eyeball (where the skull in thinnest) tapped in with a hammer, and the wiggled around. There are lots of stories of lobotomies being performed multiple times due to non-lasting results. Lobotomies were also performed on disobient children.\n\nWant more information on Freeman? Try using `Dr. Freeman` in a sentence!")
            return;
        }
        message.reply("Lobotomies were brought to the limelight by Walter Freeman, who performed them most commonly on mental illness patients. Later in his career he invented the idea of the 'transorbital lobotomy' which was typically performed with an icepick like instrument inserted just above the eye, which would then be moved around in of the patients skull. Even later in his career after lobotomies were proved to be morally wrong, he would perform them on nearly anyone willing or even unwilling in some cases.\n\nWant more information? Try using my trigger words: `Dr. Freeman`, `lobotomy details`, and `frontal lobe`")
    }else if(text.includes(`dr. freeman`) || text.includes(`fr freeman`)){
        if(message.author.bot)return;
        message.reply("Dr.Freeman (Walter Freeman) was born November 14, 1895 in Philadelphia. He specialized in lobotomies, and is widely recognized as the person who brought them into the limelight. Freeman studied at the University of Pennsylvania, Yale, and the Perelman School of Medicine at the University of Pennsylvania. He had one son, Walter Jackson Freeman III and was married to Marjorie Lorne Franklin until 2 years before he died. Walter Freeman died May 31, 1972 in San Francisco. His son died in 2016.")
    }else if(text.includes(`frontal lobe`)){
        if(message.author.bot)return;
        message.reply('The frontal lobe is sometimes referred to as the "control panel" of our personality. It\'s where emotional expression, problem solving, memory, language, judgment, and sexual behaviors are all controlled at. Damage to the frontal lobe can cause ones personality to completely change, and even for them to have trouble concentrating or planning, as the frontal lobe controls those things.')
    }else if(text.includes(`prefrontal cortex`) || text.includes(`pre-frontal cortex`)){
        if(message.author.bot)return
        message.reply('The prefrontal cortex is what allows up to create, and complete set goals. It is also involved in many higher level executive functions. It is located in front of the frontal lobe, and also helps in social behaviour.')
    }else if(text.includes(`temporal lobe`)){
        message.reply('The function of the temporal lobe is related to the perception of auditory, taste, olfactory sensations, analysis and synthesis of speech sounds, memory mechanisms. It also plays a big part in memory and in storing memories.')
    }else if(text.includes(``)){
        
    }
})

client.login(token)