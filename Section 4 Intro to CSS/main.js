function loadHomePage(){
  document.getElementById('RenderDOM').innerHTML = homePage;
}
function loadContactPage(){
  document.getElementById('RenderDOM').innerHTML = contactPage;
}
function loadHobbiesPage(){
 document.getElementById('RenderDOM').innerHTML = hobbiesPage;
}
































var homePage = `
<div class="flex-container intro intro-bg">
<div class="flex-item"><img src="./insane.png" alt="Profile Image"></div>
<div class="flex-item">
    <h1>Nic George</h1>
    <p>Security Engineer of <a href="https://www.strongconnexions.com">Strong Connexions Inc.</a></p>
    <p>I am a Cyber Security Analyst that helps Small to Medium business potential vulnerabilities in their network, and remediate them.</p>
</div>
</div>        

<div class="flex-container">
    <div class="flex-item">
        <header>
          <h3>Favorite Languages</h3>
        </header>
          <li>Java</li>
          <li>Ruby</li>
          <li>Javascript</li>
    </div><!-- END OF FLEX ITEM  -->
    <div class="flex-item">
        <header>
            <h3>Work Experience</h3>
        </header>
            <table>
                <thead><th>Dates</th><th>Work</th></thead>
                <tr>
                    <td>2010</td>
                    <td>Walmart</td>
                </tr>
                <tr>
                    <td>2011</td>
                    <td>McDonalds</td>
                </tr>
            </table>
    </div><!-- END OF FLEX ITEM  -->
    <div class="flex-item">
        <header>
            <h3>Skills</h3>
        </header>
            <table>
                <tr>
                    <td>
                        <table>
                            <tr><td>Programming</td><td>⭐⭐⭐⭐⭐</td></tr>
                            <tr><td>Cooking</td><td>⭐⭐</td></tr>
                            <tr><td>Swimming</td><td>⭐⭐</td></tr>
                        </table>
                    </td>
                    <td>
                        <table >
                            <tr><td>Crossfit</td><td>⭐⭐⭐</td></tr>
                            <tr><td>Writing</td><td>⭐⭐</td></tr>
                            <tr><td>Gaming</td><td>⭐⭐⭐⭐⭐</td></tr>
                            <tr><td> </td></tr>
                        </table>
                    </td>
                </tr>
            </table>
    </div> <!-- END OF FLEX ITEM  -->
</div> <!-- END OF FLEX CONTAINER  -->

<div class="flex-container-centered">    
    <a href="#" onclick="loadHobbiesPage()">My Hobbies</a>
    <a href="#" onclick="loadContactPage()">Contact Me</a>
    <a href="./html_challenge.html">Click to view the code challenge for intermediate HTML</a>
</div>
    `;

var contactPage = `
  <h1>My contact details</h1>
  <p>Fictional Address</p>
  <p>Tel: 456-456-7894</p>
  <p>email@email.com</p>

  <form action="mailto:info@email.com" method="post" enctype="text/plain">
    <label>Your Name: </label>
    <input type="text" name="yourName"><br>
    <label>Your Email: </label>
    <input type="email" name="yourEmail" id=""><br>
    <label>Your Your Message: </label><br>
    <textarea name="yourMessage" id="" cols="30" rows="10"></textarea><br>
    <input type="submit" value="Submit">
  </form>

  <a href="#" onclick="loadHomePage()">go back..</a>
`;

var hobbiesPage = `
  <h3>My Hobbies</h3>
  <ul>
      <li>Gaming</li>
      <li>Programming</li>
      <li>Music</li>
  </ul>

  <a href="#" onclick="loadHomePage()">go back..</a>
`;