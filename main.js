var menubar = require('menubar')
const { Menu } = require("electron");

var mb = menubar({
  dir: __dirname + '/src',
  tooltip: 'TranslateYa',
  preloadWindow: true,
  width: 300,
  height: 150
})

mb.on('ready', function ready () {
  var template = [{
      label: "Application",
      submenu: [
          { label: "About", selector: "orderFrontStandardAboutPanel:" },
          { type: "separator" },
          { label: "Quit", accelerator: "Command+Q", click: function() { mb.app.quit(); }}
      ]}, {
      label: "Edit",
      submenu: [
          { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
          { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
          { type: "separator" },
          { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
          { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
          { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
          { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
      ]}
    ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
})

// Reload app on hide
mb.on('after-hide', function () {
  mb.window.reload();
});