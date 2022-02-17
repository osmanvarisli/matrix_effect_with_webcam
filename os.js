/*! os.js v00000.1 Osman VARIŞLI */
let s = [];
let say=0;
function setup() {
  let h=600
  createCanvas(600, h);
  
  while (s.length < h/15) {
      s.push(new sutun()); 
  }
  
  
  harfler='OSMANVARISLI*OSMANVARISLI';
  
  capture = createCapture(VIDEO);
  //capture.size(350,350);
  capture.hide();
}

function draw() {
  background(0);

  capture.loadPixels();
  textSize(14);
  var stepSize =8;
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y*capture.width) + x) * 4;
      var r = capture.pixels[index];
      var g =capture.pixels[index + 1];
      var b =capture.pixels[index + 2];
      var ort=(r+g+b)/3
		

      fill(r, g, b);
      chars = "osman   ";
	  var c=floor(map(ort,0,255,0,chars.length));
	  //hhh=height/2-capture.height/(stepSize*2);
	  //www=width/2-capture.width/(stepSize*2);
	  //text(chars[c], x/3+hhh, y/3+www);
      text(chars[c], 100+x, 100+y);
	  
	  

    }
  }
  
  say+=1;
  for (let i = 0; i < s.length; i++) {
    s[i].don();
  }
}

class sutun {
  constructor() {

    this.x=s.length*15;
    this.y = 0;
    this.rndcolor = random(5,15);
    this.text=''
    this.wait = 0;
    this.size=15;
    this.sil='hayır';
    this.start_time=random(1,50);
  }

  don() {
    
    textSize(this.size);
    
    if (say<this.start_time*10) return ;
    this.wait+=1;
    if (this.wait==2){
      
      if (this.sil=='hayır'){
        if (this.text.length<40){
          this.text=this.text+harfler[int(random(harfler.length))];  
        }
        else{
          this.sil='evet';

        }
      }
      else if (this.sil=='evet'){
        if (this.text.length>0){
            this.text=this.text.substr(1,this.text.length);
            this.y+=1; 
        }
        else{
            this.sil='hayır';
            this.y=0;
        }     
      }
      
      this.wait=0;
    }
  
    
    for(var i=0;i<this.text.length;i++){
      //fill(0, 102, 153);
      if (i==this.text.length-1){
          fill(255, 255, 255);
      }
      else if(i==this.text.length-2){
          fill(143, 192, 143);
      }
      else if (i==this.text.length-3){
          fill(62, 100, 62);
      }
      else if (i==this.text.length-3){
          fill(43, 43, 43);
      }
      else if (i==0){
          fill(47, 61, 48);
      }
      else if (i==1){
          fill(64, 98, 58);
      }
      else if (i==2){
          fill(64, 98, 58);
      }
      else if (i==int(this.rndcolor)){
          fill(17, 239, 32);
      }
      else{
          fill(0, 100, 0);
      }
      text(this.text[i], this.x, (i+this.y)*15);
    }
    
  }

}
