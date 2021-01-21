import { iframeResize } from 'iframe-resizer'

const script = document.getElementById('datagir-fruits-et-legumes')

const domain = encodeURIComponent(script.dataset.domain)
const search = encodeURIComponent(script.dataset.search)
const theme = encodeURIComponent(script.dataset.theme)
const title = encodeURIComponent(script.dataset.title)
const source = encodeURIComponent(window.location.href.toString())

const src = `${domain}/embed?search=${search}&theme=${theme}&title=${title}&title=${source}`

const iframe = document.createElement('iframe')

const iframeAttributes = {
  src,
  style:
    'border: none; width: 100%; min-height: 750px; display: block; margin: 0 auto 10px;',
  allowfullscreen: true,
  webkitallowfullscreen: true,
  mozallowfullscreen: true,
}
for (var key in iframeAttributes) {
  iframe.setAttribute(key, iframeAttributes[key])
}
iframeResize({}, iframe)

script.parentNode.insertBefore(iframe, script)
