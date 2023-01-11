import { app, BrowserWindow } from "electron"

app.on("ready", () => {
    let window = new BrowserWindow({
        show: false
    })
    window.maximize()
    window.loadURL("https://pikokr.dev/")
        .catch((err) => {
            console.error(err)
        })
})