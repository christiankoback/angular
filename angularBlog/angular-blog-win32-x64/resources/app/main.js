const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const shell = require('electron').shell;

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/angularBlog/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  
  //open all links in user's default browser
	win.webContents.on('new-window', function(e, url) {
	  e.preventDefault();
	  require('electron').shell.openExternal(url);
	});
	win.on('will-navigate', function(e, url) {
	  /* If url isn't the actual page */
	  if(url != wc.getURL()) {
		e.preventDefault();
		openBrowser(url);
	  } 
	});
	var openBrowser(url) {
	  require('child_process').exec('xdg-open ' + url);
	}

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});