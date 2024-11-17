function error_handle(){
  output=document.getElementById("output").value
  if (output.length>4096){
    throw new Error("Output has more than 4096 bytes and has been truncated");
  }
}
