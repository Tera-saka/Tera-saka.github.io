'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const fuda = [
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
];
const max = 100;
let counter = 0;
let startTime = 0;

function change_counter(count) {
  document.getElementById("counter").textContent = `${count}/100`;
}

function time_stamp(time_ms) {
  let timeStamp = Math.round(time_ms / 100);
  let totalTime_text = String(timeStamp);
  totalTime_text = totalTime_text.substring(0, totalTime_text.length - 1) + "." + totalTime_text.substring(totalTime_text.length - 1);
  document.getElementById("timer").textContent = `${totalTime_text}[sec] でした！`;
}

function print_kimariji(count) {
  let str = fuda[count];
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

function closemenu() {
  document.getElementById("start_btn").disabled = false;
  document.getElementById("setting_btn").disabled = false;
  document.getElementById("setting").style.display = "none";
}

function start() {
  const randnum = [];
  for (let i = 1; i <= max; i++) {
    randnum[i] = Math.random();
  }
  for (let i = 1; i < max; i++) {
    for (let j = i + 1; j <= max; j++) {
      if (randnum[i] < randnum[j]) {
        let num = randnum[i];
        let str = fuda[i];
        randnum[i] = randnum[j];
        randnum[j] = num;
        fuda[i] = fuda[j];
        fuda[j] = str;
      }
    }
  }
  document.getElementById("timer").textContent = "";
  document.getElementById("before").textContent = "　";
  document.getElementById("fuda").src = `${fuda[1]}`;
  document.getElementById("setting_btn").disabled = true;
  document.getElementById("start_btn").disabled = true;
  document.getElementById("stop_btn").disabled = false;
  document.getElementById("before_btn").disabled = false;
  document.getElementById("after_btn").disabled = false;
  counter++;
  change_counter(counter);
  startTime = new Date();
}

function stop() {
  const finishTime = new Date();
  const totalTime = finishTime.getTime() - startTime.getTime();
  document.getElementById("fuda").src = `${fuda[0]}`;
  document.getElementById("setting_btn").disabled = false;
  document.getElementById("start_btn").disabled = false;
  document.getElementById("stop_btn").disabled = true;
  document.getElementById("before_btn").disabled = true;
  document.getElementById("after_btn").disabled = true;
  counter = 0;
  change_counter(counter);
  time_stamp(totalTime);
}

function before() {
  if (counter > 1) {
    counter--;
    document.getElementById("fuda").src = `${fuda[counter]}`;
    change_counter(counter);
    if (counter === 1) {
      document.getElementById("before").textContent = "　";
    } else {
      print_kimariji(counter - 1);
    }
  }
}

function after() {
  if (counter >= max) {
    const finishTime = new Date();
    const totalTime = finishTime.getTime() - startTime.getTime();
    print_kimariji(counter);
    counter++;
    document.getElementById("fuda").src = `${fuda[counter]}`;
    document.getElementById("setting_btn").disabled = false;
    document.getElementById("start_btn").disabled = false;
    document.getElementById("stop_btn").disabled = true;
    document.getElementById("before_btn").disabled = true;
    document.getElementById("after_btn").disabled = true;
    counter = 0;
    change_counter(counter);
    time_stamp(totalTime);
  } else {
    print_kimariji(counter);
    counter++;
    document.getElementById("fuda").src = `${fuda[counter]}`;
    change_counter(counter);
  }
}

let settingButton = document.getElementById("setting_btn");
let closemenuButton = document.getElementById("close_menu_btn");
let startButton = document.getElementById("start_btn");
let stopButton = document.getElementById("stop_btn");
let beforeButton = document.getElementById("before_btn");
let afterButton = document.getElementById("after_btn");
settingButton.addEventListener('click', setting);
closemenuButton.addEventListener('click', closemenu);
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
beforeButton.addEventListener('click', before);
afterButton.addEventListener('click', after);
