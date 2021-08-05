<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <canvas id="visualizer"></canvas>
        <div id="mutebox">
            <i class="fas fa-2x fa-volume-mute" style="color:white;" id="mute" v-on:click="unmute()"></i>
            <i class="fas fa-2x fa-volume-up" style="color:white; display:none;" id="unmute" v-on:click="mute()"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Visualizer",
        methods: {
            mute() {
                this.audio.pause();
                document.getElementById('mute').style.display = 'block';
                document.getElementById('unmute').style.display = 'none';
                //document.getElementById('music-box-button').style.display = 'none';
                this.muted = true;
                //setTimeout(() => {if (muted === true) {noRender = true;}}, 3000);
                //localStorage.setItem('volumeState', 'muted');
            },
            async unmute() {
                if (!this.audio) {
                    this.audio = new Audio('./audio/umbrella_vibes.mp3');
                    this.audio.loop = true;
                    await this.audio.play();
                    //localStorage.setItem('volumeState', 'unmuted');
                    this.initializeVisualizer();
                }
                else {this.audio.play();}
                document.getElementById('unmute').style.display = 'block';
                document.getElementById('mute').style.display = 'none';
                //document.getElementById('music-box-button').style.display = 'block';
                this.muted = false;
                //noRender = false;
            },
            initializeVisualizer() {
                document.getElementById('visualizer').style.display = 'block'; // enable the visualizer canvas

                let canvas = document.getElementById("visualizer"); // setup canvas
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                let ctx = canvas.getContext("2d");

                let context = new AudioContext(); // connect to an audio analyzer
                let src = context.createMediaElementSource(this.audio);
                let analyser = context.createAnalyser();

                src.connect(analyser);
                analyser.connect(context.destination);

                analyser.fftSize = 256;

                let bufferLength = analyser.frequencyBinCount; // the number of frequency channels being analyzed; max displayable bars

                let dataArray = new Uint8Array(bufferLength);

                let WIDTH = canvas.width;
                let HEIGHT = canvas.height;

                let barWidth = ((WIDTH - bufferLength) / bufferLength); // sets the bar width on the basis that 1 pixel will be between each bar
                let barHeight;
                let x = 0;

                function renderFrame() {
                    requestAnimationFrame(renderFrame); // probably shouldn't touch these
                    x = 0;
                    analyser.getByteFrequencyData(dataArray);

                    ctx.clearRect(0, 0, WIDTH, HEIGHT); // clear the canvas

                    ctx.fillStyle = "#ffffff00"; // set transparent background for the frame
                    ctx.fillRect(0, 0, WIDTH, HEIGHT);

                    for (let i = 0; i < bufferLength; i++) {

                        /*
                        * loops through each bar from left to right, every frame
                        * i represents which bar the loop is currently on
                        * there are 128 bars in total
                        */


                        let gradientFactor = 55;
                        //let gradientFactor = bufferLength;

                        // the drawing algorithm is technically attempting to draw 128 bars, but i've found that not all 128 are drawn,
                        // so you can use a custom number rather than bufferLength to manually change it.
                        // decrease this number if your bars don't fade to your second rgb value all the way
                        // increase it if the bars tend to turn white or a different color on the right side, and reach your 2nd rgb before they're supposed to

                        let barWidthMultiplier = 2; // if you change this setting, refer to the comment above
                        // a good tuning for this is to set it to 2.5 and set gradientFactor to 28, if you want to retune it to thicker bars

                        let barHeightShortener = 2.5; // the factor to shorten the bars as a whole by. smaller number = taller bar
                        let strengthLuminance = 2; // the factor to decide how reactive the brightness of the bar is to its own height, or the strength of that frequency
                        let barDimmer = 75; // a constant value to dim the bars by

                        let c1 = [161, 114, 166]; // R, G, B values for the far left color
                        let c2 = [(.75 * 208), (.75 * 250), (.75 * 235)]; // far right color


                        barHeight = (dataArray[i] / barHeightShortener); // sets the bar height based on the music for this frame

                        let gn = (index) => (((((c2[index] - c1[index]) * (i / gradientFactor)) + c1[index]) + (barHeight / strengthLuminance)) - barDimmer);
                        /*
                        * tl;dr: fetches a number between the left and right rgb value
                        *
                        * finds which bar is being rendered as a percentage and plugs
                        * that into the 0-based maximum color value to get how far between
                        * the two colors the render currently is on a basis of i
                        *
                        * takes the bar percentage of the 0-based max and then re-adds
                        * the minimum color value to get the true current color value
                        *
                        * adds barHeight (which isn't affected by the color third, meaning
                        * it's a constant brightness based on the bar height) to increase the brightness
                        * which gives the brightness increase effect based on frequency strength, and dulls
                        * the effect with strenghtLuminance, then the whole color with barDimmer
                        */

                        let r = gn(0); // gets the rgb values
                        let g = gn(1);
                        let b = gn(2);

                        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")"; // paints the bar for the frame
                        ctx.fillRect(x, HEIGHT - barHeight, (barWidth * barWidthMultiplier), barHeight);

                        x += (barWidth * barWidthMultiplier) + 1; // sets the gap between bars
                    }
                }

                //if (!noRender) {renderFrame();}
                //console.log(noRender);
                renderFrame();
            }
        },
        mounted() {},
        data: {
            muted: true,
            noRender: true,
            audio: undefined
        }
    }
</script>

<style scoped>
    #visualizer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: none;
        pointer-events: none;
        opacity: .35;
        transition: opacity .75s ease-in;
    }

    #mutebox {
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
    }
    #mute, #unmute {
        cursor: pointer;
        transition: color .35s ease-in;
    }
    #mute:hover, #unmute:hover {color: #858585;}
</style>