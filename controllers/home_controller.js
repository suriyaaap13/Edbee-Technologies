module.exports.home = (req, res)=>{
    const imei = req.body.imei;
    if(imei.length!=15){
        console.log(imei.length);
        return res.status(200).json({message: "Not a Valid IMEI Code"});
    }
    let result = 0;
    for(let i = 14; i >= 0; i--){
        if(i%2==0){
            result+=(imei[i]-'0');
        }else{
            let num = 2*imei[i];
            while(num>9){
                let temp = Math.floor(num/10) + num%10;
                num = temp;
            }
            result+=num;
        }
    }
    if(result%10){
        return res.status(200).json({message: "Not a Valid IMEI Code"});
    }else{
        return res.status(200).json({message: "Valid IMEI Code"})
    }
}