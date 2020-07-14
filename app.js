const { app, BrowserWindow, systemPreferences } = require("electron");

let mainWindow;

systemPreferences.subscribeNotification("AppleInterfaceThemeChangedNotification", () => {
  console.log("changed background color: ", systemPreferences.getColor("window-background"));
});

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
  });
  console.log("initial background color: ", systemPreferences.getColor("window-background"))
}

app.on("ready", createWindow);