const client = require("../index");

client.on("ready", () => {
  console.log(`${client.user.tag} Siap!`);
  let statuses = [
    "f!help",
    "you drawing",
  ];
  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: "WATCHING" });
  }, 9000);
});
