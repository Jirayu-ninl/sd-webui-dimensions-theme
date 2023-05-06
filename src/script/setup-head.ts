export default () => {
  // favicon
  const favicon: HTMLLinkElement = document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = 'https://raw.githubusercontent.com/Jirayu-ninl/SD-IceJi-ProFantasy/e1675b50029d51c42bde113d98956e5265ef4dae/IIJ_White.svg'
  document.getElementsByTagName('head')[0].appendChild(favicon)
}
