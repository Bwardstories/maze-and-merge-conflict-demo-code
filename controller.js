function handleKeys(event) {
  if (!event.key.startsWith("Arrow")) {
    return;
  }

  console.log(event.key);
}

document.addEventListener("keydown", handleKeys);
