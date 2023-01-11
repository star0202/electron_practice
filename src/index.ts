import { app, BrowserWindow, Menu, Tray } from 'electron'
import path from 'path'

let window: BrowserWindow

app.on('ready', () => {
    window = new BrowserWindow({
        show: false
    })
    window.maximize()
    window.loadURL('https://pikokr.dev/')
        .catch((err) => {
            console.error(err)
        })
})

app.whenReady().then(() => {
    let tray = new Tray(path.dirname(path.basename(__dirname)) + '/assets/icon.ico')
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Chat', type: 'normal', click: () => {
                window.loadURL('https://pikokr.dev/my/messaging')
                window.focus()
            }
        },
        {
            label: 'Notification', type: 'normal', click: () => {
                window.loadURL('https://pikokr.dev/my/notifications')
                window.focus()
            }
        }
    ])
    tray.setToolTip('Pikokr Misskey')
    tray.setContextMenu(contextMenu)
})
