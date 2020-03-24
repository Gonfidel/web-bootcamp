function sing(){
  lyricsArr=[];
  htmlString='';
  for(let x = 99; x>=0;x--){
    if(x>1){
      lyricsArr.push(`${x} bottles of beer on the wall, ${x} bottles of beer. Take 1 down, pass it around, ${x-1} bottles of beer on the wall.`);
    }else if(x===1){
      lyricsArr.push(`${x} more bottle of beer on the wall, ${x} more bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.`);
    }else if(x===0){
      lyricsArr.push(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
    }else{
      console.log('an error has occured.')
    }
  }
  for(prop of lyricsArr){
    htmlString+=`<p>${prop}</p>`;
  }
  document.getElementById('render-dom').innerHTML=htmlString;
}
sing();
