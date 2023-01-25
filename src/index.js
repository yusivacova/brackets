module.exports = function check(str, bracketsConfig) {
    let copyStr = str;
    let i = 0;


    function cleansDouble (){
        bracketsConfig.forEach(function(item){
            copyStr = copyStr.replace(`${item[0]}${item[1]}`, '');
        }
        )};
        
        do{
            cleansDouble ();
            i++;
        } while (i < 50);
       
        let result = (copyStr.length === 0) ? true : false;
        
        return result;
}



