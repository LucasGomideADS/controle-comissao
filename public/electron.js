const { app, BrowserWindow } = require('electron');
const path = require('path')

const isDev = require('electron-is-dev')

let mainWindow;
app.disableHardwareAcceleration()

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1480,
        height: 760,
        resizable: false,
        show: true,
        icon: __dirname + '/iconxx.png'
    });

    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`)
});