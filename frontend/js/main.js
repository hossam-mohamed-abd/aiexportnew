document.querySelector(".go-to-tracks").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#tracks").scrollIntoView({
    behavior: "smooth",
  });
});
function openInNewTab(url) {
  window.open(url, '_blank');
}

function countVisit() {
  const script = document.createElement('script');
  script.src = 'https://script.google.com/macros/s/AKfycbztS88E58-A9b_OUOSKBzBjBaIt4AOow79y-5PYwYH9mle68XhWWqXErjnUg9QVNikt/exec?action=countVisit&callback=handleVisit';
  document.body.appendChild(script);
}

function handleVisit(data) {
  console.log('Total visits:', data.total);
}

countVisit();