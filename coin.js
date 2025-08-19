const countcoim=(money,coin=[25,10,5,2,1])=>{
    const totalcoins=[];
    for(let i=0;i<coin.length;i++){
        const thiscoinnum=Math.floor(money/coin[i]);
        for(let j=0;j<thiscoinnum;j++){
            totalcoins.push(coin[i]);
        }
        money-=thiscoinnum*coin[i];
    }
    return totalcoins;
}

console.log(countcoim(46));     