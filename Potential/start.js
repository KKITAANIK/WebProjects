async function SlowType(output) {
    chararray = output.split("/");
    for (i = 0; i < chararray.length; i++) {
        await timer(50)
        document.getElementById("devtext").innerHTML += chararray[i];
    }
}

function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

function Start() {
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /O/h/,/ /h/e/l/l/o/!/ /I/ /t/h/o/u/g/h/t/ /I/ /w/o/u/l/d/ /h/a/v/e/ /m/o/r/e/ /t/i/m/e/./ /C/a/n/ /y/o/u/ /r/e/a/d/ /t/h/i/s/?"), 0);
    setTimeout(SlowType.bind(null, "<br>> /R/i/g/h/t/,/ /y/o/u/ /n/e/e/d/ /a/ /w/a/y/ /t/o/ /r/e/s/p/o/n/d/./ /L/e/t/'/s/ /s/e/e/././."), 6000);
    setTimeout(ButtonAppear, 11000);
}

function ButtonAppear() {
    document.getElementById("display").style.height = "calc(75vh + 0.75vw)";
    document.getElementById("displaycontent").style.height = "calc(75vh - 2vw)";
    ClearButtons();
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /T/h/e/r/e/ /y/o/u/ /g/o/!/ /Y/o/u/ /p/r/o/b/a/b/l/y/ /w/o/n/'/t/ /n/e/e/d/ /a/l/l/ /o/f/ /t/h/o/s/e/,/ /b/u/t/ /t/h/e/y/'/r/e/ /t/h/e/r/e/ /i/f/ /y/o/u/ /w/a/n/t/."), 500);
    setTimeout(SlowType.bind(null, "<br>> /I/t/'/s/ /s/t/i/l/l/ /j/u/s/t/ /u/s/,/ /t/h/o/u/g/h/./ /I/ /r/e/a/l/l/y/ /p/r/e/f/e/r/ /b/e/i/n/g/ /i/n/ /t/h/e/ /b/a/c/k/g/r/o/u/n/d/,/ /b/u/t/ /I/ /s/h/o/u/l/d/ /b/e/ /a/b/l/e/ /t/o/ /p/u/t/ /s/o/m/e/t/h/i/n/g/ /t/o/g/e/t/h/e/r/ /s/o/ /y/o/u/ /a/r/e/n/'/t/ /o/n/ /y/o/u/r/ /o/w/n/././."), 5500);
    setTimeout(LeftAppear, 15000);
}

function LeftAppear() {
    document.getElementById("left").style.zIndex = "8";
    document.getElementById("display").style.width = "80vw";
    document.getElementById("displaycontent").style.width = "78vw";
    document.getElementById("display").style.marginLeft = "20vw";
    document.getElementById("buttons").innerHTML = '<button class="button" id="b00" disabled>Button 00<span class="tooltip">Tooltip</span></button><button class="button" id="b01" disabled>Button 01<span class="tooltip">Tooltip</span></button><button class="button" id="b02" disabled>Button 02<span class="tooltip">Tooltip</span></button><button class="button" id="b03" disabled>Button 03<span class="tooltip">Tooltip</span></button><button class="button" id="b04" disabled>Button 04<span class="tooltip">Tooltip</span></button><button class="button" id="b05" disabled>Button 05<span class="tooltip">Tooltip</span></button><button class="button" id="b06" disabled>Button 06<span class="tooltip">Tooltip</span></button><button class="button" id="b10" disabled>Button 10<span class="tooltip">Tooltip</span></button><button class="button" id="b11" disabled>Button 11<span class="tooltip">Tooltip</span></button><button class="button" id="b12" disabled>Button 12<span class="tooltip">Tooltip</span></button><button class="button" id="b13" disabled>Button 13<span class="tooltip">Tooltip</span></button><button class="button" id="b14" disabled>Button 14<span class="tooltip">Tooltip</span></button><button class="button" id="b15" disabled>Button 15<span class="tooltip">Tooltip</span></button><button class="button" id="b16" disabled>Button 16<span class="tooltip">Tooltip</span></button><button class="button" id="b20" disabled>Button 20<span class="tooltip">Tooltip</span></button><button class="button" id="b21" disabled>Button 21<span class="tooltip">Tooltip</span></button><button class="button" id="b22" disabled>Button 22<span class="tooltip">Tooltip</span></button><button class="button" id="b23" disabled>Button 23<span class="tooltip">Tooltip</span></button><button class="button" id="b24" disabled>Button 24<span class="tooltip">Tooltip</span></button><button class="button" id="b25" disabled>Button 25<span class="tooltip">Tooltip</span></button><button class="button" id="b26" disabled>Button 26<span class="tooltip">Tooltip</span></button>';
    document.getElementById("buttons").style.marginLeft = "20vw";
    document.getElementById("buttons").style.width = "79.5vw";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            document.getElementById("b" + i.toString() + j.toString()).style.width = "calc(79.5vw / 7 - 0.5vw)";
        }
    }
    ClearButtons();
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /W/e/l/l/,/ /t/h/a/t/'/s/ /n/o/t/ /r/e/a/l/l/y/ /t/h/a/t/ /h/e/l/p/f/u/l/./ /W/e/ /a/l/r/e/a/d/y/ /k/n/o/w/ /t/h/e/r/e/'/s/ /n/o/t/h/i/n/g/ /h/e/r/e/."), 500);
    setTimeout(SlowType.bind(null, "<br>> /B/u/t/ /I/ /p/r/o/m/i/s/e/ /i/t/'/l/l/ /b/e/ /r/e/a/l/l/y/ /h/e/l/p/f/u/l/,/ /l/a/t/e/r/,/ /a/n/d/ /I/ /t/h/i/n/k/ /w/e/ /c/o/u/l/d/ /a/f/f/o/r/d/ /t/o/ /l/o/s/e/ /a/ /f/e/w/ /b/u/t/t/o/n/s/ /f/o/r/ /i/t/."), 5500);
    setTimeout(SlowType.bind(null, "<br>> /T/h/a/t/'/s/ /e/v/e/r/y/t/h/i/n/g/ /I/ /h/a/v/e/ /s/o/ /f/a/r/./ /L/i/k/e/ /I/ /s/a/i/d/,/ /I/ /r/e/a/l/l/y/ /d/i/d/n/'/t/ /e/x/p/e/c/t/ /y/o/u/ /t/o/ /b/e/ /h/e/r/e/ /s/o/ /s/o/o/n/."), 12000);
    setTimeout(SlowType.bind(null, "<br>> /I/'/m/ /g/o/i/n/g/ /t/o/ /t/u/r/n/ /i/t/ /o/n/,/ /n/o/w/./ /G/o/ /a/h/e/a/d/ /a/n/d/ /e/x/p/l/o/r/e/ /e/v/e/r/y/t/h/i/n/g/ /t/h/a/t/'/s/ /t/h/e/r/e/ /r/i/g/h/t/ /n/o/w/."), 18000);
    setTimeout(SlowType.bind(null, "<br>> /G/o/o/d/ /l/u/c/k/!"), 23000);
    setTimeout(function() {buttons[0][0].update(Begin, "Next")}, 24500);
}

/*function RightAppear() {
    document.getElementById("right").style.zIndex = "8";
    document.getElementById("display").style.width = "60vw";
    document.getElementById("displaycontent").style.width = "58vw";
    document.getElementById("display").style.marginRight = "20vw";
    document.getElementById("buttons").style.zIndex = "0";
    Output('<span id="devtext" class="devtext"></span>');
    setTimeout(SlowType.bind(null, "> /T/h/e/r/e/ /y/o/u/ /g/o/!/ /I/ /h/a/v/e/n/'/t/ /a/c/t/u/a/l/l/y/ /d/e/c/i/d/e/d/ /w/h/a/t/ /g/o/e/s/ /t/h/e/r/e/,/ /y/e/t/,/ /b/u/t/ /I/'/m/ /s/u/r/e/ /t/h/e/r/e/ /w/i/l/l/ /b/e/ /a/ /l/o/t/ /t/o/ /l/o/o/k/ /a/t/,/ /l/a/t/e/r/!"), 500);
    setTimeout(SlowType.bind(null, "<br>> /T/h/a/t/'/s/ /e/v/e/r/y/t/h/i/n/g/ /I/ /h/a/v/e/ /s/o/ /f/a/r/./ /L/i/k/e/ /I/ /s/a/i/d/,/ /I/ /r/e/a/l/l/y/ /d/i/d/n/'/t/ /e/x/p/e/c/t/ /y/o/u/ /t/o/ /b/e/ /h/e/r/e/ /s/o/ /s/o/o/n/."), 7500);
    setTimeout(SlowType.bind(null, "<br>> /I/'/m/ /g/o/i/n/g/ /t/o/ /t/u/r/n/ /i/t/ /o/n/,/ /n/o/w/./ /G/o/ /a/h/e/a/d/ /a/n/d/ /e/x/p/l/o/r/e/ /e/v/e/r/y/t/h/i/n/g/ /t/h/a/t/'/s/ /t/h/e/r/e/ /r/i/g/h/t/ /n/o/w/."), 13500);
    setTimeout(SlowType.bind(null, "<br>> /G/o/o/d/ /l/u/c/k/!"), 19000)
    setTimeout(Output.bind(null, "test"), 21000);
}*/

function Begin() {
    Output("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lobortis nulla, vitae dictum nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque metus risus, dictum sit amet ante non, tempor auctor turpis. Suspendisse venenatis enim nec neque maximus vulputate. Donec auctor blandit justo, id tempus diam commodo ultricies. Morbi dignissim, quam vitae malesuada tempor, nulla mi porttitor sapien, in varius ex libero at dui. Duis elementum ultrices leo sit amet dignissim. Aenean metus arcu, iaculis vitae lorem in, interdum porta augue. Donec sodales enim non lacus pharetra, id aliquet quam tempus. Suspendisse ornare magna risus, in ultrices tellus egestas pulvinar. Sed accumsan dolor eu odio commodo, consequat ornare tellus imperdiet. Vivamus efficitur magna gravida ligula rutrum dapibus. Sed sagittis porttitor lorem quis egestas. Donec ipsum ante, mollis ut ligula ut, malesuada congue ante. Mauris nec eleifend metus.</p><p>Etiam at aliquam risus, ut facilisis quam. Duis tincidunt elit nunc, luctus commodo metus faucibus et. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam est purus, molestie iaculis cursus a, fringilla vitae magna. Quisque scelerisque commodo metus in pellentesque. Curabitur maximus mauris a neque faucibus viverra. Duis fermentum ac nisi sed consectetur. Nunc vitae posuere tellus, sed sodales enim. Aliquam lacinia lectus vulputate, condimentum est in, semper felis. Ut sagittis urna eu tortor fringilla sagittis et ac odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p><p>Sed placerat, magna vel sodales mollis, tortor sem consectetur metus, sed convallis turpis eros non est. Aliquam mattis justo quis metus maximus bibendum. Duis ultricies condimentum mauris nec posuere. Cras in dolor at mi vulputate vulputate hendrerit at neque. Curabitur tempor ultricies justo vitae mollis. Maecenas condimentum felis vitae pellentesque rutrum. Fusce efficitur laoreet est, nec fermentum nunc. Sed finibus risus sit amet eros porta pellentesque. Vestibulum rhoncus, odio at rhoncus consectetur, justo sem consectetur mi, ut suscipit mi orci id dolor. Sed placerat, purus sed consequat lacinia, neque mauris ullamcorper mauris, at ullamcorper leo justo a ex.</p><p>Mauris efficitur massa ac purus aliquet pulvinar et vel purus. Nunc ultrices rhoncus lacus ullamcorper maximus. Ut faucibus accumsan pharetra. Fusce porttitor ligula nec mollis tempor. Nulla sed neque nibh. Phasellus maximus libero ac fermentum tempus. In nec diam ut magna pharetra facilisis. Integer feugiat bibendum finibus. Vestibulum ullamcorper massa a felis fringilla, quis pretium libero gravida.</p><p>Aenean quam turpis, finibus pharetra laoreet ac, gravida molestie nisl. Nullam eu arcu rutrum, egestas ligula ut, luctus mauris. Sed eget pharetra elit, vitae luctus lectus. Vivamus viverra erat at leo ornare, ut tempor ante varius. Nam a fermentum mi, nec tempus sapien. Nullam est dolor, finibus non condimentum in, mollis et nibh. Duis vel tortor ligula. Sed nisl quam, porttitor non felis sit amet, efficitur tristique odio. Sed vulputate, ante vitae fermentum iaculis, diam ligula facilisis velit, ac scelerisque purus orci eget felis. Donec facilisis et tortor nec tristique. Duis risus odio, dapibus in elementum sed, porta a nisl. Nam laoreet justo at diam sagittis convallis. Aliquam vulputate tellus ligula, vitae hendrerit nisi congue quis. In et sem non orci maximus finibus. Cras ultricies arcu et felis cursus, pharetra egestas purus vehicula. Aliquam mauris est, interdum in sapien vitae, efficitur porta magna.</p>");
}