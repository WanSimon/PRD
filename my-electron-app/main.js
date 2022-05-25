var electron = require("electron");
var Menu = require("menu");

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

var dockMenu = Menu.buildFromTemplate([
  {
    label: "New Window",
    click: function () {
      console.log("New Window");
    },
  },
  {
    label: "New Window with Settings",
    submenu: [{ label: "Basic" }, { label: "Pro" }],
  },
  {
    label: "New Window with Settings",
  },
]);

app.dock.setMenu(dockMenu);

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }, //mean
  });
  mainWindow.loadFile("index.html");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
