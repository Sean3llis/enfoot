export function dropScript(src, callback) {
  var script = document.createElement('script');
  var scripts = document.getElementsByTagName('script')[0];
  script.src = src;
  script.onload = callback;
  scripts.parentNode.insertBefore(script, scripts);
}