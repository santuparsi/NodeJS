exports.Add = (a,b) =>
{
    return a + b;
}
exports.Mul=(a,b)=>{return a*b}
exports.Sub=(a,b)=>{return a-b}
exports.Div=(a,b)=>{
    if(b==0)
    return 0;
    else
    {
        return a/b;
    }
}
