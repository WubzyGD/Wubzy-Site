<template>
    <div class="container">
        <Visualizer></Visualizer>

        <h1 class="title-rgb">WubzyGD</h1>
        <img src="https://cdn.discordapp.com/avatars/330547934951112705/a_a9d63b8c1f37d9096527ee24fbe9b587.gif?size=2048" alt="Wubzy's Profile Picture" class="center" style="border-radius: 50%; border-width: 2px; border-style: solid; border-color: #a172a6;">

        <div class="info">
            <h2>Hi, I'm Wubzy!</h2>
            <p>
                I'm a hobbyist JavaScript developer who loves <a href="discord.js.org" target="_blank">discord.js</a>,
                though I know or am learning a lot of other languages like Java/Kotlin and Lua.
                <br><br>
                I do a lot of writing, coding, and Discord server moderation, and I'm always
                looking for new challenges and projects to take on.
                <br><br>
                Feel free to check out some of my projects <a href="#projects" target="_self">here.</a>
                <br>
                Here's a link to my <NuxtLink to="/util/theme">my theme generator</NuxtLink> for BetterDiscord
            </p>
        </div>

        <div class="projects" style="margin-bottom:0;" id="projects">
            <div class="subgrid" id="djs">
                <div>
                    <h3>discord.js</h3>
                </div>
                <div>
                    <div>
                        <a href="https://github.com/WubzyGD/Valkyrie" target="_blank">Valkyrie</a>
                        <p>A roleplaying-based bot with lots of fancy and clean utilities</p>
                    </div>
                    <div>
                        <a href="https://github.com/WubzyGD/Valkyrie-Rewrite" target="_blank">Valkyrie v2</a>
                        <p>The WIP rewrite of Valkyrie</p>
                    </div>
                    <div>
                        <a href="https://git.wubzy.xyz/NatsukiDev/Natsuki-Mirror" target="_blank">Natsuki</a>
                        <p>An expansive all-purpose bot with a boat load of well-written features, centered around anime</p>
                    </div>
                    <div>
                        <a href="https://git.wubzy.xyz/Luno/Luno" target="_blank">Luno</a>
                        <p>The official server mascot of <a style="color:white;" href="discord.gg/crescent" target="_blank">Crescent's Family</a></p>
                    </div>
                    <div>
                        <a href="https://git.wubzy.xyz/Wubzy/Kasune" target="_blank">Kit Kasune</a>
                        <p>The official server mascot of <a style="color:white;" href="https://discord.gg/dZa9Zmw" target="_blank">Neptune Cafe</a></p>
                    </div>
                </div>
            </div>
            <div class="subgrid" id="js">
                <div>
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <div>
                        <a target="_blank" href="https://git.wubzy.xyz/Wubzy/ManyItems">ManyItems</a>
                        <p>A WIP TS/JS API library to help manage RPG-related programs, such as handling weapons, attacks, damange, etc etc</p>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/WubzyGD/SWWrap">Spotify-Web</a>
                        <p>A TypeScript wrapper written for <a style="color:white;" href="https://github.com/brys0/Spotify-Web" target="_blank">Spotify-Web</a>, a customized Spotify API run locally</p>
                    </div>
                </div>
            </div>
            <div class="subgrid" id="other">
                <div>
                    <h3>Other</h3>
                </div>
                <div>
                    <a target="_blank" href="https://git.wubzy.xyz/Wubzy/ManyItems.py-TK">ManyItems.py/TK</a>
                    <p>A Python Tkinter GUI with the same purpose as ManyItems.ts. <em>Currently abandoned indefinitely</em></p>
                </div>
                <div>
                    <a target="_blank" href="https://git.wubzy.xyz">Personal Git Server</a>
                    <p>A custom, personal Gitea server open to the public, where I mainly store my projects now. It is available for anyone to make accounts and add repositories to!</p>
                </div>
            </div>
        </div>
        <div class="projects" style="margin-top:0;" id="projects2">
            <div class="subgrid">
                <div>
                    <h3>Site Projects</h3>
                </div>
                <a><em>Coming Soon!</em></a>
            </div>
            <div class="subgrid">
                <div>
                    <h3>Writing</h3>
                </div>
                <a><em>Coming Soon!</em></a>
            </div>
            <div class="subgrid">
                <div>
                    <h3>Socials</h3>
                </div>
                <div>
                    <a>404: Not Found</a>
                    <br><br>
                    <p><em>I don't have socials ecksdee</em></p>
                </div>
            </div>
        </div>

        <div class="links">
            <a href="https://brys.tk" target="_blank">Brys' Site</a>
            <a href="https://git.wubzy.xyz" target="_blank">Personal Git</a>
            <a href="https://github.com/WubzyGD" target="_blank">GitHub</a>
            <a href="https://natsukibot.xyz" target="_blank">Natsuki</a>
            <a href="https://discord.gg/dZa9Zmw" target="_blank">Community Discord</a>
            <a href="https://discord.com/users/386604180963459102" target="_blank">Song Artist</a>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            window.onscroll = () => {
                document.getElementById('visualizer').style.opacity = window.scrollY <= document.getElementById('projects').getBoundingClientRect().top ? '.35'
                : document.getElementById('visualizer').style.opacity = window.scrollY >= document.getElementById('projects2').getBoundingClientRect().bottom ? '.1' : '1';
            };
            document.getElementsByTagName('html').item(0).style = "background-image: linear-gradient(to bottom, #00000000 0%, #171717ff 35%), url('https://cdn.discordapp.com/attachments/771177570754363393/869034932062810192/background.jpg'); min-height: 100vh;";
        },
        head: {
            title: "Wubzy | Home",
            meta: [
                {hid: 'description', name: 'description', content: "Wubzy's Home Page! A place where you can find links to all my projects and see what I do ^^"}
            ]
        }
    };
</script>

<style scoped>
    /*@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');*/


    /*:root {

    }*/


    img {
        max-width: 100%;
        height: auto;
    }

    /*html {
        /*background-image: linear-gradient(to bottom, #00000000 0%, #171717ff 35%), url('@/assets/images/background.jpg');
        min-height: 100vh;*/
    /*}*/
    /*html, body {
        width: 100%;
        min-width: 100%;
        height: 100%;
        min-height: 100%;
        margin: 0;
    }
    body {background-image: url("../images/background.jpg");}*/


    .title-rgb {
        font-family: 'Montserrat', sans-serif;
        width: 5em;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-size: 5em;
        animation:  dropdown-title 1.5s ease-in-out, shine 2.5s linear infinite;
        background: linear-gradient(to right, #a172a6 20%, #171717 35%, #171717 35%, #a172a6 50%);
        background-size: 200% auto;
        color: #a172a6;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: background .5s ease-in-out, animation .5s ease-in-out;
    }

    .title-rgb:hover {
        background: linear-gradient(to right, #a172a6 20%, #fff 35%, #fff 35%, #a172a6 50%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation:  dropdown-title 1.5s ease-in-out, shine 2.5s linear infinite;
        background-size: 200% auto;
    }

    @keyframes shine {
        to {
            background-position: 200% center;
        }
    }

    @keyframes dropdown-title {
        from {transform: translateY(-100vh);}
        to {transform: translateY(0);}
    }


    @media only screen and (min-width: 1601px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 10%;
        }
    }

    @media only screen and (max-width: 1600px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 15%;
        }
    }

    @media only screen and (max-width: 1400px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 20%;
        }
    }

    @media only screen and (max-width: 1200px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 30%;
        }
    }

    @media only screen and (max-width: 800px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
        }
    }

    @media only screen and (max-width: 600px) {
        .center {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 45%;
        }
    }


    .info {
        background-color: #1e27423f;
        color: #f3b5d3;
        text-align: left;
        border: #a172a6 solid 3px;
        border-radius: 5px;
        width: auto;
        max-width: 65%;
        min-width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3.25vh;
        padding: 1.75% 2%;
        font-size: 1.35em;
        font-family: "Nunito", sans-serif;
        transition: background-color .75s ease-in-out;
    }

    .info:hover {background-color: #1e27427f;}

    .info h2 {
        color: #d0faeb;
    }

    .info a {
        color: white;
        text-decoration: none;
    }


    .links {
        color: #f3b5d3;
        text-align: center;
        width: auto;
        max-width: 90%;
        min-width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .75vh;
        font-size: 1.35em;
        font-family: "Nunito", sans-serif;
        background-color: #171717;
    }

    .links a {
        color: white;
        text-decoration: none;
        display: inline-block;
        margin: 0 3px;
        border: solid 1px #171717;
        transition: border-color .5s ease-in-out, color .5s ease-in-out;
        padding: 3px 5px;
        border-radius: 5px;
    }

    .links a:hover {
        border-color: #d0faeb;
        color: #d0faeb;
    }



    .projects {
        color: #d0faeb;
        text-align: left;
        max-width: 70vw;
        width: 80vw;
        min-width: 40%;
        margin-left: 9vw;
        margin-right: 9vw;
        margin-top: 3.25vh;
        padding: 1.75% 2%;
        font-size: 1.35em;
        font-family: "Nunito", sans-serif;
        display: inline-flex;
        justify-content: center;
        justify-items: center;
        justify-self: center;
        flex-flow: row wrap;
        align-items: flex-start;
        align-content: flex-start;
    }

    .projects h3 {color: #f3b5d3;}
    .projects a {
        text-decoration: none;
        display: inline-block;
        color: #d0faeb;
    }
    .projects p {
        display: inline-block;
        color: #a7a7a7;
        margin-left: 2px;
        overflow: fragments;
    }

    @media only screen and (max-width: 1200px) {
        .subgrid {
            max-width: 55vw;
            min-width: 20vw;
            padding: 15px 18px;
        }
    }
    @media only screen and (max-width: 800px) {
        .subgrid {
            max-width: 63vw;
            min-width: 20vw;
            padding: 15px 18px;
        }
    }
    @media only screen and (max-width: 600px) {
        .subgrid {
            max-width: 70vw;
            min-width: 20vw;
            padding: 10px 12px;
        }
    }
    @media only screen and (max-width: 400px) {
        .subgrid {
            max-width: 100vw;
            min-width: 20vw;
            padding: 10px 12px;
        }
    }
    @media only screen and (min-width: 1201px) {
        .subgrid {
            max-width: 50vw;
            min-width: 20vw;
            padding: 15px 18px;
        }
    }
    .subgrid {
        width: auto;
        margin: 0 2vh 1.5vw;
        border: #171717ff solid 3px;
        border-radius: 5px;
        transition: border-color .35s ease-in-out;
    }
    .subgrid:hover {
        border-color: #a172a6;
    }

    #djs {background-image: linear-gradient(172deg, #00000000 5%, #171717ff 85%), url("@/assets/images/djs.jpg");}
    #js {background-image: linear-gradient(172deg, #00000000 5%, #171717ff 85%), url("@/assets/images/js.jpg");}
    #other {background-image: linear-gradient(172deg, #00000000 5%, #171717ff 85%), url("@/assets/images/other.jpg");}
</style>
