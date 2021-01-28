const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client()

client.on("ready", () => {
    console.log("PsychHelp is online!")
})

const KeyEmbed = new MessageEmbed()
.setTitle("Keywords")
.addFields(
    {name: `Lobotomy Information`, value: "```lobotomy | lobotomy details | dr. freeman```", inline: false},
    {name: `Brain Parts`, value: `frontal lobe | prefrontal cortex | temporal lobe | parietal lobe | brain stem | cerebellum | occipital lobe`, inline: false},
    {name: `Misc Section`, value: `keywords | summary`, inline: false},
)

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
        message.reply('The prefrontal cortex is what allows us to create, and complete set goals. It is also involved in many higher level executive functions. It is located in front of the frontal lobe, and also helps in social behaviour.')
    }else if(text.includes(`temporal lobe`)){
        if(message.author.bot)return
        message.reply('The function of the temporal lobe is related to the perception of auditory, taste, olfactory sensations, analysis and synthesis of speech sounds, memory mechanisms. It also plays a big part in memory and in storing memories.')
    }else if(text.includes(`parietal lobe`)){
        if(message.author.bot)return
        message.reply('The parietal lobe is largely involved in perception, mainly visual perception. It also plays a part in sensory input aswell as sensation.')   
    }else if(text.includes(`brain stem`)){
        if(message.author.bot)return
        message.reply('The brain stem is basically what keeps you alive. It connects your brain to your spinal cord and is involved in the following, helps keep you breathing, circulates your blood, and in digesting food (although not directly). If the brain stem is damaged it can cause minimal symtpons from dizziness to the most severe symptoms like comas, paralysis and even death.')
    }else if(text.includes(`cerebellum`)){
        if(message.author.bot)return
        message.reply('The cerebellum, in short, is what allows you to walk. It controls movements of the body and is involved in several forms of motor learning.')
    }else if(text.includes(`occipital lobe`)){
        if(message.author.bot)return
        message.reply('This area of the brain is involved in several things ranging from temperature to movement. It regulates taste and touch, and processes them with memories. these memories are associated with taste, touch, sight and sound.')
    }else if(text.includes(`summary`)){
        message.reply('In summary:\nFrontal Lobe: thinking, memory, behaviour, movement.\nParietal Lobe: language, touch.\nTemporal Lobe: hearing, learning, feelings.\nCerebellum: balance & coordination.\nBrain Stem: breathing, temperature, heart rate.\nOccipital Lobe: sight.')
    }else if(text.includes(`triggers`) || text.includes(`keywords`)){
        message.channel.send(KeyEmbed)
    }
})

client.login(token)