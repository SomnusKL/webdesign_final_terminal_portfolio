// ====== 1. GLOBAL VARIABLES ======
let input, output;

// ====== 2. OUTPUT HELPERS ======
function echoCommand(cmd) {
    const line = document.createElement("div");
    line.textContent = `> ${cmd}`;
    output.appendChild(line);
    scrollToBottom();
}

function renderFromTemplate(id) {
    const template = document.getElementById(id);
    if (template) {
        const clone = template.cloneNode(true);
        clone.style.display = "block";
        output.appendChild(clone);
        scrollToBottom();
    }
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// ====== 3. COMMAND PROCESSING ======
function processCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    echoCommand(rawCmd);

    switch (cmd) {
        case "thought_sim":
            renderFromTemplate("thought_sim-template");
            break;
        case "song_of_maka":
            renderFromTemplate("song_of_maka-template");
            break;
        case "simple_lines":
            renderFromTemplate("simple_lines-template");
            break;
        case "back":
            renderFromTemplate("back-template");
            setTimeout(() => (window.location.href = "index.html"), 1000);
            break;
        case "seeart":
            const msgDraw = document.createElement("div");
            msgDraw.textContent = "- opening drawing portfolio...";
            output.appendChild(msgDraw);
            scrollToBottom();
            setTimeout(() => (window.location.href = "draw.html"), 1000);
            break;
        default:
            const err = document.createElement("div");
            err.textContent = `Command not found: ${cmd}`;
            output.appendChild(err);
            scrollToBottom();
    }
}

// ====== 4. INIT ======
document.addEventListener("DOMContentLoaded", () => {
    input = document.getElementById("commandInput");
    output = document.getElementById("output");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value;
            input.value = "";
            processCommand(command);
        }
    });
});
