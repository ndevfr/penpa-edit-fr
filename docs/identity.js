const Identity = {
  // For messages speaking in the first person
  appOwner: "Swaroop",
  // For dismissing popups
  okButtonText: "ok 🙂",
  // Titles specific to popup types
  errorTitle: "Swaroop says",
  infoTitle: "Swaroop says",

  solveTitle: undefined,
  solveDefaultMessage: "Félicitations 🙂",
  solveOKButtonText: "D'accord, je garde ça précieusement !",

  incorrectMessage: "Essayez encore...",

  // Usage Button Amendments
  addUsageButtons: {
    // "Submission Rules for GMPuzzles": "https://tinyurl.com/GMPuzzlesFormatting"
  },

  googleTag: "",
};

(function () {
  const usageButtons = document.getElementById("usageButtons");
  for (let buttonName in Identity.addUsageButtons) {
    let button = document.createElement("a");
    button.setAttribute("href", Identity.addUsageButtons[buttonName]);
    button.setAttribute("target", "_blank");
    button.classList.add("button");
    button.textContent = buttonName;
    usageButtons.appendChild(button);
  }

  if (Identity.googleTag) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" + Identity.googleTag;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", Identity.googleTag);
  }
})();
