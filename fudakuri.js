'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const fuda_org = [[
  "0_0_0_始.png",
  "1_1_0_む.png",
  "2_1_0_す.png",
  "3_1_0_め.png",
  "4_1_0_ふ.png",
  "5_1_0_さ.png",
  "6_1_0_ほ.png",
  "7_1_0_せ.png",
  "8_2_0_うか.png",
  "9_2_0_うら.png",
  "10_2_0_つき.png",
  "11_2_0_つく.png",
  "12_2_0_しの.png",
  "13_2_0_しら.png",
  "14_2_0_もも.png",
  "15_2_0_もろ.png",
  "16_2_0_ゆう.png",
  "17_2_0_ゆら.png",
  "18_3_0_いに.png",
  "19_3_0_いまこ.png",
  "20_3_0_いまは.png",
  "21_3_0_ちは.png",
  "22_3_0_ちぎりき.png",
  "23_3_0_ちぎりお.png",
  "24_3_0_ひさ.png",
  "25_3_0_ひとは.png",
  "26_3_0_ひとも.png",
  "27_3_0_きり.png",
  "28_3_0_きみがためは.png",
  "29_3_0_きみがためお.png",
  "30_4_0_はるす.png",
  "31_4_0_はるの.png",
  "32_4_0_はなさ.png",
  "33_4_0_はなの.png",
  "34_4_0_やえ.png",
  "35_4_0_やす.png",
  "36_4_0_やまが.png",
  "37_4_0_やまざ.png",
  "38_4_0_よも.png",
  "39_4_0_よを.png",
  "40_4_0_よのなかは.png",
  "41_4_0_よのなかよ.png",
  "42_4_0_かく.png",
  "43_4_0_かさ.png",
  "44_4_0_かぜそ.png",
  "45_4_0_かぜを.png",
  "46_5_0_みかき.png",
  "47_5_0_みかの.png",
  "48_5_0_みせ.png",
  "49_5_0_みち.png",
  "50_5_0_みよ.png",
  "51_6_0_たか.png",
  "52_6_0_たき.png",
  "53_6_0_たご.png",
  "54_6_0_たち.png",
  "55_6_0_たま.png",
  "56_6_0_たれ.png",
  "57_6_0_こころあ.png",
  "58_6_0_こころに.png",
  "59_6_0_こぬ.png",
  "60_6_0_この.png",
  "61_6_0_こひ.png",
  "62_6_0_これ.png",
  "63_7_0_おおえ.png",
  "64_7_0_おおけ.png",
  "65_7_0_おおこ.png",
  "66_7_0_おく.png",
  "67_7_0_おぐ.png",
  "68_7_0_おと.png",
  "69_7_0_おも.png",
  "70_7_0_わがい.png",
  "71_7_0_わがそ.png",
  "72_7_0_わすら.png",
  "73_7_0_わすれ.png",
  "74_7_0_わたのはらこ.png",
  "75_7_0_わたのはらや.png",
  "76_7_0_わび.png",
  "77_8_0_ながか.png",
  "78_8_0_ながら.png",
  "79_8_0_なげき.png",
  "80_8_0_なげけ.png",
  "81_8_0_なつ.png",
  "82_8_0_なにし.png",
  "83_8_0_なにわえ.png",
  "84_8_0_なにわが.png",
  "85_16_0_あはじ.png",
  "86_16_0_あはれ.png",
  "87_16_0_あらざ.png",
  "88_16_0_あらし.png",
  "89_16_0_あきか.png",
  "90_16_0_あきの.png",
  "91_16_0_あまつ.png",
  "92_16_0_あまの.png",
  "93_16_0_ありあ.png",
  "94_16_0_ありま.png",
  "95_16_0_あさぢ.png",
  "96_16_0_あさぼらけあ.png",
  "97_16_0_あさぼらけう.png",
  "98_16_0_あし.png",
  "99_16_0_あひ.png",
  "100_16_0_あけ.png",
  "101_0_0_終.png"
], []];

for (let i = 0; i <= 101; i++) {
  fuda_org[1][i] = true;
}

const maisuu = [7, 10, 12, 16, 5, 12, 14, 8, 16];
let max = 0;
let counter = 0;
let startTime = 0;
let change;
let fuda = [[], []];
fuda[0][0] = fuda_org[0][0];
fuda[1][0] = fuda_org[1][0];
let lastcheck = 0;
let islastcheck = false;

const memberList = ["伊東 奏", "鵜野 七緒", "岡 希美", "尾上 莉穂", "籠谷 千絵", "山中 紗瑛", "中村 真菜", "杉田 結", "荒城 梨奈", "野地 彩加", "穴見 理世", "磯野 花衣", "早井 寧花", "尾上 颯亮", "磯野 永康", "鵜野 耀大", "遠山 一花", "中村 奏一郎", "穴見 圭", "早井 凛花", "籠谷 幸加"];

function change_counter(count) {
  document.getElementById("counter").textContent = `${count}/${max}`;
}

function time_stamp(time_ms) {
  let timeStamp = Math.round(time_ms / 100);
  let totalTime_text = String(timeStamp);
  totalTime_text = totalTime_text.substring(0, totalTime_text.length - 1) + "." + totalTime_text.substring(totalTime_text.length - 1);
  document.getElementById("timer").textContent = `${totalTime_text}[sec] でした！`;
}

function print_kimariji(count) {
  let str = fuda[0][count];
  str = str.substring(0, str.length - 4);
  const fname = str.split('_');
  const kimariji = fname[3];
  document.getElementById("before").textContent = kimariji;
}

function setting() {
  document.getElementById("start_btn").disabled = true;
  document.getElementById("setting_btn").disabled = true;
  document.getElementById("setting").style.display = "block";
}

function radiocheck() {
  for (const i of document.getElementsByClassName("btn_check")) {
    i.disabled = document.getElementsByClassName("btn_radio")[3].checked;
  }
}

function checkbtn() {
  let checknum = 0;
  let last = 0;
  for (let i = 0; i < document.getElementsByClassName("btn_check").length; i++) {
    if (document.getElementsByClassName("btn_check")[i].checked) {
      checknum++;
      last = i;
    }
  }
  if (checknum === 0) {
    document.getElementsByClassName("btn_check")[lastcheck].checked = true;
  } else {
    if (checknum === 1) {
      lastcheck = last;
      islastcheck = true;
    } else {
      islastcheck = false;
    }
  }
}

function closemenu() {
  document.getElementById("start_btn").disabled = false;
  document.getElementById("setting_btn").disabled = false;
  document.getElementById("setting").style.display = "none";
}

function start() {
  for (let i = 1; i <= 101; i++) {
    fuda[0][i] = "";
    fuda[1][i] = "";
  }
  if (document.getElementsByClassName("btn_radio")[4].checked) {
    max = 0;
    if (document.getElementsByClassName("btn_check")[0].checked) {
      for (let i = 1; i <= 7; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[1].checked) {
      for (let i = 8; i <= 17; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[2].checked) {
      for (let i = 18; i <= 29; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[3].checked) {
      for (let i = 30; i <= 45; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[4].checked) {
      for (let i = 46; i <= 50; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[5].checked) {
      for (let i = 51; i <= 62; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[6].checked) {
      for (let i = 63; i <= 76; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[7].checked) {
      for (let i = 77; i <= 84; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    if (document.getElementsByClassName("btn_check")[8].checked) {
      for (let i = 85; i <= 100; i++) {
        max++;
        fuda[0][max] = fuda_org[0][i];
        fuda[1][max] = fuda_org[1][i];
      }
    }
    fuda[0][max + 1] = fuda_org[0][101];
    fuda[1][max + 1] = fuda_org[1][101];
  } else {
    max = 100;
    for (let i = 0; i <= 101; i++) {
      fuda[0][i] = fuda_org[0][i];
      fuda[1][i] = fuda_org[1][i];
    }
  }
  const randnum = [];
  for (let i = 1; i <= max; i++) {
    randnum[i] = Math.random();
    if (document.getElementsByClassName("btn_radio")[1].checked) {
      fuda[1][i] = false;
    } else if (document.getElementsByClassName("btn_radio")[2].checked) {
      if (randnum[i] < 0.5) {
        fuda[1][i] = false;
      } else {
        fuda[1][i] = true;
      }
    } else {
      fuda[1][i] = true;
    }
  }
  for (let i = 1; i < max; i++) {
    for (let j = i + 1; j <= max; j++) {
      if (randnum[i] < randnum[j]) {
        let num = randnum[i];
        let str = fuda[0][i];
        randnum[i] = randnum[j];
        randnum[j] = num;
        fuda[0][i] = fuda[0][j];
        fuda[0][j] = str;
      }
    }
  }
  document.getElementById("timer").textContent = "";
  document.getElementById("before").textContent = "　";
  document.getElementById("fuda").src = `${fuda[0][1]}`;
  upsidedown(fuda[1][1]);
  document.getElementById("setting_btn").disabled = true;
  change = document.getElementsByClassName("btn_setting")[0];
  change.style.color = "rgb(80, 80, 80)";
  change.style.backgroundColor = "rgb(124, 110, 80)";
  document.getElementById("start_btn").disabled = true;
  change = document.getElementsByClassName("btn_start")[0];
  change.style.color = "rgb(80, 80, 80)";
  change.style.backgroundColor = "rgb(100, 100, 156)";
  document.getElementById("stop_btn").disabled = false;
  change = document.getElementsByClassName("btn_stop")[0];
  change.style.color = "rgb(256, 256, 256)";
  change.style.backgroundColor = "rgb(256, 0, 0)";
  document.getElementById("before_btn").disabled = false;
  document.getElementById("after_btn").disabled = false;
  counter = 1;
  change_counter(counter);
  startTime = new Date();
}

function stop() {
  const finishTime = new Date();
  const totalTime = finishTime.getTime() - startTime.getTime();
  document.getElementById("fuda").src = `${fuda[0][0]}`;
  upsidedown(fuda[1][0]);
  document.getElementById("setting_btn").disabled = false;
  change = document.getElementsByClassName("btn_setting")[0];
  change.style.color = "rgb(256, 256, 256)";
  change.style.backgroundColor = "rgb(204, 153, 0)";
  document.getElementById("start_btn").disabled = false;
  change = document.getElementsByClassName("btn_start")[0];
  change.style.color = "rgb(256, 256, 256)";
  change.style.backgroundColor = "rgb(0, 0, 256)";
  document.getElementById("stop_btn").disabled = true;
  change = document.getElementsByClassName("btn_stop")[0];
  change.style.color = "rgb(100, 100, 100)";
  change.style.backgroundColor = "rgb(156, 100, 100)";
  document.getElementById("before_btn").disabled = true;
  document.getElementById("after_btn").disabled = true;
  counter = 0;
  change_counter(counter);
  time_stamp(totalTime);
}

function upsidedown(bool) {
  if (bool) {
    document.getElementById("fuda").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("fuda").style.transform = "rotate(180deg)";
  }
}

function soundon() {
  document.getElementById("sound").play();
}

function soundoff() {
  document.getElementById("sound").pause();
  document.getElementById("sound").currentTime = 0;
}

function before() {
  if (counter > 1) {
    soundoff();
    soundon();
    counter--;
    document.getElementById("fuda").src = `${fuda[0][counter]}`;
    upsidedown(fuda[1][counter]);
    change_counter(counter);
    if (counter === 1) {
      document.getElementById("before").textContent = "　";
    } else {
      print_kimariji(counter - 1);
    }
  }
}

function after() {
  soundoff();
  soundon();
  if (counter >= max) {
    const finishTime = new Date();
    const totalTime = finishTime.getTime() - startTime.getTime();
    print_kimariji(counter);
    counter++;
    document.getElementById("fuda").src = `${fuda[0][counter]}`;
    upsidedown(fuda[1][counter]);
    document.getElementById("setting_btn").disabled = false;
    change = document.getElementsByClassName("btn_setting")[0];
    change.style.color = "rgb(256, 256, 256)";
    change.style.backgroundColor = "rgb(204, 153, 0)";
    document.getElementById("start_btn").disabled = false;
    change = document.getElementsByClassName("btn_start")[0];
    change.style.color = "rgb(256, 256, 256)";
    change.style.backgroundColor = "rgb(0, 0, 256)";
    document.getElementById("stop_btn").disabled = true;
    change = document.getElementsByClassName("btn_stop")[0];
    change.style.color = "rgb(100, 100, 100)";
    change.style.backgroundColor = "rgb(156, 100, 100)";
    document.getElementById("before_btn").disabled = true;
    document.getElementById("after_btn").disabled = true;
    counter = 0;
    change_counter(counter);
    time_stamp(totalTime);
  } else {
    print_kimariji(counter);
    counter++;
    document.getElementById("fuda").src = `${fuda[0][counter]}`;
    upsidedown(fuda[1][counter]);
    change_counter(counter);
  }
}

function admin() {
  for (let i = 0; i < memberList.length; i++) {
    document.getElementsByClassName("member")[i].textContent = memberList[i];
  }
  const pw = "0523320376";
  let password = window.prompt("パスワードを入力して下さい。", "");
  while (password !== pw && password !== null) {
    password = window.prompt("パスワードが間違っています。正しいパスワードを入力して下さい。", "");
  }
  if (password === pw) {
    document.getElementById("admin").style.display = "block";
  }
}

function batu() {
  document.getElementById("admin").style.display = "none";
}

function kumi() {
  const attend = [];
  for (let i = 0; i < memberList.length; i++) {
    if (document.getElementsByClassName("attendance_check")[i].checked) {
      attend.push(document.getElementsByClassName("member")[i].textContent);
    }
  }
  let member = "";
  let bool = true;
  while (bool) {
    bool = false;
    const before = [];
    const randnum = [];
    for (let i = 0; i < attend.length; i++) {
      randnum[i] = Math.random();
    }
    for (let i = 0; i < attend.length - 1; i++) {
      for (let j = i; j < attend.length; j++) {
        if (randnum[i] < randnum[j]) {
          let num = randnum[i];
          let str = attend[i];
          randnum[i] = randnum[j];
          randnum[j] = num;
          attend[i] = attend[j];
          attend[j] = str;
        }
      }
    }
    if (document.getElementById("member0").textContent !== "") {
      for (let i = 0; i < attend.length; i++) {
        member = "member" + i;
        before[i] = document.getElementById(member).textContent;
      }
      for (let i = 0; i < attend.length; i += 2) {
        if (before.indexOf(attend[i]) % 2 === 0) {
          if (attend[i + 1] === before[i + 1]) {
            bool = true;
            i = attend.length;
          }
        } else {
          if (attend[i + 1] === before[i - 1]) {
            bool = true;
            i = attend.length;
          }
        }
      }
    }
  }
  for (let i = 0; i < attend.length; i++) {
    member = "member" + i;
    document.getElementById(member).textContent = attend[i];
  }
  for (let i = attend.length; i < memberList.length; i++) {
    member = "member" + i;
    document.getElementById(member).textContent = "";
  }
}

const settingButton = document.getElementById("setting_btn");
settingButton.addEventListener('click', setting);

const radioButton = document.getElementsByClassName("btn_radio");
for (let i = 3; i <= 4; i++) {
  radioButton[i].addEventListener('click', radiocheck);
}

const checkButton = document.getElementsByClassName("btn_check");
for (let i = 0; i <= 8; i++) {
  checkButton[i].addEventListener('click', checkbtn);
}

const closemenuButton = document.getElementById("close_menu_btn");
closemenuButton.addEventListener('click', closemenu);

const startButton = document.getElementById("start_btn");
startButton.addEventListener('click', start);

const stopButton = document.getElementById("stop_btn");
stopButton.addEventListener('click', stop);

const beforeButton = document.getElementById("before_btn");
beforeButton.addEventListener('click', before);

const afterButton = document.getElementById("after_btn");
afterButton.addEventListener('click', after);

const fileopenButton = document.getElementById("fileopen_btn");
fileopenButton.addEventListener('click', openpdf);

function openpdf() {
  window.open("howtouse.pdf")
}

const adminButton = document.getElementById("admin_btn");
adminButton.addEventListener('click', admin);

const batuButton = document.getElementById("batu_btn");
batuButton.addEventListener('click', batu);

const kumiButton = document.getElementById("kumi_btn");
kumiButton.addEventListener('click', kumi);
