const fs = require("fs");

const internal = JSON.parse(fs.readFileSync("config.json"))


const configuration = {
    botToken: internal.token,
    botStatus: internal.status,
    statusList: {
        online: "online",
        idle: "idle",
        offline: "invisible",
        dnd: "dnd"
    },
    botUsername: internal.username
}

const style = {
    blue: "#0000ff",
    red: "#ff0000",
    green: "#00ff00",
    darkPurple: "#4A235A",
    lightPurple: "#BB8FCE",
    purple: "#8E44AD",
    lightRed: "#F1948A",
    darkRed: "#943126",
    lightGreen: "#82E0AA",
    darkGreen: "#145A32",
    lightBlue: "#85C1E9",
    darkBlue: "#154360"
}


module.exports = { configuration, style }

console.log(configuration.token)