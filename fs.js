const fs = {
  '~': {
    projects: {
      type: 'dir',
      TazerChess: {
        type: 'project',
        description: "A project inspired by Michael Reeves. Play chess on chess.com, but you get electrocuted every time you blunder",
        content: `
        The aim of this project was to help me improve at chess. I am too lazy to actually learn how to play,
        so I decided to try learning through negative reinforcement.

        This project consists of three main parts: the browser plug-in, the server, and the electrocution box.
        The browser plug is made for FireFox, and scrapes any active chess game in chess.com for the PGN.
        PGN stands for portable game notation, and is used to transcribe chess games into a legible shorthands.
        The PGN is sent from the browser to a server running on the same computer.
        This server launches a child Python script who's only purpose is to serve as an interface between the server and the Stockfish chess engine.
        Stockfish returns a number that is a summed up evaluation of the game. The more positive the number, the more white is favored in the current board state,
        the more negative the number, the more black is favored in the current board state.
        These evaluations are tracked and if a large enough change in lead happens depending on who is more favored at the time, it is
        counted as a blunder by the server. At this point, the electrocution box is called.

        The electrocution box has a 3D printed housing and contains a RaspberryPi, mobile battery bank, relay board, and TENS unit.
        The RaspberryPi runs a simple Node.JS server which is listening to see if its IP is called.
        If so, the Pi opens the relays for a set amount of time, allowing the TENS unit to electrocute the player.

        `,
        github: "https://github.com/the42ndturtle/TazerChess",
      },
      PatkerPlot: {
        type: 'project',
        description: 'A simple UI for chart.js',
        content: `
        This project was made for my statics class. My teacher wanted a website that could be used to make
        transparent charts and graphs for presentations. Using char.js for the actual charts, I used
        vue.js to make a simple UI that allowed for the creation and editing of plots.
        The style as well as data can be changed and edited. The final plot can be
        downloaded as a PNG.
        `,
        github: "https://github.com/the42ndturtle/patkerplot",
        link: 'https://patkerplot.herokuapp.com'
      },
      nickisnotnuzlocke: {
        type: 'project',
        description: 'A project that allows for twitch chat to interact with Pokemon GBA games',
        content: `
        This project was my first time using Lua outside of the Computer Craft Minecraft mod. While it proved a bit difficult
        to set up at first, it came very intuitively once I got started. The aim of this project was to allow Twitch chat to interact
        and influence Pokemon Fire Red and Leaf Green, however it also works with the other Pokemon Gameboy Advance games.
        This project was intended for the youtubers Nickisnotgreen's and Jarvis Johnson's Fire Red and Leaf Green
        soulbonded nuzlocke streams. The server can connect to any amount of Twitch chats at once and feed commands
        to the respective clients. The Lua client runs in a GBA emulator and queries the server to get the most
        recent Twitch chats. These chats can be parsed and used by the client to execute different things from
        changing a Pokemon's name, to poisoning, burning, or adding another status affect.
        The Lua script has to edit the bytes in the GBA's RAM and different memory offsets for different things
        were found via memory maps available on the internet.
        `,
        github: 'https://github.com/the42ndturtle/nickisnotnuzlocke'
      },
      'idle-game': {
        type: 'project',
        description: 'an unfinished idle game that takes place in space',
        content: `
        A proof of concept idle game made for my old physics teacher.
        `,
        github: 'https://github.com/the42ndturtle/idlegame',
        link: 'https://idletestgame.herokuapp.com',
      },
      'multiplayer-snake': {
        type: 'project',
        description: 'a simple local multiplayer snake game',
        content: `
        A 1 on 1 local multiplayer snake game.
        `,
        github: 'https://github.com/the42ndturtle/snake',
        link: 'https://multisnakegame.herokuapp.com',
      },
      'typing-game': {
        type: 'project',
        description: 'a typing game with a twist! all the prompts are generated from my friends\'s high school essays which contain many spelling errors',
        content: `
        A simple typing game. Spelling errors or 'patkerification' can be turned on and off. The prompts to be typed are generated by markov chains from a child Python script.
        `,
        github: "https://github.com/the42ndturtle/learntotypewithpatker",
        link: 'https://learntotypewithpatker.herokuapp.com'
      },
      needle: {
        type: 'project',
        description: 'a simulation that displays the ratio of random points in a circle inscribed in a square is close to pi',
        content: `
        A simulation of dropping needles on a circle within a square. Shows the estimated value of pi based on the ratio of needles inside the circle to needles outside the circle.
        `,
        github: "https://github.com/the42ndturtle/needle",
        link: 'https://needlepi.herokuapp.com'
      },
      raycaster: {
        type: 'project',
        description: 'a rudimentary raycasting game engine like Wolfenstein 3D',
        content: `
        A simple raycasting engine. Supports animated and static textures.
        `,
        github: "https://github.com/the42ndturtle/PatkerRay"
      },
      framebyframe: {
        type: 'project',
        description: 'a multiplayer game where players take turns drawing frames of one final animation',
        content: `
        A game made as a history project. Players take turns drawing frames of an animation prompted by an adjective-noun generator. The final animation is displayed with each player's name displayed above their frames.
        `,
        github: "https://github.com/the42ndturtle/framebyframe",
        link: 'https://fbfgame.herokuapp.com'
      },
      vnengine: {
        type: 'project',
        description: 'a rudimentary visual novel game engine for web a mobile platforms',
        content: `
        A simple proof of concept visual novel engine. Supports player input and choice as well as optional scripting. Supports web, iOS, and Android.
        `,
        github: "https://github.com/the42ndturtle/patkerstory",
        link: "https://patkerstory.herokuapp.com"
      },
      rpg: {
        type: 'project',
        description: 'a simple rpg demonstration for a class',
        content: `
        A stupid demonstration made as a simple Phaser example for a class I was a TA for.
        `,
        github: "https://github.com/the42ndturtle/PatkerQuest64",
        link: "https://PatkerQuest64.herokuapp.com"
      },
      studyapp: {
        type: 'project',
        description: 'a flash card studying app where users could share information sets',
        content: `
        A simple flash card sharing app that was made for the congressional app challenge.
        `,
        github: "https://github.com/the42ndturtle/studyapp"
      },
      tetris: {
        type: 'project',
        description: 'a bad version of Tetris with a (hardly functional) lobby and multiplayer system',
        content: `
        My first project using web sockets. A bare bones Tetris clone with an almost non-functional multiplayer system.
        `,
        github: "https://github.com/the42ndturtle/tetris",
        link: "https://patkerblocks.herokuapp.com"
      },
      life: {
        type: 'project',
        description: 'a recreation of "Conway\'s Game of Life" simulation',
        content: `
        A simple recreation of "Conway's Game of Life" with variable board size and speed.
        `,
        github: "https://github.com/the42ndturtle/life",
        link: "https://lifesimapp.herokuapp.com",
      },
      "PTC": {
        type: 'project',
        description: 'a bare bones trading card game featuring my friend parker\'s face on every card',
        content: `
        A trading card game written in PHP.
        `,
        github: "https://github.com/the42ndturtle/PTC"
      },
      chat: {
        type: 'project',
        description: 'a demo chat program featuring emotes',
        content: `
        A simple chat application made using websockets.
        `,
        github: 'https://github.com/the42ndturtle/PatkerChat'
      },
      'TurtleIsleRPG': {
        type: 'project',
        description: 'an unfinished RPG made with a friend',
        content: `
        A simple RPG parody game of a project I made a very long time ago called Turtle Isle.
        `,
        github: "https://github.com/the42ndturtle/TurtleIsleRPG"
      },
      'SpanishStudier': {
        type: 'project',
        description: 'a simple flash card app with voice detection for practicing Spanish',
        content: `
        A flash card application with voice detection written in Python as a freshman Spanish project.
        `,
        github: "https://github.com/the42ndturtle/SpanishStudier"
      },

    },
    'about-me.txt': {
      type: 'file',
      content: "Hello! My name is Madeline! I am 19 and currently attending college at NC State university for Computer Science. I passionate about programming and video games, though I am bad at both! I have been programming since I was 11, and I am mainly self taught, though I've done my fair share of official stuff as well!"
    },
    experience: {
      type: 'dir',
      'unity-internship.txt': {
        type: 'file',
        content: 'I worked at an internship for Unity. I helped work on, produce, and quality check the "Create with Code" Unity course. It is the first official first party Unity course, and is intended to help introduce the basics of Unity and C#. During my work on the project I had to learn how to work with a team using a tool called Asana. My job was to go through the course in its entirety and double check everything, make changes, and fix errors, bugs, and spelling mistakes.'
      },
      'creative-internship.txt': {
        type: 'file',
        content: ''
      },
      'IMACS.txt': {
        type: 'file',
        content: '',
      },
      'summer-ventures.txt': {
        type: 'file',
        content: '',
      },
      'independant-study.txt': {
        type: 'file',
        content: '',
      },
      'teacher.txt': {
        type: 'file',
        content: '',
      }
    }
  },
}
