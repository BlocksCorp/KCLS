const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

process.env.NODE_ENV = 'production';

const isMac = process.platform === 'darwin';

//Creates the main window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "kcls launcher",
        icon: `/icons/icon256.png`,
        width: "380",
        height: "420",
        'minWidth': "380",
        'minHeight': "420",
    });

    mainWindow.loadFile(path.join(__dirname, './data/main.html'));

}

//Loads backend when ready
app.whenReady().then(() => {
    createMainWindow();

    //MenuMenu
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })
});

//Menu fix
const menu = [];

app.on('window-all-closed', () => {
    if(!isMac) {
        app.quit()
    }
})
