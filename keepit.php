<div class="flower">
<div class="row1">
    <div class="flower1"><img src="Cherished Blooms.jpg"></div>
    <div class="flower2"><img src="Chic Garden.jpg"></div>
    </div><br><br>
    <div class="row2">
    <div class="flower3"><img src="Assorted Roses & Peruvian Lilies.jpg"></div>
    <div class="flower4"><img src="Fields of Europe Bliss.jpg"></div>
    </div><br><br>
    <div class="row3">
    <div class="flower5"><img src="Peruvian Lilies.jpg"></div>
    <div class="flower6"><img src="Love Pup.jpg"></div>
    </div><br><br>
</div>

.flower{
            background-image: url("img2.jpg"); /* The image used */
            background-color: #cccccc; /* Used if the image is unavailable */
            height: 2000px; /* You must set a specified height */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Do not repeat the image */
            background-size: cover; 
            margin-right:0px;
            margin-left:0px;    
         }
         .row1,.row2,.row3{
            background-color:grey;
        }

        .row1 div{
            width: 300px; height: 100px; float: left; margin-left:300px; margin-top:100px;
        }
        .row2 div{
            width: 300px; height: 100px; float: left; margin-left:300px; margin-top:400px;
        }
        .row3 div{
            width: 300px; height: 100px; float: left; margin-left:300px; margin-top:400px;
        }
        



        <div class="rows">
    <div class="row1"><img src="Cherished Blooms.jpg">
     <p class="p">Every soul is to cherished ,that every every flower is to bloom.</p>
     <input type="button" id="btn" value="Buy Now">
    </div>
    <div class="row1"><img src="Chic Garden.jpg">
    <p class="p">Flowers don't tell,they show.</p>
     <input type="button" id="btn" value="Buy Now">
  </div>
    </div>
    <div class="rows2">
    <div class="row2"><img src="Cherished Blooms.jpg">
     <p class="p">Every soul is to cherished ,that every every flower is to bloom.</p>
     <input type="button" id="btn" value="Buy Now">
    </div>
    <div class="row2"><img src="Chic Garden.jpg">
    <p class="p">Flowers don't tell,they show.</p>
     <input type="button" id="btn" value="Buy Now">
  </div>
    </div>


    .row1{
          display:table-cell;
          padding:200px;
          border:1px solid black;
         
         } 
      .p{
        word-break: keep-all;
        font-size:16px;
        font-weight: 600;
        font-family:Arial, Helvetica, sans-serif;
      }
      #btn{
         margin-left:100px;
         color:white;
         background-color:green;
         height:40px;
      }