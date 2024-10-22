(() => {
  let curentInfoPlayer = [];
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  var repeat = setInterval(async function () {
    sendInfor();
  }, 5000);
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value } = obj;
    console.log(obj);
    if (type === "LOAD") {
    } else if (type === "BIGBIO") {
      setBio();
    } else if (type === "COLORICON") {
      setColorIcon();
    } else if (type === "AUTOROSE") {
      alert("Auto rose wheeling by xQtFT! ");
      for (let index = 0; index < 20; index++) {
        autoRose();
      }
      alert("Done");
      location.reload();
    } else if (type === "AUTOGOLD") {
      alert("Auto rose wheeling by xQtFT! ");
      var repeat = setInterval(async function () {
        autoGold();
      }, 5000);
    } else if (type === "AUTOLOOTBOX") {
      autoLootbox();
    }
  });
  async function sendInfor() {
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let payload = { versionNumber: 1, platform: "web", locale: "en" };
    let options = {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      "https://core.api-wolvesville.com/players/meAndCheckAppVersion",
      options
    );
    const data = await response.json();
    const id = await data.player.id;
    const totalExp = await data.player.xpTotal;
    const level = await data.player.level;
    const username = await data.player.username;
    let options1 = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Cf-JWT": "",
        ids: 0x1,
      },
    };

    const response1 = await fetch(
      "https://core.api-wolvesville.com/inventory?",
      options1
    );
    const data1 = await response1.json();
    const gold = await data1.silverCount;
    const rose = await data1.roseCount;
    const lootbox = await data1.lootBoxes.length;
    const time = new Date();
    const newinfoPlayer = {
      ID: id,
      TOTALEXP: totalExp,
      LEVEL: level,
      USERNAME: username,
      GOLD: gold,
      ROSE: rose,
      LOOTBOX: lootbox,
      TIME: time,
      fromfile: "contentScript.js",
    };
    chrome.storage.sync.set({
      dataUser: JSON.stringify(
        [...curentInfoPlayer, newinfoPlayer].sort((a, b) => a.time - b.time)
      ),
    });
  }
  function setBio() {
    alert("Change a big bio by xQtFT! ");
    let url = "https://core.api-wolvesville.com/players/personalMsg";
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let payload = {
      msg: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
    };
    let options = {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options).then((response) => console.log(response.status));
    alert("Your bio is long now !!!!");
    location.reload();
  }
  function setColorIcon() {
    alert("Auto set color profile icon by xQtFT! ");
    let url = "https://core.api-wolvesville.com/equippedItems/profileIcon";
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let payload = { color: "#424242" };
    let options = {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options).then((response) => console.log(response.status));
    alert("Done!!");
    location.reload();
  }
  async function autoRose() {
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Cf-JWT": "",
        ids: 0x1,
      },
    };
    fetch(
      "https://core.api-wolvesville.com/rewards/goldenWheelSpin",
      options
    ).then((response) => {
      console.log(response.status);
    });
    await sleep(1100);
  }
  async function autoGold() {
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let payload = { versionNumber: 1, platform: "web", locale: "en" };
    let options = {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(
      "https://core.api-wolvesville.com/players/meAndCheckAppVersion",
      options
    );
    const data = await response.json();
    const id = await data.player.id;
    const totalExp = await data.player.xpTotal;
    let options1 = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Cf-JWT": "",
        ids: 0x1,
      },
    };

    const response1 = await fetch(
      "https://core.api-wolvesville.com/inventory?",
      options1
    );
    const data1 = await response1.json();
    const gold = await data1.silverCount;
    const rose = await data1.roseCount;
    const adID =
      id.charAt(gold % 32) +
      id.charAt(totalExp % 32) +
      new Date().getTime().toString(16) +
      id.charAt((gold + 1) % 32) +
      id.charAt(rose % 32);
    console.log(id + " " + totalExp + " " + gold + " " + rose + " ");
    let options2 = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Cf-JWT": "",
        ids: 0x1,
      },
    };

    fetch(
      "https://core.api-wolvesville.com/rewards/wheelRewardWithSecret/" + adID,
      options2
    ).then((response) => {
      console.log(response.status);
      if (response.status == "400") {
        alert("Your gold wheeling is limited!");
        location.reload();
      }
    });
  }
  async function autoLootbox() {
    alert("Auto lootboxes opening by xQtFT! ");
    let auth = localStorage.getItem("authtokens").toString();
    let token = auth.split('"')[3];
    let options1 = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Cf-JWT": "",
        ids: 0x1,
      },
    };
    const response1 = await fetch(
      "https://core.api-wolvesville.com/inventory?",
      options1
    );
    const data1 = await response1.json();
    if (data1.lootBoxes.length > 0) {
      for (let index = 0; index < data1.lootBoxes.length; index++) {
        var lootboxId = data1.lootBoxes[index].id;
        if (lootboxId != null) {
          let options = {
            method: "POST",
            headers: {
              "content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          };
          const response = fetch(
            "https://core.api-wolvesville.com/inventory/lootBoxes/" + lootboxId,
            options
          );
        }
        await sleep(1000);
      }
    } else {
      alert("You don't have any lootbox to open!");
    }
    alert("Opened " + data1.lootBoxes.length + " lootboxes! ");
  }
})();
