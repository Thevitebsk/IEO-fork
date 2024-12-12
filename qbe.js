//"queue-based esolang" is, well, a queue-based esolang. It's also User:Emelang's first time in a while writing an interpreter for one of his esolangs.
//p - pushes a charecter to the queue
//q - discards the bottom charecter from the queue
//Q - same as "q" but prints the carecter
function qbe(program){
  var output='';var q=[]
  for(var p=0;p<program.length;p++){
    if (program[p]=="p"){q.push(p++);p++}
    else if (program[p]=="q"){q.shift();}
    else if (program[p]=="Q"){output+=q[0];q.shift();};
  };
  return output;
};
