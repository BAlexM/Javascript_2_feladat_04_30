
function fakt(f){let fac = 1 
  for ( index = 1; index < f; index++) {fac = fac*(index+1)}return fac;}
function hf(){document.write("<table class='style'>");
  for (index = 0; index < 21; index++) 
  {if (index != 0) {document.write("<tr><td class='elso'>"+ index +"!=</td><td class='masodik'>"+ fakt(index) +"</td></tr>")}
  else{document.write("<tr><td class='elso'>"+ index +"!=</td><td class='masodik'>"+ 1 +"</td></tr>")}}document.write("</table>");}hf();
