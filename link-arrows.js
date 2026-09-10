// Use geometry instead of a Unicode character that iOS may render as emoji.
(() => {
  const markup = '<svg class="external-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="display:inline-block;width:1em;height:1em;vertical-align:-.1em;flex-shrink:0"><path d="M4 20 20 4M4 4h16v16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="square" stroke-linejoin="miter"/></svg>';
  function replace(root) {
    const nodes = [];
    if (root.nodeType === Node.TEXT_NODE) nodes.push(root);
    else {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) nodes.push(walker.currentNode);
    }
    for (const node of nodes) {
      if (!node.textContent.includes('↗') || !node.parentElement?.closest('a,button')) continue;
      const fragment = document.createDocumentFragment();
      const parts = node.textContent.split(/↗[\uFE0E\uFE0F]?/);
      parts.forEach((part, i) => {
        if (i) { const template = document.createElement('template'); template.innerHTML = markup; fragment.append(template.content); }
        fragment.append(document.createTextNode(part));
      });
      node.replaceWith(fragment);
    }
  }
  replace(document.body);
  new MutationObserver(changes => changes.forEach(change => {
    if (change.type === 'characterData') replace(change.target);
    else change.addedNodes.forEach(replace);
  })).observe(document.body, {childList:true,subtree:true,characterData:true});
})();
