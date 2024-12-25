function calculateLove() {
    var yourName = document.querySelector('.yourName input').value.trim();
    var yourCrush = document.querySelector('.yourCrush input').value.trim();

    document.getElementById("lovePercentage").innerHTML = "";
    var heading = document.querySelector('.heading');
    var about = document.querySelector('.about');

    var namePattern = /^[a-zA-Z\s]+$/;

    if (!namePattern.test(yourName) || !namePattern.test(yourCrush)) {
        alert("Please enter proper names without numbers or special characters.");
        return; 
    }

    yourName = yourName.toLowerCase();
    yourCrush = yourCrush.toLowerCase();

    let lovePercent;

    if ((yourName === "bablu" && yourCrush === "chaitrika") || 
        (yourName === "durga prasad" && yourCrush === "chaitrika") ||
        (yourName === "chaitrika" && (yourCrush === "bablu" || yourCrush === "durga prasad"))) {

        lovePercent = 100;
    } else {
        lovePercent = Math.floor((Math.random() * 100) + 1);
    }

    var p = document.createElement("p");
    var text = document.createTextNode(lovePercent + "%");
    p.appendChild(text);
    document.getElementById("lovePercentage").appendChild(p);

    if (lovePercent === 100) {
        heading.innerHTML = "♥ ♥ ♥ <u>𝐖ⱺω! 𝐘ⱺυ α𐓣ᑯ 𝗒ⱺυ𝗋 ρα𝗋𝗍𐓣𝖾𝗋 α𝗋𝖾 α ρ𝖾𝗋𝖿𝖾𝖼𝗍 ꭑα𝗍𝖼ɦ</u> ♥ ♥ ♥";
        about.innerHTML = "<center>𝙻𝚘𝚟𝚎 𝚒𝚜 𝚠𝚑𝚎𝚗 𝚝𝚑𝚎 𝚘𝚝𝚑𝚎𝚛 𝚙𝚎𝚛𝚜𝚘𝚗'𝚜 𝚑𝚊𝚙𝚙𝚒𝚗𝚎𝚜𝚜 𝚒𝚜 𝚖𝚘𝚛𝚎 𝚒𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚝 𝚝𝚑𝚊𝚗 𝚢𝚘𝚞𝚛 𝚘𝚠𝚗.</center>";
    } else if (lovePercent >= 80) {
        heading.innerHTML = "</br>♥ ♥ ♥ <u>𝐋ⱺⱺ𝗄𝗌 ᥣ𝗂𝗄𝖾 ᥣⱺ𝗏𝖾 𝗂𝗌 𝗂𐓣 𝗍ɦ𝖾 α𝗂𝗋</u> ♥ ♥ ♥";
        about.innerHTML = "<center>𝙻𝚘𝚟𝚎 𝚒𝚜 𝚌𝚘𝚖𝚙𝚘𝚜𝚎𝚍 𝚘𝚏 𝚊 𝚜𝚒𝚗𝚐𝚕𝚎 𝚜𝚘𝚞𝚕 𝚒𝚗𝚑𝚊𝚋𝚒𝚝𝚒𝚗𝚐 𝚝𝚠𝚘 𝚋𝚘𝚍𝚒𝚎𝚜</center>";
    } else if (lovePercent >= 50) {
        heading.innerHTML = "</br>♥ ♥ ♥ <u>𝐓ɦ𝖾𝗋𝖾’𝗌 α 𝗀ⱺⱺᑯ 𝖼ɦα𐓣𝖼𝖾 𝖿ⱺ𝗋 ᥣⱺ𝗏𝖾</u> ♥ ♥ ♥";
        about.innerHTML = "<center>𝚃𝚑𝚎 𝚐𝚛𝚎𝚊𝚝𝚎𝚜𝚝 𝚝𝚑𝚒𝚗𝚐 𝚢𝚘𝚞'𝚕𝚕 𝚎𝚟𝚎𝚛 𝚕𝚎𝚊𝚛𝚗 𝚒𝚜 𝚓𝚞𝚜𝚝 𝚝𝚘 𝚕𝚘𝚟𝚎 𝚊𝚗𝚍 𝚋𝚎 𝚕𝚘𝚟𝚎𝚍 𝚒𝚗 𝚛𝚎𝚝𝚞𝚛𝚗.</center>";
    } else if (lovePercent >= 30) {
        heading.innerHTML = "</br>♥ ♥ ♥ <u>𝐓ɦ𝖾𝗋𝖾 ꭑ𝗂𝗀ɦ𝗍 ᑲ𝖾 α 𝗌ρα𝗋𝗄, ᑲυ𝗍 𝗂𝗍 𐓣𝖾𝖾ᑯ𝗌 ωⱺ𝗋𝗄</u> ♥ ♥ ♥";
        about.innerHTML = "<center>𝙽𝚘𝚋𝚘𝚍𝚢 𝚑𝚊𝚜 𝚎𝚟𝚎𝚛 𝚖𝚎𝚊𝚜𝚞𝚛𝚎𝚍, 𝚎𝚟𝚎𝚗 𝚙𝚘𝚎𝚝𝚜, 𝚑𝚘𝚠 𝚖𝚞𝚌𝚑 𝚊 𝚑𝚎𝚊𝚛𝚝 𝚌𝚊𝚗 𝚑𝚘𝚕𝚍.</center>";
    } else {
        heading.innerHTML = "</br>♥ ♥ ♥ <u>𝚰𝗍’𝗌 𐓣ⱺ𝗍 ᥣⱺⱺ𝗄𝗂𐓣𝗀 𝗍ⱺⱺ 𝗀𝗋𝖾α𝗍... ᑲυ𝗍 ᑯⱺ𐓣'𝗍 𝗀𝗂𝗏𝖾 υρ</u> ♥ ♥ ♥";
        about.innerHTML = "<center>𝙷𝚊𝚟𝚎 𝚎𝚗𝚘𝚞𝚐𝚑 𝚌𝚘𝚞𝚛𝚊𝚐𝚎 𝚝𝚘 𝚝𝚛𝚞𝚜𝚝 𝚕𝚘𝚟𝚎 𝚘𝚗𝚎 𝚖𝚘𝚛𝚎 𝚝𝚒𝚖𝚎 𝚊𝚗𝚍 𝚊𝚕𝚠𝚊𝚢𝚜 𝚘𝚗𝚎 𝚖𝚘𝚛𝚎 𝚝𝚒𝚖𝚎.</center>";
    }
}

document.getElementById("index").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "login.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "calculator.html";
});


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "login.html";
});
