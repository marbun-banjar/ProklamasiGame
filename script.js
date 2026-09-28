/* ============ PIXEL DATA ============ */
const PAL={'.':null,'k':'#0a0a0a','K':'#2a2a2a','s':'#F5C28B','e':'#1a1a1a','w':'#FFFFFF','g':'#5B6E4A','G':'#2E3A22','y':'#D4A017','b':'#3A2410'};
const PIX_SOEK=["......kkkkkkkk......",".....kkkkkkkkkk.....","....kkkkkkkkkkkk....","....kkkkkkkkkkkk....","....kkkkkkkkkkkk....","....kkkkkkkkkkkk....","....ssssssssssss....","...ssssssssssssss...","...ssssssssssssss...","...ssssssssssssss...","...ssseeesseeeesss...","...ssseeesseeeesss...","...ssseeesseeeesss...","...ssssssssssssss...","...ssssssssssssss...","...ssssssssssssss...","....ssssssssssss....","......skkkkkks......",".....ssssssssss.....","......ssssssss......",".......ssssss.......","......wwwwwwww......",".....wwwwwwwwww.....","....wwwwwwwwwwww....","...swwwwwwwwwwwws...","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","..sswwwwwwwwwwwwss..","...swwwwwwwwwwwws...","....wwwwwwwwwwww....","....wwwwwwwwwwww....","....wwwww..wwwww....","....wwwww..wwwww....","....wwwww..wwwww....","....wwwww..wwwww....","...bbbbbb..bbbbbb..."];
const PIX_DUTCH=["....kkkkkkkkkkkk....","...kkkkkkkkkkkkkk...","..kkkkkkkkkkkkkkkk..","..KKKKKKKKKKKKKKKK..","..KKKKKKKKKKKKKKKK..","...KKKKKKKKKKKKKK...","....ssssssssssss....","...ssssssssssssss...","...ssssssssssssss...","...ssssssssssssss...","...ssseeesseeeesss...","...ssseeesseeeesss...","...ssseeesseeeesss...","...ssssssssssssss...","...ssssssssssssss...","...ssssssssssssss...","....ssssssssssss....","......skkkkkks......",".....ssssssssss.....","......ssssssss......",".......ssssss.......","......gggggggg......",".....gggggggggg.....","....gggggggggggg....","...sggggggggggggs...","..ssggggyyggggggss..","..ssggggggggggggss..","..ssggggyyggggggss..","..ssggggggggggggss..","..ssggggyyggggggss..","..ssggggggggggggss..","..ssggggyyggggggss..","...sggggggggggggs...","....gggggggggggg....","....gggggggggggg....","....ggggg..ggggg....","....ggggg..ggggg....","....ggggg..ggggg....","....ggggg..ggggg....","...kkkkkk..kkkkkk..."];

/* ============ QUESTIONS ============ */
const QUESTIONS=[
{q:"Pancasila disahkan sebagai dasar negara Indonesia pada tanggal...",ok:"18 Agustus 1945",no:["17 Agustus 1945","1 Juni 1945","1 Oktober 1945"]},
{q:"Siapa yang mengusulkan nama 'Pancasila' pada sidang BPUPKI 1 Juni 1945?",ok:"Ir. Soekarno",no:["Moh. Yamin","Soepomo","Moh. Hatta"]},
{q:"BPUPKI adalah singkatan dari...",ok:"Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia",no:["Badan Pengurus Usaha Pembangunan Kemerdekaan Indonesia","Badan Penyelidik UUD Proklamasi Kemerdekaan Indonesia","Badan Pertimbangan Usul Presiden Kemerdekaan Indonesia"]},
{q:"Berapa jumlah sila dalam Pancasila?",ok:"5",no:["3","4","6"]},
{q:"Bunyi sila ke-3 Pancasila adalah...",ok:"Persatuan Indonesia",no:["Kemanusiaan yang adil dan beradab","Ketuhanan Yang Maha Esa","Keadilan sosial bagi seluruh rakyat Indonesia"]},
{q:"UUD 1945 disahkan sebagai konstitusi Indonesia pada tanggal...",ok:"18 Agustus 1945",no:["17 Agustus 1945","1 Juni 1945","22 Juni 1945"]},
{q:"Siapa presiden pertama Republik Indonesia?",ok:"Ir. Soekarno",no:["Moh. Hatta","Soeharto","B.J. Habibie"]},
{q:"Siapa wakil presiden pertama Republik Indonesia?",ok:"Moh. Hatta",no:["Adam Malik","Sri Sultan HB IX","Soeharto"]},
{q:"Semboyan bangsa Indonesia adalah...",ok:"Bhinneka Tunggal Ika",no:["Tut Wuri Handayani","Jalesveva Jayamahe","Rawe-rawe rantas"]},
{q:"Siapa yang membacakan teks Proklamasi Kemerdekaan?",ok:"Ir. Soekarno",no:["Moh. Hatta","Sayuti Melik","Ahmad Soebardjo"]},
{q:"Proklamasi Kemerdekaan dibacakan di...",ok:"Jl. Pegangsaan Timur No. 56",no:["Istana Merdeka","Jl. Menteng No. 31","Gedung Joang 45"]},
{q:"Amandemen UUD 1945 dilakukan sebanyak berapa kali?",ok:"4 kali",no:["2 kali","3 kali","5 kali"]},
{q:"Lembaga yang berwenang mengubah UUD 1945 adalah...",ok:"MPR",no:["DPR","Presiden","Mahkamah Konstitusi"]},
{q:"Sila ke-4 Pancasila dilambangkan dengan...",ok:"Kepala Banteng",no:["Pohon Beringin","Padi dan Kapas","Bintang"]},
{q:"Lambang sila pertama Pancasila adalah...",ok:"Bintang",no:["Rantai","Beringin","Banteng"]},
{q:"Trias Politika membagi kekuasaan negara menjadi...",ok:"3 cabang",no:["2 cabang","4 cabang","5 cabang"]},
{q:"Lembaga negara yang berwenang membuat undang-undang adalah...",ok:"DPR",no:["MPR","Presiden","MA"]},
{q:"HAM adalah singkatan dari...",ok:"Hak Asasi Manusia",no:["Hak Asasi Masyarakat","Hukum Asasi Manusia","Hubungan Antar Manusia"]},
{q:"Wawasan Nusantara adalah cara pandang bangsa Indonesia tentang...",ok:"Diri dan tanah airnya",no:["Dunia internasional","Perekonomian global","Kebudayaan asing"]},
{q:"Kedaulatan NKRI berada di tangan...",ok:"Rakyat",no:["Presiden","MPR","TNI"]},
{q:"Bunyi sila ke-5 Pancasila adalah...",ok:"Keadilan sosial bagi seluruh rakyat Indonesia",no:["Persatuan Indonesia","Kemanusiaan yang adil dan beradab","Ketuhanan Yang Maha Esa"]},
{q:"PPKI adalah singkatan dari...",ok:"Panitia Persiapan Kemerdekaan Indonesia",no:["Panitia Pengawas Kemerdekaan Indonesia","Panitia Pemilihan Kemerdekaan Indonesia","Panitia Pembela Kemerdekaan Indonesia"]},
{q:"Konstitusi pertama Indonesia adalah...",ok:"UUD 1945",no:["UUD RIS","UUDS 1950","Konstitusi RIS"]},
{q:"Pemilu pertama di Indonesia dilaksanakan pada tahun...",ok:"1955",no:["1945","1950","1960"]},
{q:"Bhinneka Tunggal Ika berasal dari bahasa...",ok:"Jawa Kuno",no:["Sanskerta","Melayu Kuno","Kawi Modern"]},
{q:"Siapa yang mengetik naskah Proklamasi Kemerdekaan?",ok:"Sayuti Melik",no:["Ahmad Soebardjo","Sukarni","B.M. Diah"]},
{q:"Naskah Proklamasi dirumuskan di rumah...",ok:"Laksamana Maeda",no:["Ir. Soekarno","Moh. Hatta","Ahmad Soebardjo"]},
{q:"Sidang pertama BPUPKI membahas tentang...",ok:"Dasar negara Indonesia",no:["Bentuk pemerintahan","Wilayah negara","Sistem ekonomi"]},
{q:"BPUPKI dibentuk oleh pemerintah...",ok:"Jepang",no:["Belanda","Inggris","Amerika"]},
{q:"Sila ke-2 Pancasila dilambangkan dengan...",ok:"Rantai",no:["Bintang","Beringin","Padi dan Kapas"]},
{q:"Bentuk negara Indonesia adalah...",ok:"Kesatuan (Unitaris)",no:["Serikat (Federal)","Konfederasi","Kerajaan"]},
{q:"Siapa yang pertama kali mengibarkan bendera Merah Putih setelah Proklamasi?",ok:"Latief Hendraningrat & Suhud",no:["Ir. Soekarno & Moh. Hatta","Sayuti Melik & Sukarni","Ahmad Soebardjo & B.M. Diah"]},
{q:"Makna alinea pertama Pembukaan UUD 1945 adalah...",ok:"Kemerdekaan adalah hak segala bangsa",no:["Tujuan negara Indonesia","Bentuk negara Indonesia","Dasar negara Indonesia"]},
{q:"Lembaga negara yang menguji undang-undang terhadap UUD adalah...",ok:"Mahkamah Konstitusi",no:["Mahkamah Agung","DPR","MPR"]},
{q:"Demokrasi Pancasila bersumber pada...",ok:"Nilai-nilai Pancasila",no:["Ideologi liberal","Ideologi komunis","Ideologi sosialis"]}
];

/* ============ CANVAS ============ */
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
ctx.imageSmoothingEnabled=false;
const W=1280,H=720,GROUND_Y=Math.floor(H*0.56);

function makePixel(pixels,scale){
  const w=pixels[0].length*scale,h=pixels.length*scale;
  const c=document.createElement('canvas');c.width=w;c.height=h;
  const cx=c.getContext('2d');cx.imageSmoothingEnabled=false;
  for(let y=0;y<pixels.length;y++)for(let x=0;x<pixels[y].length;x++){
    const col=PAL[pixels[y][x]];
    if(col){cx.fillStyle=col;cx.fillRect(x*scale,y*scale,scale,scale);}
  }
  return c;
}
function flipCanvas(src){
  const c=document.createElement('canvas');c.width=src.width;c.height=src.height;
  const cx=c.getContext('2d');cx.imageSmoothingEnabled=false;
  cx.translate(src.width,0);cx.scale(-1,1);cx.drawImage(src,0,0);return c;
}
const SCL=8;
const SOEK_IMG=makePixel(PIX_SOEK,SCL),DUTCH_IMG=flipCanvas(makePixel(PIX_DUTCH,SCL));
const SOEK_W=SOEK_IMG.width,SOEK_H=SOEK_IMG.height,DUTCH_W=DUTCH_IMG.width,DUTCH_H=DUTCH_IMG.height;
const SOEK_X=140,DUTCH_X=W-140-DUTCH_W,SOEK_Y=GROUND_Y-SOEK_H,DUTCH_Y=GROUND_Y-DUTCH_H;

/* ============ AUDIO — FIELD OF MEMORIES ============ */
let AC=null,musicOn=false,sfxOn=true,masterGain=null,musicGain=null;
let melodyNextTime=0,melodyIdx=0,accompNextTime=0,accompIdx=0;
let melodyTimeout=null,accompTimeout=null;
const BEAT=60/128;
const NOTE_FREQ={'C2':65.41,'D2':73.42,'Eb2':77.78,'F2':87.31,'G2':98.00,'Ab2':103.83,'Bb2':116.54,'C3':130.81,'D3':146.83,'Eb3':155.56,'F3':174.61,'G3':196.00,'Ab3':207.65,'Bb3':233.08,'C4':261.63,'D4':293.66,'Eb4':311.13,'F4':349.23,'G4':392.00,'Ab4':415.30,'Bb4':466.16,'C5':523.25,'D5':587.33,'Eb5':622.25,'F5':698.46,'G5':783.99,'Ab5':830.61,'Bb5':932.33,'C6':1046.50};

const MELODY=[
['G4',2],['D5',1],['A4',1],['G4',1],['G4',1],['C5',1],['G4',1],['G4',0.5],['F4',0.5],['C5',2],['D5',0.5],['D5',0.5],['C5',1],['D5',1],['D5',1],['F5',1],
['D5',1],['D5',1],['C5',1],['C5',1],['D5',1],['D5',1],['C5',1],['G4',1],['A4',1],['G4',1],['D5',1],['C5',1],['C5',2],['G4',2],
['C5',2],['D5',2],['Eb5',2],['D5',1],['C5',1],['Bb4',2],['C5',2],['G4',4],
['C5',2],['D5',2],['Eb5',2],['F5',1],['G5',1],['F5',2],['Eb5',2],['D5',2],['C5',2]
];
const ACCOMP=[
{bass:'C3',chord:['C4','Eb4','G4'],beats:4},{bass:'Bb2',chord:['Bb3','D4','F4'],beats:4},
{bass:'Ab2',chord:['Ab3','C4','Eb4'],beats:4},{bass:'Bb2',chord:['Bb3','D4','F4'],beats:4},
{bass:'C3',chord:['C4','Eb4','G4'],beats:4},{bass:'Bb2',chord:['Bb3','D4','F4'],beats:4},
{bass:'Ab2',chord:['Ab3','C4','Eb4'],beats:4},{bass:'G2',chord:['G3','Bb3','D4'],beats:4},
{bass:'C3',chord:['C4','Eb4','G4'],beats:4},{bass:'Ab2',chord:['Ab3','C4','Eb4'],beats:4},
{bass:'Bb2',chord:['Bb3','D4','F4'],beats:4},{bass:'G2',chord:['G3','Bb3','D4'],beats:4},
{bass:'C3',chord:['C4','Eb4','G4'],beats:4},{bass:'Ab2',chord:['Ab3','C4','Eb4'],beats:4},
{bass:'Bb2',chord:['Bb3','D4','F4'],beats:4},{bass:'C3',chord:['C4','Eb4','G4'],beats:4}
];

function initAudio(){
  if(AC)return;
  try{AC=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
  masterGain=AC.createGain();masterGain.gain.value=0.9;masterGain.connect(AC.destination);
  musicGain=AC.createGain();musicGain.gain.value=0.55;musicGain.connect(masterGain);
}
function playPiano(freq,dur,start,vol){
  if(!AC)return;
  const o1=AC.createOscillator(),g1=AC.createGain();
  o1.type='triangle';o1.frequency.value=freq;
  g1.gain.setValueAtTime(0,start);g1.gain.linearRampToValueAtTime(vol,start+0.005);
  g1.gain.exponentialRampToValueAtTime(vol*0.35,start+dur*0.35);
  g1.gain.exponentialRampToValueAtTime(0.001,start+dur*1.2);
  o1.connect(g1);g1.connect(musicGain);o1.start(start);o1.stop(start+dur*1.3);
  const o2=AC.createOscillator(),g2=AC.createGain();
  o2.type='sine';o2.frequency.value=freq*2;
  g2.gain.setValueAtTime(0,start);g2.gain.linearRampToValueAtTime(vol*0.3,start+0.003);
  g2.gain.exponentialRampToValueAtTime(0.001,start+dur*0.55);
  o2.connect(g2);g2.connect(musicGain);o2.start(start);o2.stop(start+dur*0.6);
}
function playBass(freq,dur,start,vol){
  if(!AC)return;
  const o=AC.createOscillator(),g=AC.createGain();
  o.type='sine';o.frequency.value=freq;
  g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(vol,start+0.01);
  g.gain.setValueAtTime(vol,start+dur*0.55);g.gain.exponentialRampToValueAtTime(0.001,start+dur);
  o.connect(g);g.connect(musicGain);o.start(start);o.stop(start+dur+0.1);
}
function playChord(notes,dur,start,vol){
  if(!AC)return;
  notes.forEach(n=>{
    const f=NOTE_FREQ[n];if(!f)return;
    const o=AC.createOscillator(),g=AC.createGain();
    o.type='triangle';o.frequency.value=f;
    g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(vol,start+0.03);
    g.gain.setValueAtTime(vol,start+dur*0.6);g.gain.exponentialRampToValueAtTime(0.001,start+dur);
    o.connect(g);g.connect(musicGain);o.start(start);o.stop(start+dur+0.1);
  });
}
function playTimpani(t,vol){
  if(!AC)return;
  const o=AC.createOscillator(),g=AC.createGain();
  o.type='sine';o.frequency.setValueAtTime(90,t);
  o.frequency.exponentialRampToValueAtTime(45,t+0.18);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||0.12,t+0.01);
  g.gain.exponentialRampToValueAtTime(0.001,t+0.35);
  o.connect(g);g.connect(musicGain);o.start(t);o.stop(t+0.4);
}
function scheduleMelody(){
  if(!musicOn||!AC)return;
  const now=AC.currentTime;
  while(melodyNextTime<now+0.5){
    const [note,beats]=MELODY[melodyIdx%MELODY.length];
    const dur=beats*BEAT;
    if(note!=='rest'){const f=NOTE_FREQ[note];if(f)playPiano(f,dur*0.92,melodyNextTime,0.14);}
    melodyNextTime+=dur;melodyIdx++;
  }
  melodyTimeout=setTimeout(scheduleMelody,100);
}
function scheduleAccomp(){
  if(!musicOn||!AC)return;
  const now=AC.currentTime;
  while(accompNextTime<now+0.5){
    const a=ACCOMP[accompIdx%ACCOMP.length];
    const dur=a.beats*BEAT;
    playBass(NOTE_FREQ[a.bass],dur*0.9,accompNextTime,0.16);
    playChord(a.chord,dur*0.5,accompNextTime,0.055);
    playChord(a.chord,dur*0.4,accompNextTime+dur*0.5,0.04);
    playTimpani(accompNextTime,0.1);
    accompNextTime+=dur;accompIdx++;
  }
  accompTimeout=setTimeout(scheduleAccomp,100);
}
function startMusic(){
  if(!AC||musicOn)return;
  musicOn=true;
  const start=AC.currentTime+0.15;
  melodyNextTime=start;accompNextTime=start;melodyIdx=0;accompIdx=0;
  scheduleMelody();scheduleAccomp();
}
function stopMusic(){
  musicOn=false;
  if(melodyTimeout)clearTimeout(melodyTimeout);
  if(accompTimeout)clearTimeout(accompTimeout);
}
function beep(freq,dur,type,vol,slide){
  if(!AC||!sfxOn)return;
  const t=AC.currentTime;
  const o=AC.createOscillator(),g=AC.createGain();
  o.type=type||'square';o.frequency.setValueAtTime(freq,t);
  if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(40,freq+slide),t+dur);
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(0.001,t+dur);
  o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+dur+0.02);
}
const SFX={
  correct(){beep(880,.09,'square',.15);setTimeout(()=>beep(1100,.09,'square',.15),70);setTimeout(()=>beep(1320,.14,'square',.14),150);},
  wrong(){if(!AC||!sfxOn)return;const t=AC.currentTime;for(let i=0;i<4;i++){const o=AC.createOscillator(),g=AC.createGain();o.type='sawtooth';o.frequency.value=90+i*18;g.gain.setValueAtTime(.14,t);g.gain.exponentialRampToValueAtTime(.001,t+.55);o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+.6);}},
  hit(){beep(140,.12,'square',.2,-80);setTimeout(()=>beep(80,.22,'sawtooth',.18,-30),80);},
  counter(){beep(600,.08,'square',.16);setTimeout(()=>beep(500,.08,'square',.16),70);setTimeout(()=>beep(400,.08,'square',.16),140);setTimeout(()=>beep(300,.15,'sawtooth',.18,-100),210);},
  click(){beep(600,.05,'square',.1);},
  win(){[523,659,784,1046,1318].forEach((f,i)=>setTimeout(()=>beep(f,.16,'square',.16),i*110));},
  lose(){[400,340,280,200,140].forEach((f,i)=>setTimeout(()=>beep(f,.24,'sawtooth',.14,-50),i*170));},
  ko(){if(!AC||!sfxOn)return;const t=AC.currentTime;const o=AC.createOscillator(),g=AC.createGain();o.type='sawtooth';o.frequency.setValueAtTime(300,t);o.frequency.exponentialRampToValueAtTime(1200,t+0.35);o.frequency.setValueAtTime(1200,t+0.9);o.frequency.exponentialRampToValueAtTime(120,t+1.7);const lfo=AC.createOscillator(),lg=AC.createGain();lfo.type='sine';lfo.frequency.value=22;lg.gain.value=60;lfo.connect(lg);lg.connect(o.frequency);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(0.3,t+0.05);g.gain.setValueAtTime(0.3,t+1.1);g.gain.exponentialRampToValueAtTime(0.001,t+1.7);o.connect(g);g.connect(masterGain);o.start(t);o.stop(t+1.75);lfo.start(t);lfo.stop(t+1.75);const b=AC.createOscillator(),bg=AC.createGain();b.type='sine';b.frequency.setValueAtTime(70,t);b.frequency.exponentialRampToValueAtTime(25,t+1.6);bg.gain.setValueAtTime(0.22,t);bg.gain.exponentialRampToValueAtTime(0.001,t+1.7);b.connect(bg);bg.connect(masterGain);b.start(t);b.stop(t+1.75);}
};

/* ============ BACKGROUND ============ */
let bgSeed=987654;
function rng(){bgSeed=(bgSeed*9301+49297)%233280;return bgSeed/233280;}
let bgCache=null;
function px(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));}
function drawPixelBuilding(c,x,baseY,w,h,depth,lightness,windows){
  const colTop=lightness>0.7?'#B5A48A':lightness>0.4?'#8E7F68':'#5C5243';
  const colFront=lightness>0.7?'#9B8A72':lightness>0.4?'#7A6D5C':'#4A4238';
  const colSide=lightness>0.7?'#4E4234':lightness>0.4?'#3E3428':'#28221A';
  const outline='rgba(0,0,0,.85)';const topY=baseY-h;
  c.fillStyle=colSide;c.beginPath();c.moveTo(x+w,topY);c.lineTo(x+w+depth,topY-depth*0.7);c.lineTo(x+w+depth,baseY-depth*0.7);c.lineTo(x+w,baseY);c.closePath();c.fill();c.strokeStyle=outline;c.lineWidth=2;c.stroke();
  c.fillStyle=colTop;c.beginPath();c.moveTo(x,topY);c.lineTo(x+w,topY);c.lineTo(x+w+depth,topY-depth*0.7);c.lineTo(x+depth,topY-depth*0.7);c.closePath();c.fill();c.strokeStyle=outline;c.stroke();
  c.fillStyle=colFront;const segs=Math.max(4,Math.floor(w/14));const topProfile=[];
  for(let i=0;i<=segs;i++){const isEdge=i===0||i===segs;topProfile.push(isEdge?0:-Math.floor(rng()*16));}
  c.beginPath();c.moveTo(x,baseY);for(let i=0;i<=segs;i++){const pxx=x+(i/segs)*w;const pyy=topY+topProfile[i];c.lineTo(pxx,pyy);}c.lineTo(x+w,baseY);c.closePath();c.fill();c.strokeStyle=outline;c.stroke();
  if(windows){const winCol=lightness>0.5?'rgba(255,220,120,.35)':'rgba(255,180,80,.18)';const winDark='rgba(0,0,0,.7)';const stepX=Math.max(18,Math.floor(w/4));for(let wy=topY+30;wy<baseY-20;wy+=26){for(let wx=x+10;wx<x+w-16;wx+=stepX){if(rng()>0.25){px(c,wx,wy,10,14,winDark);px(c,wx+2,wy+2,4,4,winCol);}}}}
}
function buildBackground(){
  bgCache=document.createElement('canvas');bgCache.width=W;bgCache.height=H;
  const c=bgCache.getContext('2d');c.imageSmoothingEnabled=false;bgSeed=987654;
  const sky=c.createLinearGradient(0,0,0,GROUND_Y);
  sky.addColorStop(0,'#3A1F42');sky.addColorStop(0.28,'#7B3D5A');sky.addColorStop(0.55,'#C25A3D');sky.addColorStop(0.78,'#E8894A');sky.addColorStop(1,'#FFC27A');
  c.fillStyle=sky;c.fillRect(0,0,W,GROUND_Y+2);
  const sx=W*0.74,sy=H*0.27;
  const glow=c.createRadialGradient(sx,sy,10,sx,sy,220);
  glow.addColorStop(0,'rgba(255,240,180,.95)');glow.addColorStop(0.4,'rgba(255,190,100,.55)');glow.addColorStop(1,'rgba(255,150,60,0)');
  c.fillStyle=glow;c.fillRect(sx-240,sy-240,480,480);
  c.fillStyle='#FFF2B8';c.beginPath();c.arc(sx,sy,44,0,Math.PI*2);c.fill();
  c.fillStyle='#FFD37A';c.beginPath();c.arc(sx,sy,52,0,Math.PI*2);c.fill();
  c.fillStyle='#FFF2B8';c.beginPath();c.arc(sx,sy,44,0,Math.PI*2);c.fill();
  c.fillStyle='rgba(50,20,40,.5)';for(let i=0;i<9;i++){const cx=(i/9)*W+rng()*80,cy=H*0.08+rng()*90,r=50+rng()*100;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.fill();}
  const farY=GROUND_Y-40;
  for(let i=0;i<26;i++){const bx=(i/26)*W+rng()*30,bw=20+rng()*35,bh=40+rng()*90;drawPixelBuilding(c,bx,farY+8,bw,bh,4,0.15,false);}
  const midY=GROUND_Y-10;
  for(let i=0;i<14;i++){const bx=(i/14)*W+rng()*40-20,bw=45+rng()*50,bh=80+rng()*140;drawPixelBuilding(c,bx,midY+6,bw,bh,7,0.4,rng()>0.4);}
  const hz=c.createLinearGradient(0,GROUND_Y-100,0,GROUND_Y);hz.addColorStop(0,'rgba(220,120,60,0)');hz.addColorStop(1,'rgba(200,100,50,.35)');c.fillStyle=hz;c.fillRect(0,GROUND_Y-100,W,100);
  const rTop=GROUND_Y+2,rBot=H;
  const roadGrad=c.createLinearGradient(0,rTop,0,rBot);roadGrad.addColorStop(0,'#3A2C22');roadGrad.addColorStop(0.4,'#4A3A2C');roadGrad.addColorStop(1,'#2A1E15');c.fillStyle=roadGrad;c.fillRect(0,rTop,W,rBot-rTop);
  c.fillStyle='#5A4838';c.fillRect(0,rTop,W,4);c.fillStyle='#2A1E15';c.fillRect(0,rTop+4,W,3);
  c.fillStyle='rgba(0,0,0,.5)';for(let i=0;i<200;i++){const rx=rng()*W,ry=rTop+20+rng()*(rBot-rTop-20);const sw=3+rng()*8,sh=2+rng()*4;c.fillRect(Math.round(rx),Math.round(ry),Math.round(sw),Math.round(sh));}
  c.fillStyle='rgba(255,200,140,.1)';for(let i=0;i<60;i++){const rx=rng()*W,ry=rTop+40+rng()*(rBot-rTop-40);c.fillRect(Math.round(rx),Math.round(ry),2,2);}
  c.fillStyle='rgba(220,190,60,.55)';for(let i=0;i<24;i++){const dy=rTop+30+i*((rBot-rTop-30)/24);const dw=6+i*0.8;c.fillRect((W/2)-dw/2,Math.round(dy),Math.round(dw),3);}
  drawPixelBuilding(c,-30,GROUND_Y+20,140,GROUND_Y+180,18,0.85,true);
  drawPixelBuilding(c,W-110,GROUND_Y+20,150,GROUND_Y+200,20,0.85,true);
  c.fillStyle='rgba(0,0,0,.6)';c.fillRect(0,GROUND_Y-2,W,3);
}

/* ============ PLANES ============ */
const planes=[],airBullets=[],explosions=[];
function spawnPlanePair(){
  const dir=Math.random()<0.5?1:-1,y=80+Math.random()*140;
  const hue=Math.random()<0.5?'#3A4A38':'#5A3A2A';
  const p1={x:dir===1?-60:W+60,y:y,vx:dir*1.6,vy:0,dir:dir,type:'patrol',target:null,timer:0,color:hue,prop:0,alive:true,hitTimer:0,roll:0};
  planes.push(p1);
  if(Math.random()<0.65){const offset=100+Math.random()*80;const p2={x:p1.x-dir*offset,y:y+(Math.random()-0.5)*60,vx:dir*2.2,vy:0,dir:dir,type:'chase',target:p1,timer:0,color:'#5A3A2A',prop:0,alive:true,hitTimer:0,roll:0};planes.push(p2);p1.chaser=p2;}
}
function spawnAirBullet(from,to){const ang=Math.atan2(to.y-from.y,to.x-from.x);const speed=8+Math.random()*2;airBullets.push({x:from.x,y:from.y,vx:Math.cos(ang)*speed,vy:Math.sin(ang)*speed,life:2.2});}
function spawnMushroom(x,groundY,behind){explosions.push({x,y:groundY,t:0,dur:2.6,behind:behind,baseY:groundY});}
function drawPlane(p){
  ctx.save();ctx.globalAlpha=0.78;ctx.translate(Math.round(p.x),Math.round(p.y));
  if(p.dir===-1)ctx.scale(-1,1);if(p.roll)ctx.rotate(p.roll);
  ctx.globalAlpha=0.2;ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(0,28,24,4,0,0,Math.PI*2);ctx.fill();
  ctx.globalAlpha=0.78;
  ctx.fillStyle=p.color;ctx.fillRect(-22,-4,44,8);
  ctx.fillStyle='#1A1A1A';ctx.fillRect(-22,-5,44,2);ctx.fillRect(-22,3,44,2);
  ctx.fillStyle=p.color;ctx.fillRect(20,-3,6,6);ctx.fillStyle='#0A0A0A';ctx.fillRect(24,-3,3,6);
  ctx.fillStyle='#7BC5E0';ctx.fillRect(2,-10,10,6);ctx.fillStyle='#0A0A0A';ctx.fillRect(2,-11,10,1);
  ctx.fillStyle=p.color;ctx.fillRect(-10,-11,18,4);ctx.fillStyle='#1A1A1A';ctx.fillRect(-10,-12,18,1);
  ctx.fillStyle=p.color;ctx.fillRect(-10,3,18,5);ctx.fillStyle='#1A1A1A';ctx.fillRect(-10,8,18,1);
  ctx.fillStyle=p.color;ctx.fillRect(-26,-12,6,8);ctx.fillStyle='#1A1A1A';ctx.fillRect(-26,-13,6,1);
  ctx.save();ctx.translate(28,0);ctx.rotate(p.prop*4);ctx.fillStyle='rgba(30,30,30,.85)';ctx.fillRect(-1,-11,2,22);ctx.restore();
  if(p.hitTimer>0){ctx.globalAlpha=0.6;for(let i=0;i<4;i++){const sy=i*6;ctx.fillStyle='rgba(60,60,60,'+(0.5-i*0.1)+')';ctx.fillRect(-20-sy,-2+Math.sin(p.prop*3+i)*2,6,6);}}
  ctx.restore();
}
function drawAirBullet(b){
  ctx.save();ctx.globalAlpha=0.7;ctx.shadowColor='#FFD93D';ctx.shadowBlur=14;
  ctx.fillStyle='#FFE066';const ang=Math.atan2(b.vy,b.vx);
  ctx.translate(Math.round(b.x),Math.round(b.y));ctx.rotate(ang);
  ctx.fillRect(-4,-1.5,8,3);ctx.fillStyle='#FFFFFF';ctx.fillRect(-3,-1,6,2);
  ctx.shadowBlur=0;ctx.globalAlpha=0.35;ctx.fillStyle='#FFD93D';ctx.fillRect(-12,-1,12,2);
  ctx.restore();
}
function updatePlanes(dt){
  const dtSec=dt/1000;
  for(let i=planes.length-1;i>=0;i--){
    const p=planes[i];
    if(!p.alive){p.vy+=0.35;p.x+=p.vx;p.y+=p.vy;p.roll=(p.roll||0)+0.08;if(p.y>GROUND_Y+20){spawnMushroom(p.x,GROUND_Y,false);planes.splice(i,1);}continue;}
    p.prop+=0.3;
    if(p.hitTimer>0){p.hitTimer-=dtSec;if(p.hitTimer<=0){p.alive=false;p.vy=1;p.vx=p.dir*1.5;}continue;}
    if(p.type==='chase'&&p.target&&p.target.alive){
      const dx=p.target.x-p.x,dy=p.target.y-p.y,dist=Math.hypot(dx,dy);
      const dVx=(dx/dist)*2.4,dVy=(dy/dist)*2.4;
      p.vx+=(dVx-p.vx)*0.05;p.vy+=(dVy-p.vy)*0.05;p.timer+=dt;
      if(p.timer>1100&&Math.abs(dy)<40){p.timer=0;spawnAirBullet({x:p.x,y:p.y},{x:p.target.x,y:p.target.y});}
    }else{p.vy=Math.sin(performance.now()/900+p.x*0.01)*0.4;p.timer+=dt;}
    p.x+=p.vx;p.y+=p.vy;
    if(p.y<40)p.vy=Math.abs(p.vy);if(p.y>GROUND_Y-80)p.vy=-Math.abs(p.vy);
    if(p.x<-200||p.x>W+200)planes.splice(i,1);
  }
  for(let i=airBullets.length-1;i>=0;i--){
    const b=airBullets[i];b.x+=b.vx;b.y+=b.vy;b.life-=dtSec;
    if(b.life<=0||b.x<-50||b.x>W+50||b.y<-50||b.y>H+50){airBullets.splice(i,1);continue;}
    for(const p of planes){if(!p.alive||p.hitTimer>0)continue;if(Math.abs(b.x-p.x)<22&&Math.abs(b.y-p.y)<10){p.hitTimer=1.2;airBullets.splice(i,1);break;}}
  }
  for(let i=explosions.length-1;i>=0;i--){explosions[i].t+=dtSec;if(explosions[i].t>explosions[i].dur)explosions.splice(i,1);}
}
function drawMushroom(e){
  const t=e.t/e.dur,rise=Math.min(1,t*2.2);
  const fade=t<0.15?t/0.15:(t>0.7?1-(t-0.7)/0.3:1);
  const dist=1-(e.y/H);
  const baseOp=(e.behind?0.45:0.85)*(0.5+dist*0.5);
  const op=baseOp*fade;const size=(60+180*rise)*(e.behind?0.7:1);
  ctx.save();ctx.globalAlpha=op;ctx.translate(e.x,e.baseY);
  ctx.strokeStyle='rgba(255,200,120,.7)';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,0,size*1.4,size*0.25,0,0,Math.PI*2);ctx.stroke();
  ctx.strokeStyle='rgba(255,120,40,.4)';ctx.beginPath();ctx.ellipse(0,0,size*1.9,size*0.32,0,0,Math.PI*2);ctx.stroke();
  const gg=ctx.createRadialGradient(0,0,5,0,0,size*1.6);gg.addColorStop(0,'rgba(255,220,140,.85)');gg.addColorStop(0.4,'rgba(255,140,60,.5)');gg.addColorStop(1,'rgba(180,40,20,0)');
  ctx.fillStyle=gg;ctx.beginPath();ctx.ellipse(0,0,size*1.6,size*0.4,0,0,Math.PI*2);ctx.fill();
  const stemW=size*0.55,stemH=size*2.2*rise;
  const stemGrad=ctx.createLinearGradient(0,-stemH,0,0);stemGrad.addColorStop(0,'rgba(255,240,180,.9)');stemGrad.addColorStop(0.5,'rgba(255,180,80,.85)');stemGrad.addColorStop(1,'rgba(220,80,30,.7)');
  ctx.fillStyle=stemGrad;ctx.beginPath();ctx.moveTo(-stemW/2,0);ctx.lineTo(-stemW/2*0.7,-stemH);ctx.lineTo(stemW/2*0.7,-stemH);ctx.lineTo(stemW/2,0);ctx.closePath();ctx.fill();
  const capY=-stemH,capW=size*2.6*rise,capH=size*1.5*rise;
  const capGrad=ctx.createRadialGradient(0,capY,5,0,capY,capW);capGrad.addColorStop(0,'rgba(255,240,180,.95)');capGrad.addColorStop(0.35,'rgba(255,160,60,.9)');capGrad.addColorStop(0.7,'rgba(200,70,30,.75)');capGrad.addColorStop(1,'rgba(80,30,20,0)');
  ctx.fillStyle=capGrad;ctx.beginPath();ctx.ellipse(0,capY,capW/2,capH/2,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(60,40,30,.55)';for(let i=0;i<5;i++){const pxx=Math.cos(i*1.3)*capW*0.28,pyy=capY-capH*0.35-Math.abs(Math.sin(i*0.7))*capH*0.4;ctx.beginPath();ctx.arc(pxx,pyy,capH*0.35,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='rgba(255,255,220,.9)';ctx.beginPath();ctx.ellipse(0,capY,capW*0.15,capH*0.3,0,0,Math.PI*2);ctx.fill();
  ctx.restore();
}

/* ============ STATE ============ */
const state={hp:[100,100],turn:0,queue:[],qIdx:0,currentQ:null,busy:false,active:false,timeLeft:15,timerInterval:null};
const anim={soek:{lunge:0,lungeC:0,flash:0,flashC:0,bob:Math.random()*Math.PI*2},dutch:{lunge:0,lungeC:0,flash:0,flashC:0,bob:Math.random()*Math.PI*2}};
let shakeAmount=0,shakeTime=0;
const el={hp1:document.getElementById('hp1'),hp2:document.getElementById('hp2'),hp1n:document.getElementById('hp1n'),hp2n:document.getElementById('hp2n'),turn:document.getElementById('turn'),timer:document.getElementById('timer'),qPanel:document.getElementById('qPanel'),qText:document.getElementById('qText'),aGrid:document.getElementById('aGrid'),start:document.getElementById('start'),over:document.getElementById('over'),winName:document.getElementById('winName'),winSub:document.getElementById('winSub'),flashRed:document.getElementById('flashRed'),muteBtn:document.getElementById('muteBtn')};

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function updateHP(){const p1=Math.max(0,state.hp[0]),p2=Math.max(0,state.hp[1]);el.hp1.style.width=p1+'%';el.hp2.style.width=p2+'%';el.hp1n.textContent=p1;el.hp2n.textContent=p2;el.hp1.classList.toggle('low',p1<=30);el.hp2.classList.toggle('low',p2<=30);}
function feedback(text,color){const d=document.createElement('div');d.className='fb';d.textContent=text;d.style.color=color;document.getElementById('ui').appendChild(d);setTimeout(()=>d.remove(),1400);}
function floatDmg(target,text){const d=document.createElement('div');d.className='dmg';d.textContent=text;const rect=cv.getBoundingClientRect(),sx=rect.width/W,sy=rect.height/H;const cx=target===0?SOEK_X+SOEK_W/2:DUTCH_X+DUTCH_W/2;const cy=(target===0?SOEK_Y:DUTCH_Y)-30;d.style.left=(cx*sx)+'px';d.style.top=(cy*sy)+'px';document.getElementById('ui').appendChild(d);setTimeout(()=>d.remove(),1250);}
function doShake(a,d){shakeAmount=Math.max(shakeAmount,a);shakeTime=Math.max(shakeTime,d);}
function redFlash(){el.flashRed.style.transition='opacity .05s';el.flashRed.style.opacity='0.7';setTimeout(()=>{el.flashRed.style.transition='opacity .5s';el.flashRed.style.opacity='0';},80);}

function startGame(){
  initAudio();if(AC&&AC.state==='suspended')AC.resume();startMusic();
  state.hp=[100,100];state.turn=0;state.busy=false;state.active=true;state.qIdx=0;state.queue=shuffle([...QUESTIONS]);
  updateHP();el.start.style.display='none';el.over.classList.remove('on');startTurn();
}
function startTurn(){
  if(!state.active)return;
  if(state.hp[0]<=0||state.hp[1]<=0){endGame();return;}
  const names=['SOEKARNO-HATTA','TENTARA BELANDA'],colors=['#FFD93D','#87CEEB'];
  el.turn.textContent='GILIRAN: '+names[state.turn];el.turn.style.color=colors[state.turn];el.turn.style.borderColor=colors[state.turn];
  if(state.qIdx>=state.queue.length){state.queue=shuffle([...QUESTIONS]);state.qIdx=0;}
  const q=state.queue[state.qIdx++];state.currentQ=q;
  const opts=shuffle([q.ok,...q.no]);
  el.qText.textContent='> '+q.q;el.aGrid.innerHTML='';
  opts.forEach((o,i)=>{const b=document.createElement('button');b.className='abtn';b.textContent=String.fromCharCode(65+i)+'. '+o;b.dataset.v=o;b.onclick=()=>handleAnswer(o,b);el.aGrid.appendChild(b);});
  el.qPanel.classList.add('on');state.busy=false;
  state.timeLeft=15;el.timer.textContent=state.timeLeft;el.timer.classList.add('active');el.timer.classList.remove('warn');
  if(state.timerInterval)clearInterval(state.timerInterval);
  state.timerInterval=setInterval(()=>{if(!state.active){clearInterval(state.timerInterval);return;}state.timeLeft--;el.timer.textContent=state.timeLeft;if(state.timeLeft<=5)el.timer.classList.add('warn');if(state.timeLeft<=0){clearInterval(state.timerInterval);if(!state.busy){state.busy=true;timeoutAnswer();}}},1000);
}
function timeoutAnswer(){
  SFX.wrong();redFlash();doShake(14,400);
  el.qPanel.classList.add('shake');setTimeout(()=>el.qPanel.classList.remove('shake'),550);
  document.querySelectorAll('.abtn').forEach(b=>{b.disabled=true;if(b.dataset.v===state.currentQ.ok)b.classList.add('ok');});
  feedback('WAKTU HABIS!','#f87171');setTimeout(()=>rollCounterAttack(),1400);
}
function handleAnswer(sel,btn){
  if(state.busy)return;state.busy=true;
  if(state.timerInterval)clearInterval(state.timerInterval);el.timer.classList.remove('active','warn');
  const ok=state.currentQ.ok,correct=sel===ok;
  document.querySelectorAll('.abtn').forEach(b=>{b.disabled=true;if(b.dataset.v===ok)b.classList.add('ok');});
  if(!correct)btn.classList.add('no');
  if(correct){SFX.correct();setTimeout(()=>performAttack(state.turn,1-state.turn),600);}
  else{SFX.wrong();redFlash();doShake(16,500);el.qPanel.classList.add('shake');setTimeout(()=>el.qPanel.classList.remove('shake'),550);setTimeout(()=>feedback('MELESET!','#f87171'),250);setTimeout(()=>rollCounterAttack(),1500);}
}
function rollCounterAttack(){
  const counter=Math.random()<0.5;
  if(counter){setTimeout(()=>{SFX.counter();feedback('COUNTER ATTACK!','#FF6B6B');setTimeout(()=>performAttack(1-state.turn,state.turn),700);},200);}
  else{setTimeout(()=>{feedback('TIDAK ADA SERANGAN BALIK','#94a3b8');setTimeout(()=>nextTurn(),900);},200);}
}
function performAttack(atk,def){
  const names=['SOEKARNO','BELANDA'],colors=['#FFD93D','#87CEEB'];
  feedback(names[atk]+' MENYERANG!',colors[atk]);
  if(atk===0)anim.soek.lunge=1;else anim.dutch.lunge=1;
  setTimeout(()=>{SFX.hit();state.hp[def]=Math.max(0,state.hp[def]-10);updateHP();if(def===0)anim.soek.flash=1;else anim.dutch.flash=1;floatDmg(def,'-10');doShake(8,250);if(atk===0)anim.soek.lunge=0;else anim.dutch.lunge=0;setTimeout(()=>{if(state.hp[def]<=0)endGame();else nextTurn();},950);},300);
}
function nextTurn(){state.turn=1-state.turn;state.currentQ=null;startTurn();}

function showKOOverlay(){
  const ko=document.createElement('div');
  ko.style.cssText='position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:35;pointer-events:none;';
  const txt=document.createElement('div');
  txt.textContent='K.O.!';
  txt.style.cssText='color:#FF2828;font-size:clamp(80px,16vw,220px);font-weight:bold;text-shadow:6px 6px 0 #000,-3px -3px 0 #FFD93D,12px 12px 0 rgba(0,0,0,.5);animation:koPop 1.6s ease-out forwards;letter-spacing:8px;font-family:"Press Start 2P",monospace;';
  ko.appendChild(txt);document.getElementById('ui').appendChild(ko);
  if(!document.getElementById('koStyle')){
    const s=document.createElement('style');s.id='koStyle';
    s.textContent='@keyframes koPop{0%{opacity:0;transform:scale(.1) rotate(-20deg)}15%{opacity:1;transform:scale(1.4) rotate(8deg)}30%{transform:scale(1) rotate(-4deg)}45%{transform:scale(1.15) rotate(2deg)}60%{transform:scale(1) rotate(0)}85%{opacity:1;transform:scale(1.05)}100%{opacity:0;transform:scale(1.6)}}';
    document.head.appendChild(s);
  }
  setTimeout(()=>ko.remove(),1600);
}
function endGame(){
  state.active=false;if(state.timerInterval)clearInterval(state.timerInterval);
  el.qPanel.classList.remove('on');el.timer.classList.remove('active','warn');
  el.turn.textContent='PERTARUNGAN SELESAI';el.turn.style.color='#fff';el.turn.style.borderColor='#fff';
  stopMusic();SFX.ko();doShake(28,900);redFlash();setTimeout(redFlash,200);setTimeout(redFlash,400);
  showKOOverlay();
  setTimeout(()=>{
    const p1Win=state.hp[0]>0&&state.hp[1]<=0;
    const winner=p1Win?'SOEKARNO-HATTA':'TENTARA BELANDA';
    const sub=p1Win?'Kemerdekaan Indonesia tetap terjaga!':'Pasukan Belanda berhasil menaklukkan...';
    el.winName.textContent=winner;el.winName.style.color=p1Win?'#4ade80':'#f87171';
    el.winSub.textContent=sub;if(p1Win)SFX.win();else SFX.lose();
    setTimeout(()=>el.over.classList.add('on'),500);
  },1800);
}

function drawChar(img,x,y,face,a,idle){
  const bobY=Math.sin(performance.now()/idle+a.bob)*3;
  const lunge=a.lungeC*55;let shakeX=0;
  if(a.flashC>0.05)shakeX=Math.sin(performance.now()/28)*a.flashC*10;
  let dx=x+(face==='right'?lunge:-lunge)+shakeX;const dy=y+bobY;
  ctx.save();ctx.globalAlpha=0.4;ctx.fillStyle='#000';
  ctx.beginPath();ctx.ellipse(x+img.width/2+(face==='right'?lunge:-lunge)*0.5,GROUND_Y+4,img.width*0.42,9,0,0,Math.PI*2);ctx.fill();ctx.restore();
  ctx.drawImage(img,Math.round(dx),Math.round(dy));
  if(a.flashC>0.05){ctx.save();ctx.globalAlpha=a.flashC*0.55;ctx.fillStyle='#ff2828';ctx.fillRect(Math.round(dx),Math.round(dy),img.width,img.height);ctx.restore();}
}

let lastTime=performance.now();let nextPlaneSpawn=2000;
function render(now){
  const dt=Math.min(now-lastTime,50);lastTime=now;
  let shx=0,shy=0;
  if(shakeTime>0){shakeTime-=dt;shx=(Math.random()-0.5)*shakeAmount*2;shy=(Math.random()-0.5)*shakeAmount*2;shakeAmount*=0.9;}
  ctx.save();ctx.translate(shx,shy);
  if(bgCache)ctx.drawImage(bgCache,0,0);
  nextPlaneSpawn-=dt;
  if(nextPlaneSpawn<=0&&planes.length<4){nextPlaneSpawn=2500+Math.random()*2000;spawnPlanePair();}
  if(Math.random()<0.004){const ex=80+Math.random()*(W-160);const behind=Math.random()<0.6;spawnMushroom(ex,GROUND_Y-20-Math.random()*40,behind);}
  updatePlanes(dt);
  for(const e of explosions)if(e.behind)drawMushroom(e);
  for(const p of planes)drawPlane(p);
  for(const b of airBullets)drawAirBullet(b);
  for(const e of explosions)if(!e.behind)drawMushroom(e);
  anim.soek.lungeC+=(anim.soek.lunge-anim.soek.lungeC)*0.18;
  anim.dutch.lungeC+=(anim.dutch.lunge-anim.dutch.lungeC)*0.18;
  anim.soek.flashC+=(anim.soek.flash-anim.soek.flashC)*0.22;
  anim.dutch.flashC+=(anim.dutch.flash-anim.dutch.flashC)*0.22;
  anim.soek.flash*=0.94;anim.dutch.flash*=0.94;
  drawChar(SOEK_IMG,SOEK_X,SOEK_Y,'right',anim.soek,340);
  drawChar(DUTCH_IMG,DUTCH_X,DUTCH_Y,'left',anim.dutch,380);
  if(state.active){
    const ax=state.turn===0?SOEK_X+SOEK_W/2:DUTCH_X+DUTCH_W/2;
    const ay=(state.turn===0?SOEK_Y:DUTCH_Y)-22;
    const bnc=Math.sin(performance.now()/300)*5;
    ctx.save();ctx.fillStyle=state.turn===0?'#FFD93D':'#87CEEB';ctx.strokeStyle='#000';ctx.lineWidth=3;
    ctx.beginPath();ctx.moveTo(ax,ay+16+bnc);ctx.lineTo(ax-13,ay+bnc);ctx.lineTo(ax+13,ay+bnc);ctx.closePath();
    ctx.fill();ctx.stroke();ctx.restore();
  }
  ctx.restore();requestAnimationFrame(render);
}

/* ============ INIT ============ */
function init(){
  buildBackground();updateHP();
  document.getElementById('startBtn').addEventListener('click',()=>{SFX.click();startGame();});
  document.getElementById('againBtn').addEventListener('click',()=>{SFX.click();el.over.classList.remove('on');startGame();});
  el.muteBtn.addEventListener('click',()=>{
    sfxOn=!sfxOn;
    el.muteBtn.textContent=sfxOn?'SFX: ON':'SFX: OFF';
    el.muteBtn.classList.toggle('off',!sfxOn);
    if(!sfxOn)stopMusic();
    else if(state.active){initAudio();if(AC&&AC.state==='suspended')AC.resume();startMusic();}
  });
  requestAnimationFrame(render);
}
init();
