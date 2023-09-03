---
name: NodeLinkedList
description: Linked List and DoubleLinked List for Node
html_url: https://github.com/Eneko96/NodeLinkedList
created_at: 2023-03-21T17:16:44Z
topics: 
languages: JavaScript
---
# Linked List

## Example of usage

```js
const main = () => {
  const linkedList = new LinkedList();
  // mega big list
  for (let i = 0; i < 60; i++) {
    linkedList.insertNode(i);
  }

  // find several elements
  for (let i = 0; i < 60; i++) {
    linkedList.findNode(i);
  }

  for (let i = 0; i < 50; i++) {
    linkedList.deleteNode(i);
  }
}

const commonList = () => {
  const list = [];
  for (let i = 0; i < 60; i++) {
    list.push(i);
  }

  // find several elements
  for (let i = 0; i < 60; i++) {
    list.find((item) => item === i);
  }

  for (let i = 0; i < 50; i++) {
    list.splice(i, 1);
  }
}

```
