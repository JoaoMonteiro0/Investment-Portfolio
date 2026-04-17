fetch("components/navbar.html")
  .then((res) => {
    console.log(res.text);

    return res.text();
  })
  .then((html) => {
    console.log(html);
    document.getElementById("navbar").innerHTML = html;
  });

fetch("components/footer.html")
  .then((res) => {
    console.log(res.text);

    return res.text();
  })
  .then((html) => {
    console.log(html);
    document.getElementById("footer").innerHTML = html;
  });
