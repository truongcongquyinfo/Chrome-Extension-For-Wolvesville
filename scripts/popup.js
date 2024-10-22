import { getActiveTabURL } from "./utils.js";
const facebookButton = document.querySelector("#fb");
facebookButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.facebook.com/Truong.Cong.Quy.info/",
  });
});
const instagramButton = document.querySelector("#instagram");
instagramButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.instagram.com/truong.cong.quy.info/",
  });
});
const youtubeButton = document.querySelector("#youtube");
youtubeButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.youtube.com/@truongcongquyinfo",
  });
});
const mesageButton = document.querySelector("#message-btn");
mesageButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.facebook.com/messages/t/100004195688381",
  });
});
const subcribeButton = document.querySelector("#subcribe-btn");
subcribeButton.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.youtube.com/@truongcongquyinfo?sub_confirmation=1",
  });
});
const bigBio = document.querySelector("#big-bio-btn");
bigBio.addEventListener("click", async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {
    type: "BIGBIO",
  });
});
const colorIcon = document.querySelector("#color-icon-btn");
colorIcon.addEventListener("click", async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {
    type: "COLORICON",
  });
});
const autoRose = document.querySelector("#auto-rose-btn");
autoRose.addEventListener("click", async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {
    type: "AUTOROSE",
  });
});
const autoGold = document.querySelector("#auto-gold-btn");
autoGold.addEventListener("click", async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {
    type: "AUTOGOLD",
  });
});
const autoLootbox = document.querySelector("#auto-lootbox-btn");
autoLootbox.addEventListener("click", async () => {
  const activeTab = await getActiveTabURL();
  chrome.tabs.sendMessage(activeTab.id, {
    type: "AUTOLOOTBOX",
  });
});
const fillInfor = (playerInfo = []) => {
  if (playerInfo.length > 0) {
    const id = document.getElementById("id-info");
    id.innerHTML = " " + playerInfo[0].ID;
    const username = document.getElementById("username-info");
    username.innerHTML = " " + playerInfo[0].USERNAME;
    const level = document.getElementById("level-info");
    level.innerHTML = " " + playerInfo[0].LEVEL;
    const totalExp = document.getElementById("total-exp-info");
    totalExp.innerHTML = " " + playerInfo[0].TOTALEXP;
    const gold = document.getElementById("gold-info");
    gold.innerHTML = " " + playerInfo[0].GOLD;
    const rose = document.getElementById("rose-info");
    rose.innerHTML = " " + playerInfo[0].ROSE;
    const lootbox = document.getElementById("lootbox-info");
    lootbox.innerHTML = " " + playerInfo[0].LOOTBOX;
  }
};
document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();
  if (activeTab.url.includes("wolvesville.com")) {
    console.log("This extension is working!");
    chrome.storage.sync.get("dataUser", (data) => {
      const playerInfo = data.dataUser ? JSON.parse(data.dataUser) : [];
      fillInfor(playerInfo);
    });
  } else {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML =
      '<h1 class="title"> This is not wolvesville page.</h1> ';
  }
});
