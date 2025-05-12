// ====== 1. GLOBAL VARIABLES ======
const websiteURL = "https://keyili.art/";
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
        case "start":
            renderFromTemplate("start-template");
            break;
        case "aboutme":
            renderFromTemplate("aboutme-template");
            break;
        case "skills":
            renderFromTemplate("skills-template");
            break;
        case "website":
            renderFromTemplate("website-template");
            break;
        case "draw":
        case "seeart":
            renderFromTemplate("draw-template");
            setTimeout(() => {
                window.location.href = "draw.html";
            }, 1000);
            break;
        case "game":
        case "seegame":
            renderFromTemplate("game-template");
            setTimeout(() => {
                window.location.href = "game.html";
            }, 1000);
            break;
        case "clear":
            location.reload();
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
