const {app, BrowserWindow, ipcMain}  = require('electron')
const path = require('node:path')
const { updateElectronApp, UpdateSourceType } = require('update-electron-app')
updateElectronApp()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})

console.log(process.platform);
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit()
})
