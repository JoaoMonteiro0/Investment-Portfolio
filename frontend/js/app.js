fetch("components/navbar.html")
  .then((res) => {
    console.log(res.text);

    return res.text();
  })
  .then((html) => {
    console.log(html);
    document.getElementById("navbar").innerHTML = html;
  });
