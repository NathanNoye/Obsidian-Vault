/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => DefineThis
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var { Modal } = require("obsidian");
var PluginSettings = class {
  constructor() {
    this.apiKey = "";
  }
};
var MyPluginSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h3", { text: "API key" });
    new import_obsidian.Setting(containerEl).setDesc("Enter your API key for the definitions service.").addText(
      (text) => text.setPlaceholder("Enter your API key here").setValue(this.plugin.settings.apiKey).onChange(async (value) => {
        this.plugin.settings.apiKey = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
var DefineThis = class extends import_obsidian.Plugin {
  showCustom(word) {
    const modal = new CustomModal({
      app: this.app,
      message: "Do you want to create a note anyway and add a todo?",
      title: "No definition was found",
      onConfirm: () => {
        this.addNoteToVault(word, `TODO - Add definition for ${word}`);
      },
      textCenter: true
    });
    modal.open();
  }
  toSingular(word) {
    if (!word || typeof word !== "string")
      return word;
    if (word.endsWith("ies") && word.length > 3) {
      return word.substring(0, word.length - 3) + "y";
    } else if (word.endsWith("es") && word.length > 2) {
      const potentialSingular = word.substring(0, word.length - 2);
      if (potentialSingular.endsWith("s") || potentialSingular.endsWith("x")) {
        return potentialSingular;
      }
      return word.substring(0, word.length - 1);
    } else if (word.endsWith("s") && word.length > 1) {
      return word.substring(0, word.length - 1);
    }
    return word;
  }
  async defineThis() {
    let view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (view) {
      let view_mode = view.getMode();
      switch (view_mode) {
        case "source":
          if ("editor" in view) {
            if (this.settings.apiKey.length < 1) {
              const modal = new CustomModal({
                app: this.app,
                message: "You'll need to provide a Miriam-Website API key in the settings tab (it's free)",
                title: "Missing FREE API key",
                textCenter: true
              });
              modal.open();
              return;
            }
            let originalSelection = view.editor.getSelection();
            let singularSelection = originalSelection;
            let capitalizedSelection = singularSelection.charAt(0).toUpperCase() + singularSelection.slice(1);
            let apiKey = this.settings.apiKey;
            let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${singularSelection}?key=${apiKey}`;
            console.log("fetching");
            const response = await fetch(url);
            console.log("Fetched!", response);
            if (!response.ok) {
              throw new Error(
                `HTTP error! status: ${response.status}`
              );
            }
            const data = await response.json();
            const definition = data[0].shortdef.map((def) => `- ${def}`).join("\n");
            if (definition) {
              let [filePath, wordDefinitionsDir] = await this.addNoteToVault(
                capitalizedSelection,
                definition
              );
              let dir = this.app.vault.getAbstractFileByPath(
                wordDefinitionsDir
              );
              if (!dir) {
                await this.app.vault.createFolder(
                  wordDefinitionsDir
                );
              }
              let file = this.app.vault.getAbstractFileByPath(filePath);
              if (!file) {
                await this.app.vault.create(
                  filePath,
                  `# ${capitalizedSelection}

${definition}`
                );
              }
              const content = view.editor.getValue();
              const linkRegex = new RegExp(
                `\\[\\[${filePath.replace(
                  /([.*+?^=!:${}()|\[\]\/\\])/g,
                  "\\$1"
                )}\\|?.*?\\]\\]`,
                "g"
              );
              if (!linkRegex.test(content)) {
                const linkText = `[[${filePath}|${originalSelection}]]`;
                const cursorPos = view.editor.getCursor();
                view.editor.replaceSelection(linkText);
                view.editor.setCursor(
                  cursorPos.line,
                  cursorPos.ch + linkText.length
                );
              } else {
                console.log(
                  "A link to the definition already exists in the note."
                );
              }
              const modal = new CustomModal({
                app: this.app,
                message: definition,
                title: capitalizedSelection,
                textCenter: false
              });
              modal.open();
            } else {
              this.showCustom(capitalizedSelection);
            }
          }
          break;
        default:
          break;
      }
    }
  }
  async addNoteToVault(word, definition) {
    const vault = this.app.vault;
    const wordDefinitionsDir = "Word Definitions";
    const fileName = `${word}.md`;
    const filePath = `${wordDefinitionsDir}/${fileName}`;
    let dir = vault.getAbstractFileByPath(wordDefinitionsDir);
    if (!dir) {
      await vault.createFolder(wordDefinitionsDir);
    }
    let file = vault.getAbstractFileByPath(filePath);
    if (!file) {
      await vault.create(filePath, `# ${word}

${definition}`);
      console.log(`${fileName} was created in "${wordDefinitionsDir}"`);
    } else {
      console.log(`${fileName} already exists.`);
    }
    return [filePath, wordDefinitionsDir];
  }
  async loadSettings() {
    const loadedSettings = await this.loadData();
    this.settings = Object.assign(new PluginSettings(), loadedSettings);
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async onload() {
    this.settings = new PluginSettings();
    await this.loadSettings();
    this.addSettingTab(new MyPluginSettingsTab(this.app, this));
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        menu.addItem((item) => {
          item.setTitle("Define This").setIcon("dot-network").onClick(() => this.defineThis());
        });
      })
    );
  }
};
var CustomModal = class extends Modal {
  constructor(options) {
    var _a;
    super(options.app);
    this.message = options.message;
    this.title = options.title;
    this.onConfirm = options.onConfirm;
    this.textCenter = (_a = options.textCenter) != null ? _a : false;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.style.display = "flex";
    contentEl.style.flexDirection = "column";
    contentEl.style.alignItems = "center";
    contentEl.style.justifyContent = "center";
    const titleEl = contentEl.createEl("h2", { text: this.title });
    if (this.textCenter) {
      titleEl.style.textAlign = "center";
    }
    const messageEl = contentEl.createEl("p", { text: this.message });
    if (this.textCenter) {
      messageEl.style.textAlign = "center";
    }
    messageEl.style.marginTop = "0";
    messageEl.style.marginBottom = "30px";
    const buttonsDiv = contentEl.createEl("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "center";
    buttonsDiv.style.width = "100%";
    buttonsDiv.style.marginTop = "20px";
    const cancelButton = buttonsDiv.createEl("button", {
      text: this.onConfirm ? "Cancel" : "Close"
    });
    cancelButton.onclick = () => this.close();
    if (this.onConfirm) {
      const confirmButton = buttonsDiv.createEl("button", {
        text: "Confirm"
      });
      confirmButton.classList.add("mod-cta");
      confirmButton.style.marginRight = "40px";
      confirmButton.onclick = () => {
        if (this.onConfirm) {
          this.onConfirm();
        }
        this.close();
      };
    }
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
