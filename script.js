const quote = document.getElementById('quote');
const credit = document.getElementById('credit');


//Philosopher
const wise1 = "Friedrich Nietzsche";
const wise2 = "Albert Camus";
const wise3 = "Fernando Pessoa";
const wise4 = "Niccolo Machiavelli";
const wise5 = "Sun Tzu";
const wise6 = "Fyodor Dostoevsky";
const wise7 = "Jean-Paul Sartre";
const wise8 = "Marcus Aurelius";
const wise9 = "Aristotle";
const wise10 = "Franz Kafka";
const MyWife = "Sayori";



function btn(){
    const randomq = Math.floor(Math.random() * q.length);
    quote.innerText = q[randomq];
    console.log(q)
    if (randomq < 10){
        credit.innerText = wise1;
    }
    else if(randomq < 20) {
        credit.innerText = wise2;
    }
    else if(randomq < 30){
        credit.innerText = wise3;
    }
    else if(randomq < 40){
        credit.innerText = wise4;
    }
    else if(randomq < 50){
        credit.innerText = wise5;
    }
    else if(randomq < 60){
        credit.innerText = wise6;
    }
    else if(randomq < 70){
        credit.innerText = wise7;
    }
    else if(randomq < 80){
        credit.innerText = wise8;
    }
    else if (randomq < 90){
        credit.innerText = wise9;
    }
    else if (randomq < 100){
        credit.innerText = wise10;
    }
    else if (randomq < 105){
        credit.innerText = MyWife;
    }
}

var q = [
    //Nietzsche
    "That which does not kill us makes us stronger.",
     "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
     "And those who were seen dancing were thought to be insane by those who could not hear the music.",
     "There is always some madness in love. But there is also always some reason in madness.",
     "Sometimes people don't want to hear the truth because they don't want their illusions destroyed",
     "Man is the cruelest animal.",
     "Every deep thinker is more afraid of being understood than of being misunderstood.",
     "Without music, life would be a mistake",
     "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
     "There are no beautiful surfaces without a terrible depth",
     //Camus
     "Nobody realizes that some people expend tremendous energy merely to be normal.",
     "In the depth of winter, I finally learned that within me there lay an invincible summer.",
     "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend.",
     "Live to the point of tears.",
     "But in the end one needs more courage to live than to kill himself.",
     "To be happy, we must not be too concerned with others.",
     "I opened myself to the gentle indifference of the world.",
     "The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
     "Since we're all going to die, it's obvious that when and how don't matter.",
     "Do not wait for the last judgment. It comes every day.",
     //Pessoa
     "In order to understand, I destroyed myself.",
     "I bear the wounds of all the battles I avoided.",
     "Life is full of paradoxes, as roses are of thorns.",
     "To know nothing about yourself is to live. To know yourself badly is to think.",
     "I don’t know what I feel or what I want to feel. I don’t know what to think or what I am.",
     "I wasn’t meant for reality, but life came and found me.",
     "My past is everything I failed to be.",
     "I'd woken up early, and I took a long time getting ready to exist.",
     "No intelligent idea can gain general acceptance unless some stupidity is mixed in with it",
     "We never love anyone. What we love is the idea we have of someone. It's our own concept—our own selves—that we love.",
     //Machiavelli
     "Everyone sees what you appear to be, few experience what you really are.",
     "If an injury has to be done to a man it should be so severe that his vengeance need not be feared.",
     "The more sand that has escaped from the hourglass of our life, the clearer we should see through it.",
     "The lion cannot protect himself from traps, and the fox cannot defend himself from wolves. One must therefore be a fox to recognize traps, and a lion to frighten wolves.",
     "Never was anything great achieved without danger.",
     "Never attempt to win by force what can be won by deception.",
     "Men are driven by two principal impulses, either by love or by fear.",
     "…he who seeks to deceive will always find someone who will allow himself to be deceived.",
     "Where the willingness is great, the difficulties cannot be great.",
     "It is not titles that honour men, but men that honour titles.",
     //Sun Tzu
     "Appear weak when you are strong, and strong when you are weak.",
     "The supreme art of war is to subdue the enemy without fighting.",
     "If you know the enemy and know yourself, you need not fear the result of a hundred battles.",
     "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
     "In the midst of chaos, there is also opportunity",
     "The wise warrior avoids the battle.",
     "know yourself and you will win all battles",
     "The greatest victory is that which requires no battle.",
     "To know your Enemy, you must become your Enemy.",
     "who wishes to fight must first count the cost",
     //Dostoevsky
     "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him,",
     "What is hell? I maintain that it is the suffering of being unable to love.",
     "Man only likes to count his troubles; he doesn't calculate his happiness.",
     "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
     "But how could you live and have no story to tell?",
     "Beauty will save the world.",
     "You can be sincere and still be stupid.",
     "Nothing in this world is harder than speaking the truth, nothing easier than flattery.",
     "To love someone means to see them as God intended them.",
     "Man is sometimes extraordinarily, passionately, in love with suffering...",
     //sartre
     "If you're lonely when you're alone, you're in bad company.    ",
     "Do you think that I count the days? There is only one day left, always starting over: it is given to us at dawn and taken away from us at dusk.",
     "Freedom is what we do with what is done to us.",
     "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. It is up to you to give [life] a meaning.",
     "We are our choices.",
     "Better to die on one's feet than to live on one's knees.",
     "I am alone in the midst of these happy, reasonable voices. All these creatures spend their time explaining, realizing happily that they agree with each other.",
     "In love, one and one are one.",
     "There may be more beautiful times, but this one is ours.",
     "You are -- your life, and nothing else.",
     //Aurelius 
     "You have power over your mind - not outside events. Realize this, and you will find strength.",
     "The happiness of your life depends upon the quality of your thoughts.",
     "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
     "Waste no more time arguing about what a good man should be. Be one.",
     "The soul becomes dyed with the colour of its thoughts.",
     "It is not death that a man should fear, but he should fear never beginning to live.",
     "Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
     "The best revenge is not to be like your enemy.",
     "Reject your sense of injury and the injury itself disappears.",
     "Don't go on discussing what a good person should be. Just be one.",
     //Aristotle
     "Knowing yourself is the beginning of all wisdom.",
     "No great mind has ever existed without a touch of madness.",
     "Happiness depends upon ourselves.",
     "A friend to all is a friend to none.",
     "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
     "Patience is bitter, but its fruit is sweet.",
     "He who has overcome his fears will truly be free.",
     "To perceive is to suffer.",
     "To write well, express yourself like the common people, but think like a wise man.",
     "Learning is not child's play; we cannot learn without pain.",
     //Kafka
     "I am a cage, in search of a bird.",
     "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.",
     "I am free and that is why I am lost.",
     "A First Sign of the Beginning of Understanding is the Wish to Die.",
     "“I have the true feeling of myself only when I am unbearably unhappy.",
     "I have spent all my life resisting the desire to end it.",
     "If a million loved you, I am one of them, and if one loved you, it was me, and if no one loved you then know that I am dead.",
     "I usually solve problems by letting them devour me.",
     "You are the knife I turn inside myself; that is love. That, my dear, is love.",
     "I miss you deeply, unfathomably, senselessly, terribly.",
     //Sayori
     "I'm gonna keep writing until I die.",
     "Cupcakes speak to my creative tummy~",
     "I want breakfast.",
     "I'm so happy...",
     "Your happiness is really important to me, you know!",
]