export default [
    {
        id: 0,
        name: 'Mizkif: Emote Madness',
        imagePath: '/gameCoversMizkif.png',
        description: "This 2D sidescroller was my first officially released project, where I was learning everything on-the-go, which was certainly exciting and challenging",
        highlights: "Here are some of the interesting highlights of my development process: \n-Utilized Tilemaps for creating several levels with various types of enemies \n-Created a simple dialogue system \n-Implemented a state machine for the Main Boss \n-Added sound control, respawning and scene management",
        video: '/video-previews/mizkifPreview.mp4'
        
    },
    {
        id: 1,
        name: 'Ancient Evil: The Guessing Game',
        imagePath: '/gameCoversAncientEvil.png',
        description: 'Through the making of this mobile horror-puzzle game, I became more familiar with the 3D development workflow, which served as a great starting point for all my future releases',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Implemented a “Wordle-like“ mechanic, where the player has to guess a random word in several attempts \n-Added a death timer for the guessing process, that activates “anomalies” in the world, which player has to deal with to survive \n-Utilized “Unity Remote” testing environment on my phone, to personally playtest each development stage \n-Released the game for Android devices',
        video: '/video-previews/ancientPreview.mp4'
    },
    {
        id: 2,
        name: 'Tiny Purgatory',
        imagePath: '/gameCoversPurgatory.png',
        description: 'In this project I combined together several mini-games, all of which the player needs to beat in order to win',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Added optional voice controls to the game through the UnityEngine.Windows.Speech namespace \n-Worked with Unity’s Shader Graph to add various interesting materials to the environment \n-Utilized baked lighting',
        video: '/video-previews/purgatoryPreview.mp4'
    },
    {
        id: 3,
        name:'TotallyNormalOffice',
        imagePath: '/gameCoversOffice.png',
        video: '/video-previews/officePreview.mp4',
        description: 'Here I made a version of an “Escape Room”, where the player has to find clues and solve various puzzles to win',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Implemented an item inspection system for finding clues \n-Created a working “computer interface”, that helps the player solve puzzles \n-Released the game for Windows, Linux and MacOS devices',
        video: '/video-previews/officePreview.mp4'
    },
    {
        id: 4,
        name:'Forgotten Judgment',
        imagePath: '/gameCoversJudgment.png',
        video: '/video-previews/judgmentPreview.mp4',
        description: 'In this top-down game the player has to eliminate a specific amout of NPCs in limited time with the help of their character’s abilities, while trying to avoid dying',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Utilized inheritance to create various types of NPCs with different mechanics \n-Implemented abilities for the player character, that can directly change affected NPC’s behavior \n-Released the game to be played in Browser',
        video: '/video-previews/judgmentPreview.mp4'
    },
    {
        id: 5,
        name:'They want me to smile',
        imagePath: '/gameCoversSmile.png',
        video: '/video-previews/smilePreview.mp4',
        description: 'This game is a mobile point-and-click, where the player needs to solve various puzzles in order to progress and eventually escape',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Added the ability for the player’s camera to move seamlessly between “rooms”, depending on the current location and the taken action \n-Added various items, that can be obtained through puzzles and used in order to progress \n- Implemented an inventory system, that can store, display and discard these items',
        video: '/video-previews/smilePreview.mp4'
    },
    {
        id: 6,
        name:'New to town',
        imagePath: '/gameCoversNewToTown.png',
        description: 'Here I created a first-person horror game, where the player has to gradually explore the given location, and eventually try to escape it',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Implemented an ability to have conversations with the character’s friend through his phone. \nThose conversations change during playing and determine which parts of the environment the player can interact with in order to progress \n-Added dynamic camera shake effect, that changes depending on the current movement speed \n-Utilized Unity’s Timeline to create an ending cutscene \n-Added a settings menu for brightness, volume and mouse sensitivity, where the values get saved in-between sessions \n-Implemented asynchronous loading of scenes',
        video: '/video-previews/townPreview.mp4'
    },
    {
        id: 7,
        name:'I\'m not cold',
        imagePath: '/gameCoversCold.png',
        description: 'This is a survival game, where the player has to creatively utilize various surrounding resources for as long as possible, in order to escape at a specific time',
        highlights: 'Here are some of the interesting highlights of my development process: \n-Added several survival states, that can decrease and increase at different rates, depending on the taken action \n-Through events, linked the survival values to the dying manager, that displays a “close-to-death” post-processing effect when required \n-Implemented a timer, that displays the current “time of day” on the physical clock object in the world. \n-Assigned a specific time period on the clock, when the “finishing” action has to be performed in order to win \n-Added a settings menu that gets saved in-between game sessions',
        video: '/video-previews/coldPreview.mp4'

    }
]